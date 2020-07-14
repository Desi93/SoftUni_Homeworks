function bossRush(input){
    let lines = Number(input.shift());
    let bossInfo = input.shift();    
    let lineCounter = 0;
        
    while(lineCounter < lines){
        bossInfo = bossInfo.split(':');
        let bossName = bossInfo[0];
        let bossTitle = bossInfo[1];
        let nameIsValid = false;
        let titleIsValid = false;
        
        if(bossName[0] == '|'){
            bossName = bossName.replace('|', '');
            bossName = bossName.replace('|', '');
            if((bossName == bossName.toUpperCase()) && (bossName.length >= 4)){
                nameIsValid = true;
            } else {
                console.log("Access denied!");
            }
        } else {
            console.log("Access denied!");
        }

        if(bossTitle[0] == "#"){
            bossTitle = bossTitle.replace('#', '');
            bossTitle = bossTitle.replace('#', '');
            bossTitle = bossTitle.split(' ');
            
            if((bossTitle.length <= 2)){
                bossTitle = bossTitle.join(' ');
                titleIsValid = true;
            } else {
                console.log("Access denied!");
            }
        } else {
            console.log("Access denied!");
        }

        if(nameIsValid && titleIsValid){
            let strength = bossName.length;
            let armor = bossTitle.length;

            console.log(`${bossName}, The ${bossTitle}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armour: ${armor}`);            
        }

        bossInfo = input.shift();
        lineCounter++;
    }

}

bossRush(
    [
        '3',
        '|PETER|:#H1gh Overseer#',
        '|IVAN|:#Master detective#',
        '|KARL|: #Marketing lead#'
      ]
);