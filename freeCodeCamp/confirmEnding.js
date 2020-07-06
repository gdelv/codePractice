function confirmEnding(str, target) {
    let finalStr = ''
    for (let i = str.length - target.length; i < str.length ; i++) {
        const element = str[i];
        finalStr += element
    }
    let finalAns = (finalStr === target) ? true : false
    return finalAns
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
