function calculateEven(a: number, b: number, c: number) {
  let result: string;
  let sum: number = 0;
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    sum = a + b + c;
  }

  if (sum % 2 === 0) {
    return (result = "true");
  } else {
    return (result = "false");
  }
}

console.log(calculateEven(1, 2, 3));

