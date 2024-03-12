// Database references & functions
import { onValue, onChildAdded } from "firebase/database";
import {
    chartDataRef,
    temperatureDataRef,
    voltageDataRef,
} from "./scripts/services/firebase.js";

// Graph drawing functions
import { createGraph, drawGraph } from "./scripts/models/graph.js";
import { buildLineChart } from "./scripts/models/lineChart.js";
import {
    convertNestedObjectToSlicedArray,
    averageOfDataPoints,
    sliceInput,
    logArray,
} from "./scripts/data/cleanRealTimeData.js";

/**
    @params {Array} temperatureArray, {Array} voltageArray -> Stores the real time data everytime it updates

    This function draws the line chart points for the realtime temperature and voltage data
*/
function realTimeChartDataListener(
    temperatureArray,
    voltageArray,
    numDatapoints,
) {
    const combinedChart = document.getElementById("combinedChart");

    let combinedGraph = createGraph({
        svg: combinedChart,
        xMin: 0,
        data: temperatureArray,
        data2: voltageArray,
        yIntervalSize: 1,
    });

    // onChildAdded(temperatureDataRef, (snapshot) => {
    //     const data = snapshot.val();
    //     temperatureArray.push(data);
    //     temperatureArray = sliceInput(temperatureArray, numDatapoints);
    //
    //     combinedGraph = createGraph({
    //         svg: combinedChart,
    //         xMin: 0,
    //         data: temperatureArray,
    //         data2: voltageArray,
    //         yIntervalSize: 1,
    //     });
    //     drawGraph(combinedGraph);
    //     buildLineChart({
    //         graph: combinedGraph,
    //         color: "green",
    //         lineColor: "lightgreen",
    //         color2: "purple",
    //         lineColor2: "violet",
    //     });
    // });

    // onChildAdded(voltageDataRef, (snapshot) => {
    //     const data = snapshot.val();
    //     voltageArray.push(data);
    //     voltageArray = sliceInput(voltageArray, numDatapoints);
    // });

    onValue(chartDataRef, (snapshot) => {
        const data = snapshot.val();

        // Clean Data
        const temperatureArray = convertNestedObjectToSlicedArray(
            data.temperature,
            60,
            "Temperature Data",
        );

        const voltageArray = convertNestedObjectToSlicedArray(
            data.voltage,
            60,
            "Voltage Data",
        );

        const combinedChart = document.getElementById("combinedChart");
        let combinedGraph = createGraph({
            svg: combinedChart,
            xMin: 0,
            data: temperatureArray,
            data2: voltageArray,
            yIntervalSize: 1,
        });
        drawGraph(combinedGraph);
        buildLineChart({
            graph: combinedGraph,
            color: "green",
            lineColor: "lightgreen",
            color2: "purple",
            lineColor2: "violet",
        });
    });
}

/**
    @params {Array} temperatureArray, {Array} voltageArray -> Stores the real time data everytime it updates

    This function draws the line chart of Periodical average of data over a certain period of time
*/
function averageDataListener({ avgVoltageArray, avgTemperatureArray }) {
    const temperatureChart = document.getElementById("temperatureChart");
    const voltageChart = document.getElementById("voltageChart");

    // onChildAdded(temperatureDataRef, (snapshot) => {
    //     const data = snapshot.val();
    //
    //     rawTemperatureData.add(data);
    //
    //     if (rawTemperatureData.length >= timePeriod) {
    //         avgTemperatureArray.push(averageOfDataPoints(rawTemperatureData));
    //         avgTemperatureArray = sliceInput(avgTemperatureArray, numDatapoints);
    //         logArray("Average Temperature : ", avgTemperatureArray);
    //
    //         let temperatureGraph = createGraph({
    //             svg: temperatureChart,
    //             xMin: 0,
    //             data: avgTemperatureArray,
    //             data2: [],
    //             yIntervalSize: 1,
    //         });
    //         drawGraph(temperatureGraph);
    //         buildLineChart({
    //             graph: temperatureGraph,
    //             color: "green",
    //             lineColor: "lightgreen",
    //         });
    //         rawTemperatureData = new Set();
    //     }
    // });
    //
    // onChildAdded(voltageDataRef, (snapshot) => {
    //     const data = snapshot.val();
    //
    //     rawVoltageData.add(data);
    //     if (rawVoltageData.length >= timePeriod) {
    //         avgVoltageArray.push(averageOfDataPoints(rawVoltageData));
    //         avgVoltageArray = sliceInput(avgVoltageArray, numDatapoints);
    //         logArray("Average Voltage last : ", avgVoltageArray);
    //
    //         let voltageGraph = createGraph({
    //             svg: voltageChart,
    //             xMin: 0,
    //             data: avgVoltageArray,
    //             data2: [],
    //             yIntervalSize: 1,
    //         });
    //         drawGraph(voltageGraph);
    //         buildLineChart({
    //             graph: voltageGraph,
    //             color: "blue",
    //             color2: "black",
    //             lineColor: "lightblue",
    //             lineColor2: "black",
    //         });
    //         rawVoltageData = new Set();
    //     }
    // });

    onValue(
        chartDataRef,
        (snapshot) => {
            const data = snapshot.val();
            const rawVoltage = convertNestedObjectToSlicedArray(
                data.voltage,
                15,
                "Voltage data: ",
            );

            const rawTemperature = convertNestedObjectToSlicedArray(
                data.temperature,
                15,
                "Temperature data: ",
            );

            avgVoltageArray.push(averageOfDataPoints(rawVoltage));
            avgTemperatureArray.push(averageOfDataPoints(rawTemperature));

            let temperatureGraph = createGraph({
                svg: temperatureChart,
                xMin: 0,
                data: avgTemperatureArray,
                data2: [],
                yIntervalSize: 1,
            });
            drawGraph(temperatureGraph);
            buildLineChart({
                graph: temperatureGraph,
                color: "green",
                lineColor: "lightgreen",
            });

            let voltageGraph = createGraph({
                svg: voltageChart,
                xMin: 0,
                data: avgVoltageArray,
                data2: [],
                yIntervalSize: 1,
            });
            drawGraph(voltageGraph);
            buildLineChart({
                graph: voltageGraph,
                color: "blue",
                color2: "black",
                lineColor: "lightblue",
                lineColor2: "black",
            });
        },
        {
            onlyOnce: true,
        },
    );
}

// Main Program
const numDatapoints = 60; // 60 points
const averageDataMins = 10; // 10 mins
const timePeriod = (averageDataMins * 60) / numDatapoints; // take average every 10 secs

// Listen for Real-time Changes in Temperature & Voltage
let combinedTemperatureArray = [];
let combinedVoltageArray = [];
realTimeChartDataListener(combinedTemperatureArray, combinedVoltageArray);

// Fetch Average of last n seconds
let avgTemperatureArray = [];
let avgVoltageArray = [];

setInterval(() => {
    averageDataListener({
        avgTemperatureArray,
        avgVoltageArray,
        numDatapoints,
        timePeriod,
    });
}, 15 * 1000);

// TODO:

// General
// [ ] - Improve implementations submitEvents & inputEvents to be more reuseable
// [ ] - Reusable functions should have good use cases

// To Review:
// [ x ] - only fetch the updated value instead of the whole object every time
// [ ] - calculate average optimally
// [ ] - use map or forEach instead of for loops
// [ x ] - try to not redraw the entire graph everytime data is fetched
// [ x ] - use const instead of let where possible
// [ x ] - try to avoid passing array by reference to modify it
// [ x ] - Avoid writing comments in between the code, write a function's documentation above it
