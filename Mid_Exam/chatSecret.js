function solve(input){
    function insertSpace(str, index){
        str = Array.from(str);
       
        let strStart = str.slice(0, index);
        let strEnd = str.slice(index);

        strStart.push(' ');
        str = [];
        str.push(...strStart);
        str.push(...strEnd);
        str = str.join('');
        
        return str;
    }

    function reverse(msg, substring){
        //cutting the substring
        msg = msg.replace(substring,'');
        //reversing
        let cut = "";
        for(let i = substring.length - 1; i >= 0; i--){
            cut = cut + substring[i];
        }
        //appending
        msg += cut;
        return msg;                  
    }

    function changeAll(str, substring, replacement){
        let string = Array.from(str);
        for(let i = 0; i < string.length; i++){
            let currentChar = string[i];
            if(currentChar === substring){
                string.splice(i, 1, replacement);
            }
        }

        str = string.join('');

        return str;
    }

    let msg = input.shift();
    let command = input.shift();

    while(command != 'Reveal'){
        command = command.split(':|:');
        
        switch(command[0]){
            case 'InsertSpace':
                command[1] = Number(command[1]);
                if((command[1] >= 0) && (command[1] < msg.length)){
                    msg = insertSpace(msg, command[1]);
                    console.log(msg);
                }
                break; 

            case 'Reverse':
                if(msg.includes(command[1])){
                    msg = reverse(msg, command[1]);
                    console.log(msg);
                } else {
                    console.log(`error`);  
                }
                
                break;
            
            case 'ChangeAll':
                if(msg.includes(command[1])){
                    msg = changeAll(msg, command[1], command[2]);
                    console.log(msg);
                }                
                break;

        }
        
        command = input.shift();
    }
    
    console.log(`You have a new text message: ${msg}`);
}

solve(
    [ 'Hello!ereht',
        'ChangeAll:|:i:|:o',
        'Reverse:|:ereht',
        'Reverse:|: ',
        'InsertSpace:|:3',
        'InsertSpace:|:50',
        'Reveal' ]
);