// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

var smallestEvenMultiple = function (n) {
  if(n === 1) {
    return 1;
  }
  let lcmArr = [];
  for (let i = 1; i <= n; i++) {
    lcmArr[i] = n*i;
  }
  for (let i = 1; i <= n; i++) {
    if(lcmArr[i] % 2 === 0){
        return lcmArr[i];
    }
  }
};

console.log(smallestEvenMultiple(5));
