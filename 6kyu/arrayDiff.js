function arrayDiff(a,b) {
    let firstArr = a;
    let secondArr = b;
    let doubleArr = [];

    if(!firstArr.length) {
        return firstArr
    }

    for(let i = 0; i < firstArr.length; i++) {
        let currentNumber = firstArr[i];
        if(firstArr.includes(currentNumber) && secondArr.includes(currentNumber)) {
        doubleArr.push(currentNumber)
        }
    }
    if (!doubleArr) {
        return firstArr
    }
    
    for (let i = 0; i < doubleArr.length; i++) {
        const element = doubleArr[i];
        while (firstArr.indexOf(element) !== -1) {
            firstArr.splice(firstArr.indexOf(element), 1);
        }
    }
    return firstArr
}
console.log(arrayDiff([],[4,5])) // => return []
console.log(arrayDiff([3,4],[3])); // => return [4]
console.log(arrayDiff([1,8,2],[])); // => return [1,8,2]
console.log(arrayDiff([1,2,2],[2])); // => return [1]
console.log(arrayDiff([13,-19,8],[13,8,-19])); // => return []
console.log(arrayDiff([-10,-8,-1,-16,0,12],[-16,-10,-1])); // => return [-8,0,12]




