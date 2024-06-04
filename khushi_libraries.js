// // *****Number Logic Series*****

// // 1.factorial of a number

// function factorial(a) {
//   let result = 1;
//   for (let i = 1; i <= a; i++) {
//     result = result * i;
//   }

//   console.log(`The factorial of ${a} is :`);
//   return result;
// }

// // 2.Palindrome of a number

// function Palindrome(num) {
//   let reverse = 0;
//   let n = num;

//   while (num != 0) {
//     let rem = num % 10;
//     reverse = reverse * 10 + rem;
//     num = num / 10;
//   }

//   function result() {
//     if (n == reverse) {
//       console.log(`${n} is a palindrome`);
//     } else {
//       console.log(`${n} is not a palindrome`);
//     }
//   }
//   return result();
// }

// // 3.Armstrong of a number

// function Armstrong(num) {
//   let n = num;
//   let res = 0;

//   while (num != 0) {
//     let rem = num % 10;
//     res += rem * rem * rem;
//     num = num / 10;
//   }

//   function result() {
//     if (n == res) {
//       console.log(`${n} is a Armstrong`);
//     } else {
//       console.log(`${n} is not a Armstrong`);
//     }
//   }

//   return result();
// }

// 4.Decimal to Binary

// function decimaltobinary(decimalnumber) {
//   let binary = "";
//   while (decimalnumber != 0) {
//     let rem = decimalnumber % 2;
//     binary = rem + binary;
//     decimalnumber = decimalnumber / 2;
//   }
//   return binary;
// }

//5.

export { decimaltobinary };
