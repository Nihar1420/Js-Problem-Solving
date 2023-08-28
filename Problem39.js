// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function(nums) {
    let arr = [nums[0]];
    for(let i = 0 ; i < nums.length-1 ; i++){
        arr[i+1] = arr[i] + nums[i+1];
    }
    return arr;
};

console.log(runningSum([1,2,3,4]));