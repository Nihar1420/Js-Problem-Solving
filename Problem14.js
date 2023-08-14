// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

var gcdOfStrings = function (str1, str2) {
    let length ,arr1 = [] , arr2 = [];
    if (str1.length > str2.length) {
        length = str1.length - str2.length;
    }
    for(let i = str1.length-1; i > str1.length-length-1 ; i--){
       arr1.push(str1.charAt(i));
    }
    arr2 = arr1.reverse();
    return arr2.join(',').replaceAll(',','');
};

const result = gcdOfStrings("LEET", "CODE");
console.log(result);