// You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].

// base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].

// Return true if the given array is good, otherwise return false.

// Note: A permutation of integers represents an arrangement of these numbers.

const nums = [2, 2, 3, 3];

const length = nums.length;
let count = 0, isTrue = 0, duplicate = 0, anotherDupl = 0;

const belongsToRange = (a, b, target) => {
    const arr1 = [];
    for (let j = a; j <= b; j++) {
        arr1.push(j);
    }
    if (arr1.includes(target)) {
        return true;
    }
}

for (let i = 0; i < length; i++) {
    if (nums[i] === length - 1) {
        count = count + 1;
    }
    if (nums[i] < length) {
        isTrue = isTrue + 1;
    }
    if (nums[i] === nums[i + 1] && nums[i] !== length - 1) {
        duplicate = duplicate + 1;
    }
    if (belongsToRange(0, i, nums[i])) {
        anotherDupl = anotherDupl + 1;
    }
}

if (count === 2 && isTrue === length && duplicate < 1 && anotherDupl < 1) {
    console.log("true");
}
else {
    console.log("false");
}