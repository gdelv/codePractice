// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


const sortArray = (arr) => {
    let temp = null
    let sortedArr = []
    if(arr.length === 0) {
        return arr
    } else {
        for(let i = 0; i <= arr.length - 1; i++) {
            if(arr[i] % 2 != 0) {
               temp = arr[i]
               
            } else {
                sortedArr.push(arr[i])
            }
        } return sortedArr
    } 

}

console.log(sortArray([5, 3, 2, 8, 1, 4])) // ==> [1,3,2,8,5,4]
testArr = []
// console.log(testArr.length)
// console.log(sortArray(testArr))