function coins(input){
    let cashBack = Number(input.shift());
    let coinsCount = 0;
    let coins = cashBack * 100;

    while(coins >= 0){
        if(coins >= 200){
            coins = Math.round(coins - 200);
            coinsCount++;
        } else if ((coins < 200) && (coins >= 100)){
            coins = Math.round(coins - 100);
            coinsCount++;
        } else if ((coins < 100) && (coins >= 50)){
            coins = Math.round(coins - 50);
            coinsCount++;
        } else if ((coins < 50) && (coins >= 20)){
            coins = Math.round(coins - 20);
            coinsCount++;
        } else if ((coins < 20) && (coins >= 10)){
            coins = Math.round(coins - 10);
            coinsCount++;
        } else if ((coins < 10) && (coins >= 5)){
            coins = Math.round(coins - 5);
            coinsCount++;
        } else if ((coins < 5) && (coins >= 2)){
            coins = Math.round(coins - 2);
            coinsCount++;
        } else if ((coins < 2) && (coins >= 1)){
            coins = Math.round(coins - 1);
            coinsCount++;
        }

       if (coins <= 0){
            console.log(coinsCount);
            break;
        }
    }
}

coins([ '0.56' ]);