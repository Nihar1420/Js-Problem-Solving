// Linear Search

var linearSearch = function (arr, n) {
  let flag = 0,
    position = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      ++flag;
      position = i;
    }
  }
  return flag > 0 ? position : -1;
};

console.log(linearSearch([1, 2, 3, 4, 5], 3));
