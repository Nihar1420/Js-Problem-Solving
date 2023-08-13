// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

let word1 = "abc", word2 = "pqr";
var mergeAlternately = function (word1, word2) {
    let arr1 = [], arr2 = [], arr3 = [] , length;

    for (let i = 0; i < word1.length; i++) {
        arr1.push(word1.charAt(i));
    }
    for (let i = 0; i < word2.length; i++) {
        arr2.push(word2.charAt(i));
    }
    length = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < length; i++) {
        arr3.push(arr1[i], arr2[i]);
    }
    return arr3.toString().replaceAll(',', '');
};

const hey = mergeAlternately(word1, word2);
console.log(hey);