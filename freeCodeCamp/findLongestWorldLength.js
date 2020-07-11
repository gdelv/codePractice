const findLongestWordLength = (str) => {
    const strArr = str.split(' ')
    const lengthArr = strArr.map(string => string.length)
    const sortArr = lengthArr.sort(function(a,b) {
        return b-a
    })
    const largestWordLength = sortArr[0]
    return largestWordLength
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
