// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

let fn = (n) => {
    return n + 1;
}

let arr = [1,2,3];

var map = function (arr, fn) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = fn(arr[i] , i);
    }
    return arr1;
};

console.log(map(arr,fn));

