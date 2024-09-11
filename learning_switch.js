/*
task 1

function add(a, b) {
    return a + b;
}
let result = addNumbers(5, 3);
console.log(result); */


/*
let names = ["Alex", "Chris", "Nina"];
function printNames(arr) {
    arr.forEach(function(name) {
        console.log(name);
    });
}
printNames(names);*/

/*
function containsValue(arr, value) {
    return arr.includes(value);
}
console.log(containsValue([1, 2, 3, 4], 3)); // Ausgabe: true
console.log(containsValue([1, 2, 3, 4], 5)); // Ausgabe: false
*/


function averagegrades() {
    const grades = [5, 6, 2, 3, 5];

    var total = 0;
    for (var i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    var avg = total / grades.length;
    console.log(avg); // Output: 4.2
}

averagegrades();