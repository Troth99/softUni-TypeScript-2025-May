function operator(
  params: string | number | string[],
  operations: string,
  operand: number
) {
  let result;
  if (
    operations === "Index" &&
    (typeof params === "string" || Array.isArray(params))
  ) {
    result = params[operand];
  } else if (
    operations === "Length" && (typeof params !== "number")
  ) {
    result = params.length % operand;
  } else if (operations === "Add" &&  (typeof params === "string" || typeof params === "number")) {
      result = Number(params) + operand;
  
  }

  return result;
}

console.log(operator(["Just", "Two"], "Length", 5));
