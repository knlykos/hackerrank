function minimumBribes(q: number[]) {
  debugger;
  let substractRes = 0;
  let indexToMove = 0;
  let numberToMove = 0;
  for (let x = 0; x < q.length;x++ ) {
    console.log(q[x]);
    // console.log(q[x] - q[x + 1])
    substractRes = q[x] - q[x + 1];
    numberToMove = q[x];
    console.log(numberToMove," numberToMove")
    if (substractRes > 0) {
      indexToMove = x + substractRes;
      console.log(numberToMove, "numberToMove");
      console.log(x, "x,", q[x], "q[x]");
      console.log(indexToMove, "indexToMove");
      for (let y = x; y <= substractRes; y++) {
    
        if (substractRes === y) {
          q[y] = numberToMove;
        } else {
          q[y] = q[y + 1]
        }
      }
      x = 0;


    }
  }
}

const exerciseOne = [5, 2, 1, 4, 3];
const res = minimumBribes(exerciseOne);
console.log(res);
