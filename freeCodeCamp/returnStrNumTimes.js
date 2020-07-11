// function repeatStringNumTimes(str, num) {
//     return str.repeat(num);
// }

// repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
    let repeatedStr = '';
    while (num > 0) {
        repeatedStr += str;
        num--;
    } 
    return repeatedStr;
}


// function repeatStringNumTimes(str, num) {
//     if (num < 1) {
//       return "";
//     } else if (num === 1) {
//       return str;
//     } else {
//       return str + repeatStringNumTimes(str, num - 1);
//     }
// }

// function repeatStringNumTimes(str, num) {
//     return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
//   }

console.log(repeatStringNumTimes('hello', 4));
