//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

let inputArr = [1, 2, 0, -1, -2];
let posArr = [], negArr = [], zeroArr = [];
inputArr.forEach((e) => {
    if (e === 0) {
        zeroArr.push(e);
    }
    else if (e > 0) {
        posArr.push(e);
    }
    else {
        negArr.push(e);
    }
});

console.log((zeroArr.length / inputArr.length).toFixed(6));
console.log((posArr.length / inputArr.length).toFixed(6));
console.log((negArr.length / inputArr.length).toFixed(6));
