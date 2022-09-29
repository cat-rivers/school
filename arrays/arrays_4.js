// 4.1
//an integer array with five items: 5, 7, 32, 31 and 8.
// 2. a double array with three items: 12.4, -13.55 and 67.44,
// 3. a string array with four items: “Helsinki”, “Lissabon”,
// “New York” and “Shanghai”.

const print = (msg) => process.stdout.write(msg);

const intArray = [5, 7, 32, 31, 8];
const floating = [12.4, -13.55, 67.44];
const cities = ["Helsinki", "Lisbon", "New York", "Shanghai"];

print("The value in the index 3 is: " + cities[3] + "\n");
print("The fourth item in the array is: " + intArray[3] + "\n");
print(`In the double array there are ${floating.length} items \n`);

print("Integer array content: \n");
for (let i = 0; i < intArray.length; i++) {
  print(intArray[i] + "\n");
}

print("Double array content last to first: \n");
for (let i = floating.length - 1; i >= 0; i--) {
  print(floating[i] + "\n");
}

print("New string array : ");
for (let i = cities.length - 1; i >= 0; i--) {
  let newArray = cities.shift();
  let emptyArr = cities.push("empty");
  print("\n" + cities[i]);
}

//4.2 ______________________________________________________
//______________________________________________________
