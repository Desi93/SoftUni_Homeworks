function solve(input){
    let maxPoints = Number(input.shift());
    let sector = input.shift();
    let currentPoints = 0;
    let turnCounter = 0;

    while(maxPoints > 0){   
        currentPoints = Number(input.shift());
        turnCounter++;
        if(sector === 'number section'){
            maxPoints = maxPoints - currentPoints;
           
        } else if(sector === 'double ring'){
            maxPoints = maxPoints - (currentPoints * 2);
           
            
        } else if(sector === 'triple ring'){
            maxPoints = maxPoints - (currentPoints * 3);
            
        } else if(sector === 'bullseye'){
            console.log(`Congratulations! You won the game with a bullseye in ${turnCounter} moves!`);
            break;
        }
        
        sector = input.shift();
    }

    if(maxPoints == 0){
        console.log(`Congratulations! You won the game in ${turnCounter} moves!`);
    } else if(maxPoints < 0){
        console.log(`Sorry, you lost. Score difference: ${maxPoints * -1}.`);
        
    }
}

solve([
    '150',
    'double ring',
    '20',
    'triple ring',
    '10',
    'number section',
    '20',
    'triple ring',
    '20'
  ]);