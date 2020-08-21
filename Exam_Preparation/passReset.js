function passReset(input){
    let pass = input.shift();
    let line = input.shift();

    while(line != 'Done'){
        let [command, firstArg, secondArg] = line.split(' ');

        switch(command){
            case 'TakeOdd':
                let newPass = '';
                for(let i = 0; i < pass.length; i++){
                    if(!(i % 2 == 0)){
                        newPass += pass[i];
                    }
                }

                pass = newPass;
                console.log(pass);
                break;

            case 'Cut':
                let index = firstArg;
                let length = secondArg;
                let substr = pass.substr(index, length)
                pass = pass.replace(substr, '');
                console.log(pass);
                break;

            case 'Substitute':
                let substring = firstArg;
                let substitute = secondArg;

                if(pass.includes(substring)){
                    while(pass.includes(substring)){
                        pass = pass.replace(substring, substitute);
                    }
                    console.log(pass);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }

        line = input.shift();
    }

    console.log(`Your password is: ${pass}`);
}

passReset(
    [
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]
);
