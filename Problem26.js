// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

var mostWordsFound = function (sentences) {
    let wordsNo = [];
    sentences.forEach(sentence => {
        wordsNo.push(sentence.split(" ").length);
    });
    let sorted = wordsNo.sort((a, b) => a - b);
    return sorted[sorted.length - 1];
};

const number = mostWordsFound(sentences);
console.log(number);