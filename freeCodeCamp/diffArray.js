function diffArray(arr1, arr2) {
    let concatArr = arr1.concat(arr2);
    let filteredArr = concatArr.filter(item => !arr1.includes(item) || !arr2.includes(item))
    return filteredArr
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]),["pink wool"])
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]),["diorite", "pink wool"])
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]),[])