function solve(input){
    let piecesCount = Number(input.shift());
    let pieces = {};

    for(let i = 0; i < piecesCount; i++){
        let [piece, composer, key] = input.shift().split('|');

        pieces[piece] = {composer: composer, key: key};
        
    }

    let line = input.shift();

    while(line != 'Stop'){
        let [command, name, firstArg, secondArg] = line.split('|');
        let isValid = (command == 'Add') || (command == 'Remove') || (command == 'ChangeKey');

        if(isValid){
            switch(command){
                case 'Add':
                    let composer = firstArg;
                    let key = secondArg;
                    if(!pieces[name]){
                        pieces[name] = {composer: composer, key: key};
                        console.log(`${name} by ${pieces[name].composer} in ${pieces[name].key} added to the collection!`);
                    } else {
                        console.log(`${name} is already in the collection!`);
                    }
                    break;
                case 'Remove':
                    if(!pieces[name]){
                        console.log(`Invalid operation! ${name} does not exist in the collection.`);
                    } else {
                        delete pieces[name];
                        console.log(`Successfully removed ${name}!`);
                    }
                    break;
                case 'ChangeKey':
                    let newKey = firstArg;

                    if(!pieces[name]){
                        console.log(`Invalid operation! ${name} does not exist in the collection.`);
                    } else {
                        pieces[name].key = newKey;
                        console.log(`Changed the key of ${name} to ${newKey}!`);
                    }
                    break;
            }   
        }

        line = input.shift();
    }

    let sortedPieces = Object.entries(pieces).sort((a, b) => {

        if(a[0].toUpperCase().localeCompare(b[0].toUpperCase()) == 0){
            return a[1].composer.toUpperCase().localeCompare(b[1].composer.toUpperCase());
        } else {
            return a[0].toUpperCase().localeCompare(b[0].toUpperCase())
        }
    });

    for (let kvp of sortedPieces){
        console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`);
    }
}

solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
      ]
      
);
