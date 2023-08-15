// Now we will be solving a very basic math algorithm known as the fibonacci sequence.

// Lets assume we have to find the fibonacci sequence for a given number 'n'.

let n = 7;

let fibArr = [0, 1];

for (let i = 2; i <= n - 1; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
}

console.log(fibArr);