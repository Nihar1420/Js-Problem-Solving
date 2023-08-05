// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const nums = [2, 5, 1, 3, 4, 7];

const nums1 = [], nums2 = [], result = [];

for (let i = 0; i < nums.length / 2; i++) {
    nums1.push(nums[i]);
}

for (let i = nums.length / 2; i < nums.length; i++) {
    nums2.push(nums[i]);
}

for (let i = 0; i < nums.length / 2; i++) {
    result.push(nums1[i], nums2[i]);
}

console.log(nums1);
console.log(nums2);
console.log(result);