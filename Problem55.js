// Now we will see the most imp aspects of reccusrion -

// The 2 most imp parts of a reccursive function are -
// 1] Base case - for terminating the reccursive function
// 2] Reccursive relation

// Reccusrsive fibonacci function -

// fibarr = [0,1,1,2,3,5,8...] , here we can say that fibarr[i] = fibarr[i-2] + fibarr[i-1];

function reccursiveFibbonaci(num) {
  // At first we define the base cases
  if (num === 1) {
    return 1;
  } else if (num === 0) {
    return 0;
  } else {
    // Here is the reccursive relation
    return reccursiveFibbonaci(num - 2) + reccursiveFibbonaci(num - 1);
  }
}

console.log(reccursiveFibbonaci(6));
