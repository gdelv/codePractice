function titleCase(str) {
    let capitalizedArr = [];
    let lowerCaseString = str.toLowerCase()
    let splitArr = lowerCaseString.split(" ")
    splitArr.forEach(element => {
        let firstLetter = element.slice(0,1)
        let capitalLetter = firstLetter.toUpperCase()
        let sentenceFrag = element.slice(1,element.length)
        element = capitalLetter + sentenceFrag;
        capitalizedArr.push(element)
    });
    return capitalizedArr.join(' ')
}

String.prototype.replaceAt = function(index, character) {
    return (
    this.substr(0, index) + character + this.substr(index + character.length)
);
};

function titleCase(str) {
var newTitle = str.split(" ");
var updatedTitle = [];
for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
    .toLowerCase()
    .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
}
return updatedTitle.join(" ");
}

function titleCase(str) {
var convertToArray = str.toLowerCase().split(" ");
var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
});
return result.join(" ");
}

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  }

console.log(titleCase("I'm a little tea pot")) //should return I'm A Little Tea Pot.
// console.log(titleCase("sHoRt AnD sToUt")) //should return Short And Stout.
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) //should return Here Is My Handle Here Is My Spout.