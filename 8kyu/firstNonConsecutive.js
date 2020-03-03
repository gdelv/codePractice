// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 1 Can you write a solution that will return null2 for both [] and [ x ] though? ( This is not tested, but you can write your own example test. )
function firstNonConsecutive (arr) {
    // for loop through (arr.length - 1)
    let firstValue;
    let secondValue;
    for(let i = 0; i <= arr.length - 1; i++) {
        for(let j = i + 1; j <= arr.length - 1; j++) {
            // check if arr[i+1] !== arr[i] + 1 (check that arr[1] !== arr[0] + 1)
            firstValue = arr[j-1];
            secondValue = arr[j];
            // console.log("First Val: ",firstValue);
            // console.log("Second Val: ",secondValue);
            if(secondValue !== firstValue + 1) {
            // return arr[i+1]
                return secondValue
            }
        }
        if (secondValue === firstValue + 1)
            return null
    }
}

// function firstNonConsecutive (arr) {
//     for (let i = 1; i < arr.length; i++) {
//             if (arr[i - 1] + 1 !== arr[i]) return arr[i];
//     }
//     return null;
// }
console.log(firstNonConsecutive([1,2,3,4,5,6,7,8,9,10,11,12,13,15])) //should return 15