// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//"This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


const reverseWords = (str) => {
    const splitArr = str.split(' ')
    // reverseArr = splitArr.map( (_, idx, arr ) => 
    //     arr[arr.length - 1 - idx])
    // return finalArr = reverseArr.join('')  

}

console.log(reverseWords('hello'))
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');