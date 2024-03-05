import { sleep } from "../utils/utils";
import { listenInputChange } from "../events/inputEvents";
import { listenButtonSubmit } from "../events/submitEvents";
import { generateRandomHistogramData } from "../data/generateData";
import { drawLine, drawText, drawRectangle } from "../utils/draw";

export class Histogram {
    constructor({
        svg,
        data,
        yScale,
        xIntervalSize: xIntervalSize,
        nBins,
        xMin,
        xMax,
        color,
    }) {
        this.svg = svg;
        this.data = data;
        this.color = color;

        this.yScale = yScale; // Scale in Y Axis - Divisions in Y axis
        this.xMin = xMin;
        this.xMax = xMax;

        // Calculate Interval Size
        if (xIntervalSize === "no-input") {
            const diff = this.xMax - this.xMin;
            this.xIntervalSize = Math.floor(diff / nBins);
        } else {
            this.xIntervalSize = xIntervalSize;
        }

        // calculating lower & upper bounds for Y axis
        this.frequency = this.calculateFrequency();

        this.yMin = Math.min(...Object.values(this.frequency));
        this.yMax = Math.max(...Object.values(this.frequency));

        console.log(Math.max(...Object.keys(this.frequency)));

        this.xStart = 0;
        this.yStart = 380; // canvas coordinates for origin

        this.xLen = Object.keys(this.frequency).length;
        this.yLen = Math.ceil(this.yMax / this.yScale);

        this.xWidth = this.binWidth = 1200 / this.xLen;
        this.multiplierY = 5;

        console.log(this.frequency);
        console.log(`interval size: ${this.xIntervalSize}`);
        console.log(`X Length: ${this.xLen}, Y Length: ${this.yLen}`);
        console.log(`X Max: ${this.xMax}, Y Max: ${this.yMax}`);
    }

    calculateFrequency() {
        let frequency = {};

        for (let i = 0; i < this.data.length; i++) {
            let interval =
                Math.floor(this.data[i] / this.xIntervalSize) * this.xIntervalSize;
            if (frequency[interval]) {
                frequency[interval]++;
            } else {
                frequency[interval] = 1;
            }
        }
        return frequency;
    }

    drawXYLines() {
        // Draw x-axis and y-axis
        drawLine(this.svg, {
            x1: this.xStart,
            y1: this.yStart,
            x2: this.xStart + this.binWidth * this.xLen + this.binWidth,
            y2: this.yStart,
        });
        drawLine(this.svg, {
            x1: this.xStart,
            y1:
                this.yStart -
                this.yScale * this.yLen * this.multiplierY -
                this.yScale * this.multiplierY,
            x2: this.xStart,
            y2: this.yStart,
        });
    }

    drawXElements() {
        for (let index = 0; index <= this.xLen; index++) {
            // X Axis labels
            drawText(this.svg, {
                x: this.xStart + this.binWidth * index,
                y: this.yStart + 25, // slight offset for making labels visible
                text: this.xMin + index * this.xIntervalSize,
            });

            // X Axis ticks
            drawLine(this.svg, {
                x1: this.xStart + this.binWidth * index,
                y1: this.yStart,
                x2: this.xStart + this.binWidth * index,
                y2: this.yStart + 5, // slight offset for making labels visible
            });
            // X axis Grid lines
            drawLine(this.svg, {
                x1: this.xStart + this.binWidth * index,
                y1: this.yStart - this.yScale * this.yLen * this.multiplierY,
                x2: this.xStart + this.binWidth * index,
                y2: this.yStart,
                stroke: "#ccc",
            });
        }
    }

    drawYElements() {
        for (let index = 0; index <= this.yLen; index++) {
            // Y Axis labels
            drawText(this.svg, {
                x: this.xStart - 20,
                y: this.yStart - this.yScale * index * this.multiplierY,
                text: this.yScale * index,
            });

            // Y Axis ticks
            drawLine(this.svg, {
                x1: this.xStart - 5,
                y1: this.yStart - this.yScale * index * this.multiplierY,
                x2: this.xStart,
                y2: this.yStart - this.yScale * index * this.multiplierY,
            });
            // Y Axis grid Lines
            drawLine(this.svg, {
                x1: this.xStart,
                y1: this.yStart - this.yScale * index * this.multiplierY,
                x2: this.xStart + this.binWidth * this.xLen - 1,
                y2: this.yStart - this.yScale * index * this.multiplierY,
                stroke: "#ccc",
            });
        }
    }

    drawBars() {
        let i = 0;
        for (let interval in this.frequency) {
            let freq = this.frequency[interval];
            // let block = parseInt(interval);
            // Draw the histogram bars
            drawRectangle(this.svg, {
                x: this.xStart + this.binWidth * i,
                y: this.yStart - freq * this.multiplierY,
                width: this.binWidth,
                height: freq * this.multiplierY,
                fill: this.color,
            });
            i++;
        }
    }

    async drawHistogram() {
        await sleep(1000);
        // Draw X Axis elements
        this.drawXElements();
        // Draw Y Axis elements
        this.drawYElements();
        // Draw Axis lines
        // this.drawXYLines();
        this.drawBars();
    }
}

export function buildHistogram({ data, intervalInput, binsInput, xMin, xMax }) {
    let nBins = 0;
    let xIntervalSize = "";

    const svg = document.getElementById("svg1");
    const graphElements = {
        svg,
        xMin,
        xMax,
        yScale: 5,
        color: "#508",
        data: data,
    };
    if (intervalInput.value === "" && binsInput.value === "") {
        alert("Enter interval size!");
    } else if (intervalInput.value !== "") {
        xIntervalSize = parseInt(intervalInput.value);
        nBins = 0;
    } else {
        xIntervalSize = "no-input";
        nBins = parseInt(binsInput.value);
    }

    let histogram = new Histogram({
        ...graphElements,
        xIntervalSize,
        nBins,
    });
    svg.innerHTML = "";
    histogram.drawHistogram();
}

export function setupHistogramLogic() {
    const createHistogramButton = document.getElementById("create-histogram");
    const histogramIntervalInput = document.getElementById("interval-input");
    const histogramBinsInput = document.getElementById("bins-input");

    listenInputChange(histogramIntervalInput, histogramBinsInput);
    listenInputChange(histogramBinsInput, histogramIntervalInput);

    listenButtonSubmit(createHistogramButton, () => {
        const data = [];
        const res = generateRandomHistogramData({
            data,
            len: 200,
            min: 50,
            max: 90,
        });

        console.log(res.data);
        console.log(res.xMin);
        console.log(res.xMax);

        buildHistogram({
            data: res.data,
            intervalInput: histogramIntervalInput,
            binsInput: histogramBinsInput,
            xMin: res.xMin,
            xMax: res.xMax,
        });
    });
}
