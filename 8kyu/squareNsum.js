// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
    let counter = 0
    for(let i = 0 ; i <= numbers.length - 1; i++) {
      counter += (numbers[i] * numbers[i])
    }
    return counter
    }

console.log(squareSum([1,2,3,4]))

