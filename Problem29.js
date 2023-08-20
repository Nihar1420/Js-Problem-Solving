// Prime number or not.

let isPrime = (number) => {
    let flag = 0;
   for(let i = 2; i < number/2 ; i++){
      if(number % i === 0){
        flag += 1;
      }
   }
   return flag < 1 ? "Prime" : "Not Prime";
}

console.log(isPrime(6));