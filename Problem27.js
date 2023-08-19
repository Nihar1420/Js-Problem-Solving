// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

let x = 202

var isPalindrome = function(x) {
    arr1 = x.toString().split("");
    arr2 = x.toString().split("").reverse();
    return JSON.stringify(arr2) == JSON.stringify(arr1);
};

console.log(isPalindrome(x));