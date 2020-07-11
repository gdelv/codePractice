function truncateString(str, num) {
    if (str.length > num) {
            let splitStr = str.slice(0,num);
    return splitStr + '...'
    } else {
        return str
    }
}

// function truncateString(str, num) {
//     return str.length > num ? str.slice(0, num) + "..." : str;
// }
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));