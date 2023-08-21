// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

var balancedStringSplit = function (s) {
    let arr = s.split(""), count = 0, balance = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "L") {
            balance++;
        } else if (arr[i] === "R") {
            balance--;
        }

        if (balance === 0) { 
            count++;
        }
    }

    return count;
};

console.log(balancedStringSplit("LLLLRRRR"));