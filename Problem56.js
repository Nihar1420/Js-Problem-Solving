// A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:

// <col> denotes the column number c of the cell. It is represented by alphabetical letters.
// For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
// <row> is the row number r of the cell. The rth row is represented by the integer r.
// You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

// Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

var cellsInRange = function (s) {
  const arr = s.split("").join().replaceAll(",", "");
  const charCode = arr.charCodeAt(0);
  const charCode1 = arr.charCodeAt(3);
  const range1 = Number(arr[1]);
  const range2 = Number(arr[4]);
  const arr1 = [];
  for (let i = charCode; i <= charCode1; i++) {
    for (let j = range1; j <= range2; j++) {
      arr1.push(`${String.fromCharCode(i)}${j}`);
    }
  }
  return arr1;
};

console.log(cellsInRange("K1:L2"));
