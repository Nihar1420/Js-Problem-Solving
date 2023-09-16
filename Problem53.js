// We will use reccursion to solve the factorial of a number problem .

// Normal method -

// let factNum = 1;
// for(let i = 2; i <= 4 ; i++){
//    factNum *= i;
// }

// console.log(factNum);

// let factNum = 1;
// for(let i = 4; i >= 1 ; i--){
//    factNum *= i;
// }

// console.log(factNum);

// Reccursion -

function reccursion(num) {
  if (num === 0) {
    return 1;
  }
  return num * reccursion(num - 1);
}

console.log(reccursion(5));
