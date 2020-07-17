// const cache = [];

// function isPrime(pnumber) {
//   //   if (cache[pnumber] !== undefined) {
//   //     return cache[pnumber];
//   //   }
//   for (let i = 2; i < pnumber / 2 + 1; i++) {
//     if (pnumber % i === 0) {
//       //   cache[pnumber] = false;
//       return false;
//     }
//   }
//   //   cache[pnumber] = true;
//   return true;
// }

// const before = new Date().getTime();
// for (let i = Math.ceil(600851475143 / 2); i > 0; i--) {
//   if (600851475143 % i === 0) {
//     const prime = isPrime(i);
//     if (prime) {
//       console.log(i);
//       break;
//     }
//   }
// }
// const after = new Date().getTime();

// console.log(is3Prime, cache, after - before);

let testNumber = 600851475143;
let primes = [];

for (let divisible = 2; divisible <= testNumber; divisible++) {
  while (testNumber % divisible === 0) {
    testNumber = testNumber / divisible;
    primes.push(divisible);
  }
}

console.log(primes);
