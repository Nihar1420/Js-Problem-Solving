// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

var isMatch = function (s, p) {
    let flag = 0;
    if (s.length !== p.length) {
        return false;
    }
    else {
        for (let i = 0; i < s.length; i++) {
            if (s.charAt[i] === p.charAt[i]) {
                flag += 1;
            }
            else if (p.charAt[i] === '.') {
                flag += 1;
            }
            else if ((p.charAt[i] === '*' && s.charAt[i - 1] === s[i] || (p.charAt[i] === '*' && p.charAt[i - 1] === "."))) {
                flag += 1;
            }
            else {
                return false;
            }
        }
        if (flag === s.length) {
            return true;
        }
    }
};

// This solution only cleared 225 cases out of 355.

console.log(isMatch('ab', '.*'));