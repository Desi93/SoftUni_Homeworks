function solve(input){
    let playerName = input.shift();
    let gamesCount = Number(input.shift());

    let volleyballCount = 0;
    let tennisCount = 0;
    let badmintonCount = 0;
    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;
    let totalPoints = 0;

    for(let currentGame = 1; currentGame <= gamesCount; currentGame++){
        let gameName = input.shift();
        let points = Number(input.shift());

        
        
        switch(gameName){
            case 'volleyball':
                volleyballCount++;
                volleyballPoints += (points * 1.07);
                break;
            
            case 'tennis':
                tennisCount++;
                tennisPoints += (points * 1.05);
                break;
                
            case 'badminton':
                badmintonCount++;
                badmintonPoints += (points * 1.02);
                break;
        }
    }

    let averageVolleyballScore = volleyballPoints / volleyballCount;
    let averageTennisScore = tennisPoints / tennisCount;
    let averageBadmintonScore = badmintonPoints / badmintonCount;
    let volleyballWin = false;
    let tennisWin = false;
    let badmintonWin = false;

    if(averageVolleyballScore >= 75){
        volleyballWin = true;
    }

    if(averageTennisScore >= 75){
        tennisWin = true;
    }

    if(averageBadmintonScore >= 75){
        badmintonWin = true;
    }

    if(volleyballWin && tennisWin && badmintonWin){
        totalPoints = Math.floor(volleyballPoints + tennisPoints + badmintonPoints);
        console.log(`Congratulations, ${playerName}! You won the cruise games with ${totalPoints} points.`);
        
    } else {
        totalPoints = Math.floor(volleyballPoints + tennisPoints + badmintonPoints);
        console.log(`Sorry, ${playerName}, you lost. Your points are only ${totalPoints}.`);
    }
}

solve([
    'Annie',      '5',
    'badminton',  '34',
    'tennis',     '76',
    'badminton',  '10',
    'volleyball', '62',
    'badminton',  '56'
  ]);