function getIndexToIns(arr, num) {
    let sortedArr = arr.sort((a,b) => {
        return a-b
    })
    if (!sortedArr.length) {
        return 0
    }
    let i = 0;
    while (num > sortedArr[i]) {
        i++
    }
    return i
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // should return 3.
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // should return a number.
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // should return 2.
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // should return a number.
// console.log(getIndexToIns([40, 60], 50)) // should return 1.
// console.log(getIndexToIns([40, 60], 50)) // should return a number.
// console.log(getIndexToIns([3, 10, 5], 3)) // should return 0.
// console.log(getIndexToIns([3, 10, 5], 3)) // should return a number.
// console.log(getIndexToIns([5, 3, 20, 3], 5)) // should return 2.
// console.log(getIndexToIns([5, 3, 20, 3], 5)) // should return a number.
// console.log(getIndexToIns([2, 20, 10], 19)) // should return 2.
// console.log(getIndexToIns([2, 20, 10], 19)) // should return a number.
// console.log(getIndexToIns([2, 5, 10], 15)) // should return 3.
// console.log(getIndexToIns([2, 5, 10], 15)) // should return a number.
// console.log(getIndexToIns([], 1)) // should return 0.
// console.log(getIndexToIns([], 1)) // should return a number.

// describe("isPalindrome", () => {
//   it("returns true if the string is a palindrome", () => {
//     expect(isPalindrome("abba")).toEqual(true);
//   });
// });

// describe('firstCheck', () => {
//     it('returns a number', () => {
//         expect(firstCheck('[10, 20, 30, 40, 50]')).toEqual(3);
//     })
// });