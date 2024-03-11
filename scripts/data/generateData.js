export function generateControlPlotData() {
    // metadata of sample data
    let scaleFactor = 1;
    let numBatches = 60;
    let numElementsPerBatch = 10;

    let samples = generateRandomPointsBatchwise({
        min: 20,
        max: 100,
        numBatches,
        numElementsPerBatch,
    });
    // console.log("Sample Data: ", JSON.stringify(samples));

    const data = averageOfBatches(samples);
    return { data, scaleFactor };
}

function generateRandomPointsBatchwise({
    min,
    max,
    numBatches,
    numElementsPerBatch,
}) {
    const samples = [];
    for (let batch = 1; batch <= numBatches; batch++) {
        for (let lane = 1; lane <= numElementsPerBatch; lane++) {
            const value = min + Math.random() * (max - min);
            samples.push({ batch, lane, value });
        }
    }
    return samples;
}

// Calculate Average of Each Batch
// Final Data Format = [avgBatch1, avgBatch2, ..., avgBatchN]
function averageOfBatches(arr) {
    let data = [];
    for (let i = 1; i <= numBatches; i++) {
        let sum = 0;
        let count = 0;
        arr.map((item) => {
            if (item.batch === i) {
                sum += item.value * scaleFactor;
                count++;
            }
        });
        data.push(sum / count);
    }
    return data;
}

function generateRandomPoints({ data, len, min, max }) {
    for (let i = 0; i < len; i++) {
        let res = min + Math.random() * (max - min);
        data.push(res);
    }
    const xMin = Math.floor(Math.min(...data));
    const xMax = Math.floor(Math.max(...data));
    return { data, xMin, xMax };
}
