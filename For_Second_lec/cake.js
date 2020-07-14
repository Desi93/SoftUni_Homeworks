function cake(input){
    let width = Number(input.shift());
    let length = Number(input.shift());
    let cakeSize = width * length;
    let action = input.shift();
    let cakeLeft = cakeSize;
    let piecesCount = 0;
    

    while(action != 'STOP'){
        let piecesTaken = Number(action);
        cakeLeft -= piecesTaken;
        piecesCount += piecesTaken;

        if(cakeLeft < 0){
            cakeLeft = 0;
        }

        if(cakeLeft == 0){
            let piecesNeeded = piecesCount - cakeSize;
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
            break;
        }
    
        action = input.shift();
    }

    if (action == 'STOP' && cakeLeft >= 0){
        console.log(`${cakeLeft} pieces are left.`);
    }
}

cake([ '10', '2', '2', '4', '6', 'STOP' ])