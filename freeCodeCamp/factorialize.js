const factorialize = (num) => {
    let constant = 1
    for(let i = num; i > 0; i--) {
        constant *= i
    }
    return constant
}

console.log(factorialize(5));
import {  } from "module";