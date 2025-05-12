enum Directions {
  Up,
  Down,
  Left,
  Right,
}

function movePoint(point: { x: number; y: number }, moveDirection: Directions) {
  if (moveDirection === Directions.Up) {
    return { x: point.x, y: point.y + 1 };
  } else if (moveDirection === Directions.Down) {
    return { x: point.x, y: point.x - 1 };
  } else if (moveDirection === Directions.Left) {
    return { x: point.x - 1, y: point.y };
  } else if (moveDirection === Directions.Right) {
    return { x: point.x + 1, y: point.y };
  }
}

let point = { x: 0, y: 0 };
console.log(movePoint(point, Directions.Up));

let printName: string = "Johhnynnynyny";
console.log(printName);

function formatData(a: string | number, b: string | number) {
  if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Invalid type of data!");
  }
}

formatData(5, 4);
