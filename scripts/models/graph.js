import { drawLine, drawText } from "../utils/draw";

export function createGraph({
    svg,
    data,
    xMin,
    xLen,
    yMin,
    yLen,
    yIntervalSize,
}) {
    let state = {
        svg,
        data,
        xStart: 0,
        yStart: 380,
        xMin,
        xLen,
        yMin,
        yLen,
        yIntervalSize,
        yWidth: 360 / (yLen * yIntervalSize),
        xWidth: 1200 / xLen,
    };

    return state;
}

export function drawXYLines(graph) {
    // common logic for drawing X and Y lines
    // Draw x-axis and y-axis
    drawLine(graph.svg, {
        x1: graph.xStart,
        y1: graph.yStart,
        x2: graph.xStart + graph.xWidth * graph.xLen + graph.xWidth,
        y2: graph.yStart,
    });
    drawLine(graph.svg, {
        x1: graph.xStart,
        y1: graph.yStart - graph.yWidth * (graph.yLen * graph.yIntervalSize),
        x2: graph.xStart,
        y2: graph.yStart,
    });
}
export function drawXElements(graph) {
    // common logic for drawing X elements
    for (let index = 0; index <= graph.xLen; index++) {
        // X Axis labels
        drawText(graph.svg, {
            x: graph.xStart + graph.xWidth * index,
            y: graph.yStart + 25, // slight offset for making labels visible
            text: index,
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
    for (let index = 0; index <= graph.yLen; index++) {
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
