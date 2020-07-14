function solve(bees, bearHP, bearAP){
    bees = Number(bees);
    bearHP = Number(bearHP);
    bearAP = Number(bearAP);
    
    bees -= bearAP;

    while(bees >= 100){
        bearHP -= (bees * 5);
        if(bearHP <= 0){
            break;
        }
        bees -= bearAP;
    }

    if(bees >= 100){
        if(bearHP < 0){
            console.log(`Beehive won! Bees left ${bees}.`);
        }
    } else{
        if(bees < 0){
            bees = 0;
        }
        console.log(`The bear stole the honey! Bees left ${bees}.`);
        
    }
}

solve('1000', '10000', '100');