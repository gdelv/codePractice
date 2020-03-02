const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    //if distanceToPump <= mpg(miles/gallon) * fuelLeft (gallons) ==> miles
        //return true
    //else
        //return false
    
    let distanceLeft = mpg * fuelLeft; //(miles left in tank)
    if(distanceToPump <= distanceLeft) {
        return true
    } else {
        return false
    }

};

console.log(zeroFuel(100,50,2));
console.log(zeroFuel(100,50,1));
