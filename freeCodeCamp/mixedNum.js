function mixedNumbers(arr) {
    // Only change code below this line
  
    // Only change code above this line
    let startArr = ['I', 2, 'three']
    let endArr = [7, 'VIII', 9]
    let finalArr = arr.unshift(startArr);
    return finalArr.push(endArr)
}

console.log(mixedNumbers(['IV', 5, 'six']));
