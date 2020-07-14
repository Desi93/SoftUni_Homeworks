function solve(input){
    let honey = Number(input.shift());
    let command = input.shift();
    let totalHoney = 0;

    while(command !== 'Winter has come'){
        let beeName = command;
        let currentHoneyCollected = 0;

        for(let month = 1; month <= 6; month++){
            let honeyCollected = Number(input.shift());
            currentHoneyCollected += honeyCollected;
        }
            
        if(currentHoneyCollected < 0){
            console.log(`${beeName} was banished for gluttony`);
        }

        totalHoney += currentHoneyCollected;

        if(totalHoney >= honey){
            break;
        }

        command = input.shift();
        if(command == 'Winter has come'){
            break;
        }
    }

    if(totalHoney >= honey){
        let honeyLeft = totalHoney - honey;
        console.log(`Well done! Honey surplus ${honeyLeft.toFixed(2)}.`);
    } else if(totalHoney < honey){
        let honeyNeeded = honey - totalHoney;
        console.log(`Hard Winter! Honey needed ${honeyNeeded.toFixed(2)}.`);
    }

}

solve([
    '1000',
    'Maya',
    '50',
    '10.5',
    '19.5',
    '30',
    '100',
    '100',
    'Winter has come'
  ]);
