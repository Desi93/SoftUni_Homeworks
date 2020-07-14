function arrayModifier(input){

    function swap(arr, index, index2){
        let toSwap = arr.slice(index, index + 1);
        let swapped = arr.slice(index2, index2 + 1);
        arr.splice(index, 1, ...swapped);
        arr.splice(index2, 1, ...toSwap); 
    }

    let array = input.shift().split(' ').map(Number);
    let command = input.shift();
    
    
    while(command != 'end'){
        let commandInfo = command.split(' ');
        
        switch(commandInfo[0]){
            case 'swap':
                commandInfo[1] = Number(commandInfo[1]);
                commandInfo[2] = Number(commandInfo[2]);
                let inRange = (commandInfo[1] >= 0) && (commandInfo[1] < array.length) && (commandInfo[2] >= 0) && (commandInfo[2] < array.length);
                
                if(inRange){
                    swap(array, commandInfo[1], commandInfo[2]);
                }
                           
                break;

            case 'multiply':
                let isInRange = (commandInfo[1] >= 0) && (commandInfo[1] < array.length) && (commandInfo[2] >= 0) && (commandInfo[2] < array.length);
                commandInfo[1] = Number(commandInfo[1]);
                commandInfo[2] = Number(commandInfo[2]);
                if(isInRange){
                    let multiplier = array.slice(commandInfo[1], commandInfo[1] + 1);
                    let multiplicand = array.slice(commandInfo[2], commandInfo[2] + 1);
                    let result = multiplier[0] * multiplicand[0];
                    
                    array.splice(commandInfo[1], 1, result);
                    array.splice(commandInfo[2], 1, ...multiplicand);
                }
                break;

            case 'decrease':
                array = array.map(x => x - 1);                
                break;

        }

        command = input.shift();
    }

    let print = '';

    for(let i = 0; i < array.length; i++){
        
        if(i < array.length - 1){
            print += array[i] + ', ';
        } else {
            print += array[i];
        }
    }

    console.log(print);
}

arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);