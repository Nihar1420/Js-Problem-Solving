// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

var numberOfSteps = function (num) {
  let afterOp = num,
    step = 0;
  for (let i = 0; afterOp !== 0; i++) {
    if (afterOp % 2 === 0) {
      afterOp = afterOp / 2;
      ++step;
    } else {
      afterOp = afterOp - 1;
      ++step;
    }
  }
    return step;
};

console.log(numberOfSteps(14));
