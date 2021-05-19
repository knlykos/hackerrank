function repeatedString(s: string, n: number) {
  const letter2Find = "a";
  const rest = n % s.length;
  let char = 0;
  let letterCounter = 0;
  for (let x = s.length; x >= 0; x--) {
    console.log(x);
    if (letter2Find === s[x]) {
      ++letterCounter;
      if (x < rest) {
        ++char;
      }
    }
  }


  return ((n - rest) / s.length * letterCounter) + char;
}



// function repeatedString(s: any, n: any) {
//   let c = 0,
//       ca = 0,
//       r = n % s.length

//   for (let i = s.length; i-- > 0;) {
//     if (s.charAt(i) == 'a') {
//       ++c

//       if (i < r)
//         ++ca
//         console.log(ca);
//     }
//   }

//   return ((n - r) / s.length * c) + ca
// }

const returnData = repeatedString("aba", 10);
console.log(returnData);
