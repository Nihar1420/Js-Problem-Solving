// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

var countDigits = function (num) {
  let arr = String(num).split("");
  let flag = 0;
  arr.forEach((e) => {
    if (num % Number(e) === 0) {
      ++flag;
    }
  });
  return flag;
};

console.log(countDigits(121));
