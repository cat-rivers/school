// Create a program that keeps asking the user to input
// numbers. These numbers are stored in an array. Keep asking
// till zero is entered. After that the numbers are printed out in
// a reverse order. Don’t use array methods for this but only
// simple loops.

const print = (msg) => process.stdout.write(msg);

print(
  "This program reads numbers from the keyboard.\nAfter recieving a zero, it prints the numbers in\nreverse order. Please, start entering numbers.\nThe program will stop when you enter a zero\n\n"
);

print("Enter a Number: ");
let numArr = [];

const onData = (num) => {
  let numbers = Number(num);
  numArr.push(numbers);

  if (numbers !== 0) {
    print(`Enter a Number: `);
  } else {
    print("\n\nReverse Order");
    for (let i = numArr.length - 1; i >= 0; i--) {
      print(" " + numArr[i]);
    }
  }
};
process.stdin.on("data", onData);
