function solve(input){
    let msg = input.shift();
    let line = input.shift();

    while(line !== 'Decode'){
        let [command, firstArg, secondArg] = line.split('|');

        switch(command){
            case 'Move':
                let letters = Number(firstArg);
                let substr = msg.substr(0, letters);
                msg = msg.replace(substr, '') + substr;
                break;

            case 'Insert':
                let index = Number(firstArg);
                let value = secondArg;
               
                    msg = msg.slice(0, index) + value + msg.slice(index);
                
                break;

            case 'ChangeAll':
                let substring = firstArg;
                let replacement = secondArg;
                while(msg.includes(substring)){
                    msg = msg.replace(substring, replacement);
                }
                break;
        }

        line = input.shift();
    }

    console.log(`The decrypted message is: ${msg}`);

}

solve(
  [ 'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']

);
