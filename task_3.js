function printArrayInReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
printArrayInReverse(arr);
