function sumAll(arr) {
    let sortedArr = arr.sort((a,b) => {
        return a-b
    })

    let min = sortedArr[0];
    let max = sortedArr[1];
    let count = 0;

    for (let index = min; index <= max; index++) {
        count += index
    }
    return count
}
console.log(sumAll([1, 4]),10)
console.log(sumAll([4, 1]),10)
console.log(sumAll([5, 10]),45)
console.log(sumAll([10, 5]),45)