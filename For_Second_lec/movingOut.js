function movingOut(input){
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let command = input.shift();
    let spaceTaken = 0;
    let space = width * length * height;

    while (command !== 'Done'){
        let boxCount = Number(command);
        
        spaceTaken += boxCount;
        if(spaceTaken >= space){
            break;
        }
        
        command = input.shift();
    }
    
    if(spaceTaken >= space){
        let neededSpace = spaceTaken - space;
        console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
        
    } else if(spaceTaken < space){
        let spaceLeft = space - spaceTaken;
        console.log(`${spaceLeft} Cubic meters left.`);
        
    }
    
    
}

movingOut([
    '10',
    '10',
    '2',
    '20',
    '20',
    '20',
    '20',
    '122']);