function sockMerchant(n: number, ar: number[]) {
  let pairsCount: any = {};
  for (let x = 0; x < n; x++) {
    if (pairsCount.hasOwnProperty(ar[x]) === false) {
      pairsCount[ar[x]] = 1;
    } else if(pairsCount.hasOwnProperty(ar[x])) {
      pairsCount[ar[x]] = pairsCount[ar[x]] + 1;
    }
    // console.log(pairsCount);
  }
  let pairs = 0;
  for(const item in pairsCount) {
    pairs += Math.floor(pairsCount[item] / 2);
  }
  return pairs;
}

const pairs = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
console.log(pairs);
