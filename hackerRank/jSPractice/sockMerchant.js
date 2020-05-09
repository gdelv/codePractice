function sockMerchant(n, ar) {
    let sortedArr = ar.sort((a, b) => a - b);
    let pairs = 0
    for(let i = 0 ; i < n-1; i++) {
        if(sortedArr[i] == sortedArr[i+1]) {
            pairs++;
            i++;
        }
    }
    return pairs
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))