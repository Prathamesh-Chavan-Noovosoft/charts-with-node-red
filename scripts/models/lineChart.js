import { drawLine, drawCircle } from "../utils/draw.js";

export function buildLineChart({
    graph,
    color,
    color2,
    lineColor,
    lineColor2,
}) {
    const lineChartElements = {
        color,
        color2,
        lineColor,
        lineColor2,
    };
    const lineChart = createLineChart({ graph, ...lineChartElements });

    drawLineChart(lineChart);
}

function createLineChart({ graph, color, color2, lineColor, lineColor2 }) {
    graph.color = color;
    graph.lineColor = lineColor;
    graph.color2 = color2;
    graph.lineColor2 = lineColor2;

    console.log(`interval size: ${graph.yIntervalSize}`);
    console.log(`X Min: ${graph.xMin}, Y Min: ${graph.yMin}`);
    console.log(`X Max: ${graph.xMax}, Y Max: ${graph.yMax}`);
    console.log(`X Width: ${graph.xWidth}, Y Width: ${graph.yWidth}`);

    return graph;
}
/**
 * @param {object} graph
 */

function drawConnectionLines(graph, data, start, lineColor) {
    for (let index = start; index < data.length - 1; index++) {
        // console.log(index, graph.data[index]);
        drawLine(graph.svg, {
            x1: graph.xStart + graph.xWidth * (index + 1),
            y1: graph.yStart - (data[index] - graph.yMin) * graph.yWidth,
            x2: graph.xStart + graph.xWidth * (index + 2),
            y2: graph.yStart - (data[index + 1] - graph.yMin) * graph.yWidth,
            stroke: lineColor, // extra element in strokes for average line color
            strokeWidth: 2,
        });
    }
}

/**
 * @param {object} graph
 */

function drawPoints(graph, data, start, color) {
    for (let index = start; index < data.length; index++) {
        drawCircle(graph.svg, {
            cx: graph.xStart + graph.xWidth * (index + 1),
            cy: graph.yStart - (data[index] - graph.yMin) * graph.yWidth,
            r: 3,
            fill: color,
        });
    }
}
/**
 * @param {object} graph
 */
function drawLineChart(graph) {
    drawPoints(graph, graph.data, 0, graph.data.length, graph.color);
    drawConnectionLines(graph, graph.data, 0, graph.lineColor);

    drawPoints(graph, graph.data2, 0, graph.color2);
    drawConnectionLines(graph, graph.data2, 0, graph.lineColor2);
}
