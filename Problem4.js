// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

const nums = [10, 4, 8, 3];

const leftSum = [];
const rightSum = [];
const answer = [];

const numsLenght = nums.length;

console.log(nums[-1]);

leftSum[0] = 0;

for (let i = 1; i < numsLenght; i++) {
    leftSum[i] = nums[i - 1] + leftSum[i - 1];
}

rightSum[numsLenght - 1] = 0;
for (let i = numsLenght - 2; i >= 0; i--) {
    rightSum[i] = nums[i + 1] + rightSum[i + 1];
}

for(let i = 0; i < numsLenght; i++){
    answer.push(Math.abs(leftSum[i] - rightSum[i]));
}

console.log(leftSum);
console.log(rightSum);
console.log(answer);