// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var numIdenticalPairs = function (nums) {
    let finalVal = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                finalVal += 1;
            }
        }
    }
    return finalVal;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));