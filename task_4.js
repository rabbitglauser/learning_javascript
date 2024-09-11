function sumArraysPositionally(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("Both arrays must be of the same length");
    }

    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

function task4() {
    let arr_3 = [4, 6, 7];
    let arr_4 = [8, 1, 9];

    let result = sumArraysPositionally(arr_3, arr_4);
    console.log(result); // Output should be: [12, 7, 16]

    // Print the result as a string in the required format
    console.log(`${result} this is the answer of both arrays added together`);
}

task4();