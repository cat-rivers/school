// Create a program with two methods:
// 1. printLetters(): prints letters from a-z
// 2. printNumbers(): prints numbers from 1-9
// Call first printLetters() method, then printNumbers() and after that printLetters() again.

const printLetters = () => {
  for (let i = 0; i <= 25; i++) {
    let letter = String.fromCharCode(97 + i);
    process.stdout.write(`${letter} `);
  }
  process.stdout.write("\n");
};

const printNumbers = () => {
  for (let i = 1; i <= 10; i++) {
    process.stdout.write(`${i}`);
  }
  process.stdout.write("\n");
};

printLetters();
printNumbers();
printLetters();
