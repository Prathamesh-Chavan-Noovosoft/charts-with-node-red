import { samples, generateRandomSamples } from "../data/samples";
export function generateRandomHistogramData({ data, len, min, max }) {
    for (let i = 0; i < len; i++) {
        let res = min + Math.random() * (max - min);
        data.push(res);
    }
    const xMin = Math.floor(Math.min(...data));
    const xMax = Math.floor(Math.max(...data));
    return { data, xMin, xMax };
}

export function generateControlPlotData() {
    let numBatches = 60;
    let scaleFactor = 1;
    let numElementsPerBatch = 10;
    // let samples = generateRandomSamples({
    //     numElementsPerBatch,
    //     numBatches,
    //     min: 20,
    //     max: 100,
    // });
    console.log("Sample Data: ", JSON.stringify(samples));
    let data = [];

    for (let i = 1; i <= numBatches; i++) {
        let sum = 0;
        let count = 0;
        samples.map((item) => {
            if (item.batch === i) {
                sum += item.value * scaleFactor;
                count++;
            }
        });
        data.push(sum / count);
    }
    return { data, scaleFactor };

    // for (let i = 1; i <= nBatches; i++) {
    //   //  Separate batches
    //   let batchWiseArr = samples.filter((obj) => {
    //     if (obj.batch === i) {
    //       return obj;
    //     }
    //   });
    //
    //   // calculate average
    //   let avgArr = batchWiseArr.map((item) => item.value);
    //   let sum = avgArr.reduce((previous, current) => {
    //     return previous + current;
    //   }, 0);
}
