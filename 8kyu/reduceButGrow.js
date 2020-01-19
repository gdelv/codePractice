// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


const grow = (arr) => {
    counter = 1
    for(let i = 0; i <= arr.length - 1; i++) {
        counter *= arr[i]
        console.log(`This is the counter: ${counter}`)
        console.log(`This is the arr position: ${arr[i]}`)
    }
    return counter
}

// console.log(`Answer is: ${grow([1,2,3,4])}`)
console.log(grow([2, 2, 2, 2, 2, 2]))