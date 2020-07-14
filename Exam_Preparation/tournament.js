function solve(input){
    //input data
    let days = Number(input.shift());

    //initialize variables
    let daysWon = 0;
    let moneyWon = 0;

    //loop for days 
    for (let i = 0; i < days; i++){
        let sport = input.shift();
        let gamesWon = 0;
        let gamesLose = 0;
        let moneyWonForDay = 0;
        

        //loop for games -> Finish
        while(sport != 'Finish'){
           //read game and result 
           let result = input.shift();
            
            if(result == 'win'){
                gamesWon++;
                moneyWonForDay += 20;
            } else {
                gamesLose++;
            }

            sport = input.shift();
        }
        //check if you are winner for the day, apply bonus
        if(gamesWon > gamesLose){
            moneyWonForDay *= 1.1;
            daysWon++;
        }

        moneyWon += moneyWonForDay;
    }
    //check if you are winner for the tournament, apply bonus
    if(daysWon > days / 2){
        moneyWon *= 1.2;
    }

    //print result
    let hasWin = daysWon > days / 2;

    if(hasWin){
        console.log(`You won the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
        
    }
}

solve([
    '2',         'volleyball',
    'win',       'football',
    'lose',      'basketball',
    'win',       'Finish',
    'golf',      'win',
    'tennis',    'win',
    'badminton', 'win',
    'Finish'
  ])