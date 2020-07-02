function countdown(n){
    let finalArr = [];
    if (n < 1) {
      return [];
    } else {
      const nextNum = countdown(n-1)
      finalArr.push(nextNum)
    }
    return finalArr
}

console.log(countdown(5));
