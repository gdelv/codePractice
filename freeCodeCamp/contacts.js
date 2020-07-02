// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop){
    // Only change code below this line
        let filteredArr = contacts.filter(contact => contact.firstName === name)
        if(filteredArr.length) {
            let filteredProp = filteredArr[0][prop]
            if(filteredProp) {
                return filteredProp
            } 
            else return "No such property"
        } 
        else return "No such contact"
    // Only change code above this line
}
    
    
console.log(lookUpProfile("Akira", "likes"));