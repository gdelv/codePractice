function destroyer(arr) {
    let args = Array.from(arguments).slice(1);
    let filteredArr = arr.filter((val) => !args.includes(val)); 
    return filteredArr
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3) , [1, 1])
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) , [1, 5, 1])
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5) , [1])
// console.log(destroyer([2, 3, 2, 3], 2, 3) , [])
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53) , ["hamburger"])