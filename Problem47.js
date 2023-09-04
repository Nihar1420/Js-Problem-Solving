// You are given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.

var xorOperation = function (n, start) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = start + 2 * i;
  }
  let xorVal = arr[0] ^ arr[1];
  for (let i = 1; i < n - 1; i++) {
    xorVal = xorVal ^ arr[i + 1];
  }
  return xorVal;
};

console.log(xorOperation(5, 0));
