const print = (msg) => process.stdout.write(msg);
const numArr = [];

print(
  "This program calculates the mean value of the\nnumbers you enter from your keyboard.\nThe program stops when you enter a  letter\n\n"
);
print("Enter a number: ");
const onData = (num) => {
  let numbers = Number(num);
  numArr.push(numbers);
  if (isNaN(num)) {
    numArr.pop();
    const sum = numArr.reduce((a, b) => a + b, 0);
    print(`The average is:  ${sum / numArr.length}`);
  } else {
    print(`Enter a Number: `);
  }
};

process.stdin.on("data", onData);
