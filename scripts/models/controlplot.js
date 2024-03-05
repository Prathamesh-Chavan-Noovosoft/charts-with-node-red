import { drawLine, drawCircle } from "../utils/draw";
import { listenButtonSubmit } from "../events/submitEvents";
import { generateControlPlotData } from "../data/generateData";
import {
    createGraph,
    drawXYLines,
    drawXElements,
    drawYElements,
} from "./graph";

export function buildControlPlot({ data, scaleFactor }) {
    const svg = document.getElementById("svg1");
    svg.innerHTML = "";
    const graphElements = {
        svg,
        xMin: 0,
        controlLimit: 3,
        data: data,
        color: "lightgreen",
        yIntervalSize: scaleFactor,
        secondaryColor: "red",
        strokes: ["yellow", "orange", "red", "green"],
    };

    let controlPlot = createControlPlot(graphElements);

    drawControlPlot(controlPlot);
    setupControlPlotRulesLogic(controlPlot);
    setupClearButtonLogic(controlPlot);
}

export function setupControlPlotLogic() {
    const createControlPlotButton = document.getElementById(
        "create-control-plot",
    );
    listenButtonSubmit(createControlPlotButton, () => {
        let res = generateControlPlotData();

        console.log("Control Plot data- ", JSON.stringify(res.data));

        console.log("Starting control plot creation");
        buildControlPlot({
            data: res.data,
            scaleFactor: res.scaleFactor,
        });
    });
}

function createControlPlot({
    svg,
    data,
    color,
    secondaryColor,
    strokes,
    xMin,
    controlLimit,
    yIntervalSize,
}) {
    // X Axis Constraints
    let xLen = data.length;

    // Y Axis Constraints
    let yMin = Math.floor(Math.min(...data));
    let yLen =
        Math.floor(Math.ceil(Math.max(...data) - yMin) / yIntervalSize) + 1;

    // Checking maximum
    let yMax = Math.max(...data);
    console.log("absolute Max: ", yMax);

    let graph = createGraph({ svg, data, yLen, yMin, xMin, xLen, yIntervalSize });
    graph.color = color;
    graph.secondaryColor = secondaryColor;
    graph.strokes = strokes;

    graph.target =
        data.reduce((previous, current) => previous + current, 0) / data.length; // Average of All Data points

    graph.controlLimit = controlLimit;

    graph.upperZoneA = graph.target + 3;
    graph.lowerZoneA = graph.target - 3;

    graph.upperZoneB = graph.target + 2;
    graph.lowerZoneB = graph.target - 2;

    graph.upperZoneC = graph.target + 1;
    graph.lowerZoneC = graph.target - 1;

    console.log("target: ", graph.target);
    console.log(`interval size: ${graph.yIntervalSize}`);
    console.log(`X Min: ${graph.xMin}, Y Min: ${graph.yMin}`);
    console.log(`X Length: ${graph.xLen}, Y Length: ${graph.yLen}`);
    console.log(`X Width: ${graph.xWidth}, Y Width: ${graph.yWidth}`);

    return graph;
}

function drawControlLines(graph) {
    drawLine(graph.svg, {
        x1: graph.xStart,
        y1: graph.yStart - (graph.target - graph.yMin) * graph.yWidth,
        x2: graph.xStart + graph.xWidth * graph.xLen + graph.xWidth,
        y2: graph.yStart - (graph.target - graph.yMin) * graph.yWidth,
        stroke: graph.strokes[graph.strokes.length - 1], // extra element in strokes for average line color
        strokeWidth: 2,
    });
    for (let i = 0; i < graph.controlLimit; i++) {
        for (let index = 0; index <= graph.xLen; index++) {
            // Upper
            drawLine(graph.svg, {
                x1: graph.xStart + graph.xWidth * index,
                y1: graph.yStart - (graph.target + (i + 1) - graph.yMin) * graph.yWidth,
                x2: graph.xStart + graph.xWidth * index + 10,
                y2: graph.yStart - (graph.target + (i + 1) - graph.yMin) * graph.yWidth,
                stroke: graph.strokes[i],
                strokeWidth: 2,
            });

            // Lower
            drawLine(graph.svg, {
                x1: graph.xStart + graph.xWidth * index,
                y1: graph.yStart - (graph.target - (i + 1) - graph.yMin) * graph.yWidth,
                x2: graph.xStart + graph.xWidth * index + 10,
                y2: graph.yStart - (graph.target - (i + 1) - graph.yMin) * graph.yWidth,
                stroke: graph.strokes[i],
                strokeWidth: 2,
            });
        }
    }
}

function drawPoints(graph, start, len, color) {
    for (let index = start; index < len; index++) {
        drawCircle(svg1, {
            cx: graph.xStart + (index + 1) * graph.xWidth,
            cy: graph.yStart - (graph.data[index] - graph.yMin) * graph.yWidth,
            r: 3,
            id: index,
            fill: color,
        });
    }
}

function drawControlPlot(graph) {
    // await sleep(1000);
    // Draw X Axis elements
    drawXElements(graph);
    // Draw Y Axis elements
    drawYElements(graph);
    // Draw Axis lines
    drawXYLines(graph);
    drawControlLines(graph);
    drawPoints(graph, 0, graph.data.length, graph.color);
}

// graph Function Checks Each point & Draws the points that meet comparator condition
function checkEachPoint(graph, comparator) {
    graph.data.map((curr, index) => {
        if (comparator(curr, graph.upperZoneA, "UCL")) {
            drawPoints(graph, index, index + 1, graph.secondaryColor);
        } else if (comparator(curr, graph.lowerZoneA, "LCL")) {
            drawPoints(graph, index, index + 1, graph.secondaryColor);
        }
    });
}

