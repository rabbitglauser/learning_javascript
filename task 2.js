function printEvenNumbers(n) {
    let result = "";
    for (let i = 2; i <= n; i += 2) {
        result += i + " ";
    }
    console.log(result.trim())
}

let n1 = 22;
printEvenNumbers(n1); 