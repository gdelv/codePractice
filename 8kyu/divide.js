function divide(weight){
    //if weight = 2 
        //return false
    //else if weight is even 
        //return true
    //else
        //return false
    if(weight === 2) {
        return false
    }
    else if(weight % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(divide(4));
console.log(divide(2));
console.log(divide(5));
console.log(divide(88));
console.log(divide(100));
console.log(divide(67));
console.log(divide(90));
console.log(divide(10));
console.log(divide(99));
console.log(divide(32));
