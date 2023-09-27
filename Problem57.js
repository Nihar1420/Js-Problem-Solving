// Write a JavaScript program to find the maximum number in an array.

let maxNoInArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      if (arr[i] > arr[j]) {
        let c = arr[i];
        arr[i] = arr[j];
        arr[j] = c;
      }
    }
  }
  return arr[arr.length-1];
};

console.log(maxNoInArr([21, 45, 962, 82, 18]));
