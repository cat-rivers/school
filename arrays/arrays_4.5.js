// Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
// • To create random numbers you can use Math.random () function.
// 2. Find the largest value in the array using a loop and print it out.
// 3. Find the smallest value in the array using a loop and print it out

const arr = [];
const print = (msg) => process.stdout.write(msg);

const bigArray = () => {
  for (let i = 1; i <= 100; i++) {
    let newNum = Math.floor(Math.random() * 1000) + 1;
    arr.push(newNum);
  }
};
bigArray();

const max = arr.reduce(function (a, b) {
  return Math.max(a, b);
});
const min = arr.reduce(function (a, b) {
  return Math.min(a, b);
});

print(
  `\nRandom Numbers: ${arr}  \nthe biggest number is: ${max}\nthe smalles number is: ${min}\n\n`
);
