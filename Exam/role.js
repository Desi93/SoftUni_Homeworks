function solve(intellect, strength, gender){
    intellect = Number(intellect);
    strength = Number(strength);

    if((intellect >= 80) && (strength >= 80) && (gender === 'female')){
        console.log(`Queen Bee`);
    } else if(intellect >= 80){
        console.log(`Repairing Bee`);
    } else if(intellect >= 60){
        console.log(`Cleaning Bee`);
    } else if(strength >= 80 && (gender === 'male')){
        console.log(`Drone Bee`);
    } else if(strength >= 60){
        console.log(`Guard Bee`);
    } else {
        console.log(`Worker Bee`);
    }

}

solve(90,
    65,
    'male');