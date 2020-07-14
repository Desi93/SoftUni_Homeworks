function vacation(input){
    let moneyNeeded = Number(input.shift());
    let moneyOwned = Number(input.shift());
    let daysCount = 0;
    let spendCounter = 0;


    while((moneyOwned <= moneyNeeded) && (spendCounter <= 5)){
        let action = input.shift();
        let amount = Number(input.shift());

        if (action === 'save'){
            moneyOwned += amount;
            spendCounter = 0;
        } else if (action === 'spend'){
            moneyOwned -= amount;
            spendCounter++;
        } 
        daysCount++;
        if(spendCounter >= 5 || moneyOwned == 0){
            console.log(`You can't save the money.`);
            console.log(daysCount);
            break;
        }
        if(moneyOwned < 0){
            moneyOwned = 0;
        }
        if(moneyOwned >= moneyNeeded){
            console.log(`You saved the money for ${daysCount} days.`);
            break;
        } 
        
    }
}

vacation(['2000', '1000', 'spend', '1200', 'save', '2000']);