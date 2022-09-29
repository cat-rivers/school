let fruits = ["banana", "apple", "kiwi", "orange"];

fruits.unshift("grapefruit");
fruits.push("watermelon");
fruits.sort().reverse();

for (let i = 0; i <= fruits.length - 1; i++) {
  process.stdout.write("\n " + fruits[i]);
}

// for (let i = fruits.length - 1; i >= 0; i--) {
//   process.stdout.write("\n " + fruits[i]);
// }
