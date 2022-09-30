// Create a program that calculates the circumference of a circle when radius is given
// (circumference = 2 * π *radius). Call this method three times with different parameters and print out the results.

const circ = (radius) => {
  const calc = 2 * Math.PI * radius;
  return calc;
};

console.log(circ(5));
console.log(circ(15));
console.log(circ(50));
