function getDayName(dateString) {
    let dayName;
    var d = new Date(dateString); // 0 - 6 (Sun - Sat)
    let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDay = d.getDay();
    dayName = dayArr[currentDay]
    return dayName;
}

console.log(getDayName('10/11/2009'))
console.log(getDayName('11/10/2010'))