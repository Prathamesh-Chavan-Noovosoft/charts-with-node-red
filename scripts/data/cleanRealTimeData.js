/**
 * @param {Object} dataObject -> Object of format {{"timestamp": value}, {"timestamp": value"}, ...}
 * @param {number} maxElems -> Maximum number of data elements to return
 * @param {string} logPhrase

   Returns an array of last n (maxElems) values, extracted from the dataObject
 */
export function convertNestedObjectToSlicedArray(
    dataObject,
    maxElems,
    logPhrase,
) {
    // console.log(dataObject);

    let dataArray = convertObjectToArray(dataObject);

    dataArray = sliceInput(dataArray, maxElems);

    // logArray(logPhrase, dataArray);
    return dataArray;
}

/**
 * @param {Array} arr -> Object of format {{"timestamp": value}, {"timestamp": value"}, ...}
 * @param {number} maxElems -> Maximum number of data elements to return

   Returns an sliced array of last n (maxElems) values,
 */
export function sliceInput(arr, n) {
    const last = arr.length;
    let start = 0;
    if (last > n) {
        start = last - n;
        return arr.slice(start, last);
    } else {
        return arr;
    }
}

export function averageOfDataPoints(dataArray) {
    let average = 0;
    dataArray.map((curr) => {
        average += curr;
    });
    average = average / dataArray.length;
    return average;
}

function convertObjectToArray(obj) {
    let arr = [];
    Object.values(obj).map((val) => {
        arr.push(val);
    });
    return arr;
}

export function logArray(logPhrase, logArray) {
    console.log(
        `${logPhrase}: `,
        JSON.stringify(logArray),

        " Length: ",
        logArray.length,
    );
}
