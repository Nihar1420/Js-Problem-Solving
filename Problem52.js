// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

var differenceOfSum = function (nums) {
  const str = nums.join().replaceAll(",", "").split("");
  let sum1 = 0,
    sum2 = 0;
  nums.forEach((num) => {
    sum1 += num;
  });
  str.forEach((st) => {
    sum2 += Number(st);
  });
  return Math.abs(sum2 - sum1);
};

console.log(differenceOfSum([1, 15, 6, 3]));
