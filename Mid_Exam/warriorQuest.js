function warriorQuest(input){
    //Input
    let skill = input.shift();
    let command = input.shift();

    while(command != 'For Azeroth'){
        let commandInfo = command.split(' ');
        
        if(commandInfo == 'GladiatorStance'){
            skill = skill.toUpperCase();
            console.log(skill);
        } else if(commandInfo == 'DefensiveStance'){
            skill = skill.toLowerCase();
            console.log(skill);
        } else if(commandInfo[0] == 'Dispel'){
            if((commandInfo[1] >= 0) && (commandInfo[1] < skill.length)){
                skill = skill.replace(skill[commandInfo[1]], commandInfo[2]);
                console.log('Success!');
            } else {
                console.log("Dispel too weak.");
            } 
        } else if(commandInfo[0] == 'Target'){
            if(commandInfo[1] == 'Change'){
                if(skill.includes(commandInfo[2])){
                    skill = skill.replace(commandInfo[2], commandInfo[3]);
                    console.log(skill);
                }
            } else if(commandInfo[1] == 'Remove'){
                if(skill.includes(commandInfo[2])){
                    skill = skill.replace(commandInfo[2], '');
                    console.log(skill);
                }
            }
        } else {
            console.log("Command doesn't exist!");
        }

        command = input.shift();
    }

}

warriorQuest([
    'DYN4MICNIC',
'Target Remove NIC',
'Dispel 3 A',
'DefensiveStance',
'Target Change d D',
'target change D d',
'For Azeroth'
  ]);