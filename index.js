import { onChildAdded } from "firebase/database";
import {
    temperatureDataRef,
    voltageDataRef,
} from "./scripts/services/firebase.js";
import { buildLineChart } from "./scripts/models/lineChart.js";
import {
    averageOfDataPoints,
    sliceInput,
    logArray,
} from "./scripts/data/cleanRealTimeData.js";
import { createGraph, drawGraph } from "./scripts/models/graph.js";

/**
    @params {Array} temperatureArray, {Array} voltageArray -> Stores the real time data everytime it updates

    This function draws the line chart points for the realtime temperature and voltage data
*/
function realTimeChartDataListener(temperatureArray, voltageArray) {
    const combinedChart = document.getElementById("combinedChart");

    let combinedGraph = createGraph({
        svg: combinedChart,
        xMin: 0,
        data: temperatureArray,
        data2: voltageArray,
        yIntervalSize: 1,
    });

    onChildAdded(temperatureDataRef, (snapshot) => {
        const data = snapshot.val();
        temperatureArray.push(data);
        temperatureArray = sliceInput(temperatureArray, 60);

        combinedGraph = createGraph({
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
    onChildAdded(voltageDataRef, (snapshot) => {
        const data = snapshot.val();
        voltageArray.push(data);
        voltageArray = sliceInput(voltageArray, 60);
    });

    // // // old logic
    // onValue(chartDataRef, (snapshot) => {
    //     const data = snapshot.val();
    //
    //     // Clean Data
    //     const temperatureArray = convertNestedObjectToSlicedArray(
    //         data.temperature,
    //         60,
    //         "Temperature Data",
    //     );
    //
    //     const voltageArray = convertNestedObjectToSlicedArray(
    //         data.voltage,
    //         60,
    //         "Voltage Data",
    //     );
    //
    //     const combinedChart = document.getElementById("combinedChart");
    //     let combinedGraph = createGraph({
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
}

function averageDataListener({
    temperatureArray,
    voltageArray,
    avgVoltageArray,
    avgTemperatureArray,
}) {
    const temperatureChart = document.getElementById("temperatureChart");
    const voltageChart = document.getElementById("voltageChart");

    let rawTemperatureArray = [];
    let rawVoltageArray = [];

    onChildAdded(temperatureDataRef, (snapshot) => {
        const data = snapshot.val();

        rawTemperatureArray.push(data);
        if (rawTemperatureArray.length >= 15) {
            avgTemperatureArray.push(averageOfDataPoints(rawTemperatureArray));
            avgTemperatureArray = sliceInput(avgTemperatureArray, 60);
            logArray("Average Temperature last 15 secs: ", avgTemperatureArray);

            let temperatureGraph = createGraph({
                svg: temperatureChart,
                xMin: 0,
                data: temperatureArray,
                data2: [],
                yIntervalSize: 1,
            });
            drawGraph(temperatureGraph);
            buildLineChart({
                graph: temperatureGraph,
                color: "green",
                lineColor: "lightgreen",
            });

            rawTemperatureArray = [];
        }
    });

    onChildAdded(voltageDataRef, (snapshot) => {
        const data = snapshot.val();

        rawVoltageArray.push(data);
        logArray("Last 15  Voltage Data: ", rawVoltageArray);
        if (rawVoltageArray.length >= 15) {
            avgVoltageArray.push(averageOfDataPoints(rawVoltageArray));
            avgVoltageArray = sliceInput(avgVoltageArray, 60);
            logArray("Average Voltage last 15 secs: ", avgVoltageArray);

            let voltageGraph = createGraph({
                svg: voltageChart,
                xMin: 0,
                data: voltageArray,
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

            rawVoltageArray = [];
        }
    });
}

// Main Program
// Listen for Real-time Changes in Temperature & Voltage
let combinedTemperatureArray = [];
let combinedVoltageArray = [];
realTimeChartDataListener(combinedTemperatureArray, combinedVoltageArray);

// Fetch Average of last n seconds
let voltageArray = [];
let temperatureArray = [];

let avgTemperatureArray = [];
let avgVoltageArray = [];

setInterval(() => {
    averageDataListener({
        avgTemperatureArray,
        avgVoltageArray,
        temperatureArray,
        voltageArray,
    });
}, 15000);

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
