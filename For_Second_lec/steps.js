function walking(input) {
    let command = input.shift();
    let target = 10000;
    let totalStepsWalked = 0;
 
    while (command != `Going home`) {
        let inputSteps = +command;
        totalStepsWalked += inputSteps;
 
        if (totalStepsWalked >= target) {
            console.log("Goal reached! Good job!");
            break;
        }
 
        command = input.shift();
 
    }
 
    if (command == `Going home`) {
 
        let lastSteps = +input.shift(command);
        totalStepsWalked += lastSteps;
 
        if (totalStepsWalked >= target) {
            console.log("Goal reached! Good job!");
        } else {
            console.log(`${target - totalStepsWalked} more steps to reach goal.`);
        }
    }
}

walking([ '1500', '300', '2500', '3000', 'Going home', '200' ]);