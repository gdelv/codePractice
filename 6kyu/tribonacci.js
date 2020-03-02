const tribonacci = (signature, n) => {
  if (n === 0) {
    return [];
  }
  // else if( 1 <= n < 4) {
  //     for(let i = n; i <= signature.length; i++) {
  //         return signature[i-1]
  //     }
  // }
  else {
    for (let i = 1; i <= n; i++) {
      currentIndex = signature[i];
    //   console.log(currentIndex)
      currentIndex += signature.reduce(
        (accumulator, currentIndex) => accumulator + currentIndex
      );
      console.log(currentIndex)
    }
  }
};

tribonacci([0, 1, 2], 2);
// console.log(tribonacci([0,1,1], 0))
// console.log(tribonacci([0,1,2], 1))
// console.log(tribonacci([0,1,2], 2))
// console.log(tribonacci([0,1,2], 3))
