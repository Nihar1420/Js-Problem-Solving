// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function (n) {
  let str = n.toString(),
    arr = str.split(""),
    sum = 0,
    product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    product *= Number(arr[i]);
  }
  return product - sum;
};

console.log(subtractProductAndSum(234));
