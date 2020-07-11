// function findElement(arr, func) {
//     let filteredArr = arr.filter((num) => func(num))
//     if (filteredArr.length) {
//         return filteredArr[0]
//     } else {
//         return undefined
//     }
// }

function findElement(arr, func) {
    let filteredArr = arr.filter((num) => func(num))
    return (filteredArr.length) ? filteredArr[0] : undefined;
}


// function findElement(arr, func) {
//     let num = 0;
  
//     for (var i = 0; i < arr.length; i++) {
//       num = arr[i];
//       if (func(num)) {
//         return num;
//       }
//     }
  
//     return undefined;
//   }


// function findElement(arr, func) {
//     return arr.find(func);
// }

// function findElement(arr, func) {
//     return arr[arr.map(func).indexOf(true)];
//   }
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));



// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.