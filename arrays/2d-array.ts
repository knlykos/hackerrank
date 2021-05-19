function hourglassSum(arr: number[][]) {
  console.table(arr);
  let secondLinePosition = 0;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (x === 0) {
        // contador de position de Y

        if (y >= 0 && y <= 2) {
          console.log(arr[x][y]);
          if (secondLinePosition === 0) {
            secondLinePosition = 1;
            console.log(arr[x + 1][y + 1]);
          }
          console.log(arr[x + 2][y]);
        }
        // suma uno a X temporal
      }
    }
  }
}

const firstArray = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
hourglassSum(firstArray);
