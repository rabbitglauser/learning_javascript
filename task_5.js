function doesItContainY() {
    let str2 = "don’t know why";
    for (let y of str2) {
        if (y === 'y') {
            return "True";
        }
    }
    return "False";
}

// Test the function
console.log(doesItContainY());  // Expected output: "True"