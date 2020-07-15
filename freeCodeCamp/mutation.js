function mutation(arr) {
    let string = arr[0].toLowerCase();
    let regex = arr[1].toLowerCase()
    let regexArr = regex.split('')
    return regexArr.every((letter) => {
        return string.indexOf(letter) != -1;
    })
}

// console.log(mutation(["hello", "hey"]), false) // should return false.
// console.log(mutation(["hello", "Hello"]), true) // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]), true) // should return true.
console.log(mutation(["Mary", "Army"]), true) // should return true.
console.log(mutation(["Mary", "Aarmy"]), true) // should return true.
console.log(mutation(["Alien", "line"]), true) // should return true.
console.log(mutation(["floor", "for"]), true) // should return true.
console.log(mutation(["Noel", "Ole"]), true) // should return true.