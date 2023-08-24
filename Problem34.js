// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies = function (candies, extraCandies) {
    let copiedArr = [...candies];
    let arr = candies.sort((a, b) => a - b), arr1 = [];
    let maxNo = arr[arr.length - 1];
    console.log(maxNo);
    console.log(copiedArr);
    for (let i = 0; i < copiedArr.length; i++) {
        if (copiedArr[i] + extraCandies > maxNo) {
            arr1[i] = true;
        } else {
            arr1[i] = false;
        }
    }
    return arr1;
};

console.log(kidsWithCandies([5, 4, 1, 3, 2], 3));