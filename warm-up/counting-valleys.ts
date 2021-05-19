function countingValleys(steps: number, path: string[]) {
  let stepPath = 1;
  let valleyCounting = 0;
  let enteringValley = false;
  for (let v = 0; v < steps; v++) {

    if (path[v] === "U") {
      stepPath += 1;
    } else if (path[v] === "D") {
      stepPath -= 1;
    }
    if (stepPath < 1) {
          enteringValley = true;
    }
    if (stepPath === 1 && enteringValley === true) {
        enteringValley = false;
        valleyCounting += 1;
    }
  }

  return valleyCounting;
}

const count = countingValleys(12, [
  "D",
  "D",
  "U",
  "U",
  "D",
  "D",
  "U",
  "D",
  "U",
  "U",
  "U",
  "D",
]);
console.log(count);
