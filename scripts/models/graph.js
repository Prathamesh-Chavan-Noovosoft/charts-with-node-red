import { drawLine, drawText } from "../utils/draw.js";

export function createGraph({ svg, data, data2, xMin, yIntervalSize }) {
    // X Axis Constraints
    const xMax = Math.max(data.length, 60); // Default length in x Axis

    // Y Axis Constraints
    let yMin = Math.min(
        Math.floor(Math.min(...data2)),
        Math.floor(Math.min(...data)),
    );
    let yMax = Math.max(
        Math.floor(Math.ceil(Math.max(...data2) - yMin) / yIntervalSize) + 1,
        Math.floor(Math.ceil(Math.max(...data) - yMin) / yIntervalSize) + 1,
    );

    const state = {
        svg,
        data,
        data2,
        xMin,
        xMax,
        yMin,
        yMax,
        yIntervalSize,
        xStart: 0,
        yStart: 380,
        yWidth: 360 / (yMax * yIntervalSize),
        xWidth: 1200 / xMax,
    };

    return state;
}

export function drawGraph(graph) {
    graph.svg.innerHTML = "";
    // Draw X Axis elements
    drawXElements(graph);
    // Draw Y Axis elements
    drawYElements(graph);
    // Draw Axis lines
    drawXYLines(graph);
}

/**
 *
 * @param graph
 *
 */
export function drawXYLines(graph) {
    // common logic for drawing X and Y lines
    // Draw x-axis and y-axis
    drawLine(graph.svg, {
        x1: graph.xStart,
        y1: graph.yStart,
        x2: graph.xStart + graph.xWidth * graph.xMax + 3 * graph.xWidth,
        y2: graph.yStart,
    });
    drawLine(graph.svg, {
        x1: graph.xStart,
        y1: graph.yStart - 3 * graph.yWidth * (graph.yMax * graph.yIntervalSize),
        x2: graph.xStart,
        y2: graph.yStart,
    });
}
export function drawXElements(graph) {
    // common logic for drawing X elements
    for (let index = 0; index <= graph.xMax; index++) {
        // X Axis labels
        drawText(graph.svg, {
            x: graph.xStart + graph.xWidth * (index + 1),
            y: graph.yStart + 25, // slight offset for making labels visible
            text: index + 1,
        });

        // X Axis ticks
        drawLine(graph.svg, {
            x1: graph.xStart + graph.xWidth * index,
            y1: graph.yStart,
            x2: graph.xStart + graph.xWidth * index,
            y2: graph.yStart + 5, // slight offset for making labels visible
        });
    }
}
export function drawYElements(graph) {
    // common logic for drawing Y elements
    for (let index = 0; index <= graph.yMax; index++) {
        // Y Axis labels
        drawText(graph.svg, {
            x: graph.xStart - 20,
            y: graph.yStart - index * (graph.yWidth * graph.yIntervalSize), // yWidth scales with yIntervalSize
            text: graph.yMin + index * graph.yIntervalSize,
        });

        // Y Axis ticks
        drawLine(graph.svg, {
            x1: graph.xStart - 5,
            y1: graph.yStart - index * (graph.yWidth * graph.yIntervalSize),
            x2: graph.xStart,
            y2: graph.yStart - index * (graph.yWidth * graph.yIntervalSize),
        });
    }
}
