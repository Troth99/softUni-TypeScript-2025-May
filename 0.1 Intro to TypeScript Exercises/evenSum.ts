function calculateEven(a: number, b: number, c: number):boolean {
 
  let sum: number = 0;
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    sum = a + b + c;
  }

  if (sum % 2 === 0) {
    return true
  } else {
    return false
  }
}

console.log(calculateEven(2, 2, 3));

