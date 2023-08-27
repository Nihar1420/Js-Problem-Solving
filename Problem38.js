// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

var countPairs = function (nums, target) {
  let flag = 0;
  for (let i = 0; i < nums.length-1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) flag += 1;
    }
  }
  return flag;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2));
