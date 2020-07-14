function solve(input){
    let steps = Number(input.shift());
    let length = Number(input.shift());
    let distance = Number(input.shift());
    let lengthInMeters = length / 100; 
    let shortSteps = 0.7 * lengthInMeters;
    let distancePassed = 0;
    let countShortSteps = 0;

    for(let i = 0; i < steps; i++){
        if(i % 5 == 0){
            countShortSteps++;
        }
    }

    distancePassed = (shortSteps * countShortSteps) + ((steps - countShortSteps) * lengthInMeters);

    let percentage = 0;

    if(distancePassed >= distance){
        percentage = distancePassed * 100;
    } else if(distance > distancePassed){
        percentage = (distancePassed / distance) * 100;
    } else {
        percentage = 0;
    }

    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);

}

solve([ '100', '2', '1' ]);