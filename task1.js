function sumOfArrays(arr1, arr2) {
    // Helper function to compute the sum of an array
    function arraySum(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }

    // Calculate the sums of the individual arrays
    const sum1 = arraySum(arr1);
    const sum2 = arraySum(arr2);

    // Print the results
    console.log(`${sum1} + ${sum2} = ${sum1 + sum2}`);
}

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

sumOfArrays(arr_1, arr_2);

