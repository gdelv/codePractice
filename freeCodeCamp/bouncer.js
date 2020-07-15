function bouncer(arr) {
    return arr.filter(Boolean);
}

const bouncer = (arr) => {
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element) {
            finalArr.push(element)
        }
    }
    return finalArr
}