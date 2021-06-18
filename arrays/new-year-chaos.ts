
function minimumBribes(q: number[]) {
  let brides = 0;
  let bridesByElement: number[] = [];
  let brideByElement = 0;
  let x = 0;
  let difference = 0;
  let index2Check = 0;
  let verifying = false;
  let completed = false;
  
  while (completed === false) {
    // debugger
    // console.log(originalPosition);
    // difference = q[x] - q[x - 1 === -1 ? 0 : x - 1];
    // result = q[x] > q[x - 1 === -1 ? 0 : x - 1];
    difference = q[x] - x + 1
    if (verifying === false) {

      if (difference !== 0) {
        verifying = true;
        index2Check = x + 1;
      } else {
        x++;
      }
    } else if (verifying === true) {
      if (q[x] > q[index2Check] === true) {
        brides++;
        brideByElement++
      }
      index2Check++;
      
      if (index2Check >= q.length) {
        verifying = false;
        index2Check = 0;
        bridesByElement.push(brideByElement);
        brideByElement = 0;
        x++;
        
      }
  
    }
    if (x >= q.length) {
      completed = true;
      
    }
  }
  // console.log(bridesByElement);
  if (brideByElement > 2) {
    console.log("Too chaotic")
  } else {
    console.log(brides)

  }
  // console.log(brides, "brides");

}
// [ 2, 1, 5, 3, 4 ]

const exerciseOne = [2, 5, 1, 3, 4];
const res = minimumBribes(exerciseOne);