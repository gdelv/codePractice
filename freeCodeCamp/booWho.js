function booWho(bool) {
    let type = typeof(bool)
    return (type === "boolean") ? true : false;
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
