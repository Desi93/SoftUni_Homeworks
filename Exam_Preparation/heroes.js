function heroes(input){
    let numberOfHeroes = Number(input.shift());
    let heroes = {};
    
    for(let i = 0; i < numberOfHeroes; i++){
        let [name, hp, mp] = input.shift().split(' ');

        hp = Number(hp);
        mp = Number(mp);

        if((hp <= 100) && (mp <= 200)){
            heroes[name] = {hp, mp};
        } 
        
    }

    let line = input.shift();

    while(line != 'End'){
        let [command, heroName, firstArg, secondArg] = line.split(' - ');

        switch(command){
            case 'CastSpell':
                let mpNeeded = Number(firstArg);
                let spellName = secondArg;

                if(heroes[heroName].mp >= mpNeeded){
                    heroes[heroName].mp -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                let damage = Number(firstArg);
                let attacker = secondArg;

                heroes[heroName].hp -= damage;

                if(heroes[heroName].hp > 0){
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
                } else {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;

            case 'Recharge':
                let amountMp = Number(firstArg);
                let recoveredMp = heroes[heroName].mp + amountMp;

                if(recoveredMp > 200){
                    amountMp = 200 - heroes[heroName].mp;
                    heroes[heroName].mp = Math.min(200, recoveredMp);
                } else {
                    heroes[heroName].mp = recoveredMp;
                }

                console.log(`${heroName} recharged for ${amountMp} MP!`);

                break;

            case 'Heal':
                let amountHp = Number(firstArg);
                let recoveredHp = heroes[heroName].hp + amountHp;

                if(recoveredHp > 100){
                    amountHp = 100 - heroes[heroName].hp;
                    heroes[heroName].hp = Math.min(100, recoveredHp);
                } else {
                    heroes[heroName].hp = recoveredHp;
                }

                console.log(`${heroName} healed for ${amountHp} HP!`);
                break;
        }

        line = input.shift();
    }

    let heroEntries = Object.entries(heroes);
    let sortedHeroes = heroEntries.sort((a, b) => {
        if(b[1].hp == a[1].hp){
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].hp - a[1].hp;
        }
    });

    for (const kvp of sortedHeroes) {
        console.log(`${kvp[0]}\n HP: ${kvp[1].hp}\n MP: ${kvp[1].mp}`);
    }

}

heroes(
    [
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
      ]
      
);