function getGrade (s1, s2, s3) {
    // get average of 3 scores
    let scoresAdded = s1 + s2 + s3; // add scores
    let scoresAmount = 3    // number of scores to add
    let average = scoresAdded/scoresAmount // get average  
    //compare average to cases  
    if(average >= 90 && average <= 100) {
        return "A"
    } if(average >= 80 && average < 90) {
        return "B"
    } if(average >= 70 && average < 80) {
        return "C"
    }if(average >= 60 && average < 70) {
        return "D"
    }if(average >= 0 && average < 60) {
        return "F"
    }
}

console.log(getGrade(2,4,6));




function getGrade (s1, s2, s3) {
    // get average of 3 scores
    let scoresAdded = s1 + s2 + s3; // add scores
    let scoresAmount = 3    // number of scores to add
    let average = scoresAdded/scoresAmount // get average
    // console.log(average);
    // run average through switch
    switch (true) {
        case (average >= 90 && average <= 100):
            return finalScore = "A";
        case (average >= 80 && average < 90):
            return finalScore = "B";
        case (average >= 70 && average < 80):
            return finalScore = "C";
        case (average >= 60 && average < 70):
            return finalScore = "D";
        case (average >= 0 && average < 60) :
            return finalScore = "F";
        }
}

console.log(getGrade(2,4,6));
