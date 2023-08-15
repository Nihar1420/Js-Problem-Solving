// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

var interpret = function (command) {
    let arr1 = [];
    let arr = command.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "G") {
            arr1.push("G");
        }
        else if (arr[i] === "(" && arr[i + 1] === ")") {
            arr1.push("o");
        }
        else if (arr[i] === "(" && arr[i + 1] === "a" && arr[i + 2] === "l" && arr[i + 3] === ")") {
            arr1.push("al");
        }
    }

    return arr1.join(',').replaceAll(',','');
};

console.log(interpret("G()(al)"));