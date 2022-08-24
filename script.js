"use strict"

let numbers = [];
let n = +prompt("Son kiriting")
for (let i = 0; i < n; i++) {
    numbers[i] = +prompt("Hisob elementlarini kiriting");
}

function numbersSum(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    (s >= 50 && s <= 300) ? s = s * 0.15 + s: s = s * 0.2 + s;
    return s;
}
console.log(numbersSum(numbers));