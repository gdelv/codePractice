const reverseString = (str) => {
    const stringArr = str.split("")
    const reverseArr = stringArr.reverse()
    const jointArr = reverseArr.join("")
    return jointArr
}

console.log(reverseString("hello"));
