// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = (n) => {
    let finalArr = []

    for (let i = n; i >= 1; i--) {
        finalArr.push(i)
    }
    return finalArr

}

console.log(reverseSeq(5))