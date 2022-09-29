// Create an array with the following items: 55, 23,
// 6456, 324, 21, 234, 72, 21
// 2. Ask the user what they want to search for in the
// integer array.
// 3. Loop through the array and compare the values with the input given by the user.
// 4. If the item is found, print out in which index the value was found.
// 5. If the item is not found, print out a message saying item was not found.

const arr = [55, 23, 6456, 324, 21, 234, 72, 21];
const print = (msg) => process.stdout.write(msg);

print("\nThe number you would like to search: ");

const onData = (num) => {
  const newNum = Number(num);
  const index = arr.indexOf(newNum);
  if (index !== -1) {
    console.log(`${newNum} was found in index ${index}`);
  } else {
    print("your item was not found");
  }
};

process.stdin.on("data", onData);
