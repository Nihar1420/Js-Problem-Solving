// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

var romanToInt = function (s) {
    let arr = s.split(""), flag = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "I") {
            flag += 1;
        }
        else if (arr[i] === "V") {
            flag += 5;
        }
        else if (arr[i] === "X") {
            flag += 10;
        }
        else if (arr[i] === "L") {
            flag += 50;
        }
        else if (arr[i] === "C") {
            flag += 100;
        }
        else if (arr[i] === "D") {
            flag += 500;
        }
        else if (arr[i] === "M") {
            flag += 1000;
        }
        else if (arr[i] === "M" && arr[i - 1] === "C") {
            flag += 0;
        }
        else if (arr[i] === "D" && arr[i - 1] === "C") {
            flag += 0;
        }
        else if (arr[i] === "L" && arr[i - 1] === "X") {
            flag += 0;
        }
        else if (arr[i] === "C" && arr[i - 1] === "X") {
            flag += 0;
        }
        else if (arr[i] === "V" && arr[i - 1] === "I") {
            flag += 0;
        }
        else if (arr[i] === "X" && arr[i - 1] === "I") {
            flag += 0;
        }
        else if (arr[i] === "C" && arr[i + 1] === "M") {
            flag += 900;
        }
        else if (arr[i] === "C" && arr[i + 1] === "D") {
            flag += 400;
        }
        else if (arr[i] === "X" && arr[i + 1] === "L") {
            flag += 40;
        }
        else if (arr[i] === "X" && arr[i + 1] === "C") {
            flag += 90;
        }
        else if (arr[i] === "I" && arr[i + 1] === "V") {
            flag += 4;
        }
        else if (arr[i] === "I" && arr[i + 1] === "X") {
            flag += 9;
        }
    }
    return flag;
};