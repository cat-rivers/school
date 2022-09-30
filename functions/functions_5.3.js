// Create a program that has a method sum(firstNumber,
//     secondNumber) that returns the sum of the numbers passed to
//     the method as input parameters. Call this method, save the return value in a variable and print it out. Do
//     this three times with different variable values.

const sum = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};

let firstTry = sum(2, 4);
let secondTry = sum(3, -35);
let thirdTry = sum(6, 2);

console.log(
  `First sum is: ${firstTry}
Second sum is: ${secondTry}
Third sum is: ${thirdTry}`
);
