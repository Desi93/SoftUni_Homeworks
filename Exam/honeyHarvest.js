function solve(flowerType, flowerAmount, season){
    flowerAmount = Number(flowerAmount);
    
    let honey = 0;
    let totalHoney = 0;

    if(season === 'Spring'){
        switch(flowerType){
            case 'Sunflower':
                honey = 10;
                break;

            case 'Daisy':
                honey = 12 * 1.1;
                break;

            case 'Lavender':
                honey = 12;
                break;

            case 'Mint':
                honey = 10 * 1.1;
                break;
        }

        totalHoney = honey * flowerAmount;
        
    } else if(season === 'Summer'){
        switch(flowerType){
            case 'Sunflower':
                honey = 8;
                break;
    
            case 'Daisy':
                honey = 8;
                break;
    
            case 'Lavender':
                honey = 8;
                break;
    
            case 'Mint':
                honey = 12;
                break;
        }

        totalHoney = honey * flowerAmount * 1.1;
    
    } else if(season === 'Autumn'){
        switch(flowerType){
            case 'Sunflower':
                honey = 12;
                break;
    
            case 'Daisy':
                honey = 6;
                break;
    
            case 'Lavender':
                honey = 6;
                break;
    
            case 'Mint':
                honey = 6;
                break;
        }
        totalHoney = honey * flowerAmount * 0.95;
    }
    
    console.log(`Total honey harvested: ${totalHoney.toFixed(2)}`);
    

}

solve('Sunflower', '11', 'Autumn');