// graph Function Checks Subarrays of a certain length & Draws the subarray that meets comparator condition
// NOTE: graph can be optimized using Two pointer approach.
function checkConsecutiveSubArrays(
    graph,
    comparator,
    { firstIndex, distance, isMultiComparison },
) {
    let count = 0;
    let start = -1;
    for (let i = firstIndex; i < graph.data.length - distance; i++) {
        count = 0;
        for (let j = i; j < i + distance; j++) {
            // Extra arguments will be ignored
            if (comparator(graph.data[j], graph.data[j + 1], graph.data[j + 2])) {
                count++;
            } else {
                console.log("count: ", count);
                break;
            }
        }
        // -2 because we are comparing 3 elements at once
        if ((isMultiComparison && count >= distance - 2) || count >= distance) {
            start = i;
            console.log("start: ", start);
            drawPoints(graph, start, start + distance, graph.secondaryColor);
        }
    }
}
// Checks if X elements out of total Y consecutive elements follow a rule
function checkXoutOfY(graph, comparator, { firstIndex, distance, x }) {
    for (let i = firstIndex; i < graph.data.length - distance; i++) {
        // Upper Zone
        let pointsToDraw = [];
        for (let j = i; j < i + distance; j++) {
            if (comparator(graph.data[j], "upper")) {
                pointsToDraw.push(j);
            }
        }
        for (let j = i; j < i + distance; j++) {
            if (comparator(graph.data[j], "lower")) {
                pointsToDraw.push(j);
            }
        }
        if (pointsToDraw.length >= x) {
            pointsToDraw.map((e) => {
                drawPoints(graph, e, e + 1, graph.secondaryColor);
            });
        }
    }
}
function verifyRule1(graph) {
    console.log("verifying rule 1");
    checkEachPoint(graph, (current, next, type) => {
        if (type === "UCL") return current > next;
        else type === "LCL";
        return current < next;
    });
}
function verifyRule2(graph) {
    console.log("verifying rule 2");
    let distance = 5;
    // Checking Decreasing elements
    checkConsecutiveSubArrays(
        graph,
        (current, next) => {
            return current > next;
        },
        {
            distance,
            firstIndex: 0,
            isMultiComparison: false,
        },
    );
    // Checking Increasing elements
    checkConsecutiveSubArrays(
        graph,
        (current, next) => {
            return current < next;
        },
        { firstIndex: 0, distance, isMultiComparison: false },
    );
}
function verifyRule3(graph) {
    console.log("verifying rule 3");
    let distance = 5;
    // Checking 5 consecutive elements above Target
    checkConsecutiveSubArrays(
        graph,
        (current) => {
            return current > graph.target;
        },
        { firstIndex: 0, distance, isMultiComparison: false },
    );
    // Checking 5 consecutive elements below Target
    checkConsecutiveSubArrays(
        graph,
        (current) => {
            return current < graph.target;
        },
        {
            distance,
            firstIndex: 0,
            isMultiComparison: false,
        },
    );
}
function verifyRule4(graph) {
    console.log("verifying rule 4");
    let distance = 14;
    // Finding consecutive alternating elements -> prev = 0 means last element was smaller, prev = 1 means last element was greater
    checkConsecutiveSubArrays(
        graph,
        (first, second, third) => {
            return (
                (first < second && second > third) || (first > second && second < third)
            );
        },
        { firstIndex: 0, distance, isMultiComparison: true },
    );
}
function verifyRule5(graph) {
    console.log("verifying rule 5");
    let x = 2;
    let distance = 3;
    checkXoutOfY(
        graph,
        (current, type) => {
            return type === "upper"
                ? current > graph.upperZoneB
                : current < graph.lowerZoneB;
        },
        { firstIndex: 0, distance, x },
    );
}
function verifyRule6(graph) {
    console.log("verifying rule 6");
    let x = 4;
    let distance = 5;
    checkXoutOfY(
        graph,
        (current, type) => {
            return type === "upper"
                ? current > graph.upperZoneC
                : current < graph.lowerZoneC;
        },
        { firstIndex: 0, distance, x },
    );
}
function verifyRule7(graph) {
    console.log("verifying rule 7");
    let distance = 12;
    checkConsecutiveSubArrays(
        graph,
        (current) => {
            return graph.upperZoneC > current && current > graph.lowerZoneC;
        },
        {
            distance,
            firstIndex: 0,
            isMultiComparison: false,
        },
    );
}

function setupControlPlotRulesLogic(graph) {
    const verifyButtons = [];
    for (let i = 1; i <= 7; i++) {
        verifyButtons.push(document.getElementById(`rule-${i}`));
    }
    console.log(verifyButtons);

    // verifyButtons.map((button, i) => {
    //     button.addEventListener("click", () => {
    //         graph`verifyRule${i + 1}`;
    //     });
    // });
    verifyButtons.map((button) => {
        button.addEventListener("click", () => {
            drawPoints(graph, 0, graph.data.length, graph.color);
        });
    });
    verifyButtons[0].addEventListener("click", () => {
        verifyRule1(graph);
    });
    verifyButtons[1].addEventListener("click", () => {
        verifyRule2(graph);
    });
    verifyButtons[2].addEventListener("click", () => {
        verifyRule3(graph);
    });
    verifyButtons[3].addEventListener("click", () => {
        verifyRule4(graph);
    });
    verifyButtons[4].addEventListener("click", () => {
        verifyRule5(graph);
    });
    verifyButtons[5].addEventListener("click", () => {
        verifyRule6(graph);
    });
    verifyButtons[6].addEventListener("click", () => {
        verifyRule7(graph);
    });
}
function setupClearButtonLogic(graph) {
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
        graph.svg.innerHTML = "";
        drawControlPlot(graph);
    });
}
