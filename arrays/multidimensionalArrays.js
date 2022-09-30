// // Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. Ask the user
// // for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as
// // long as there are ships left. Keep count of how many shots the player needed.

// const print = (msg) => process.stdout.write(msg);
// let counter = 1;
// let field = [
//   ["*", "*", "*", " ", " "],
//   [" ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " "],
//   ["*", "*", " ", " ", "*"],
//   [" ", " ", " ", " ", "*"],
// ];

// print("Enter an x and y coordinates, seperated by space:  ");

// const onData = (userInput) => {
//   let entries = userInput.toString().split(" ");
//   let x = Number(entries[0]);
//   let y = Number(entries[1]);
//   console.log(x, y);
// };

// process.stdin.on("data", onData);
