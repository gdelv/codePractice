/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.
*/

function past(h, m, s){
    // 1 sec = 1000 ms
    // 1 min = 60s * 1000 ms => 60000ms
    // 1 hour = 60 min * 6000 ms => 3600000 ms
    if(0 <= h <= 23 && 0 <= m <= 59 && 0 <= s <= 59) {
        let seconds = s * 1000;
        let minutes = m * 60000;
        let hours = h * 3600000;
        let finalTime = seconds + minutes + hours;
        return finalTime
    } else return "Please check input constraints"
}

console.log(past(0,1,1));
