function solve(input){
    // input
    let cruiseType = input.shift();
    let cabinType = input.shift();
    let nights = Number(input.shift());

    let pricePerNight = 0;

    // check for type of cabin
    if(cabinType === 'standard cabin'){
        switch(cruiseType){
            case 'Mediterranean':
                pricePerNight = 27.50;
                break;
            
            case 'Adriatic':
                pricePerNight = 22.99;
                break;

            case 'Aegean':
                pricePerNight = 23.00;
                break;
        }
    } else if(cabinType === 'cabin with balcony'){
        switch(cruiseType){
            case 'Mediterranean':
                pricePerNight = 30.20;
                break;

            case 'Adriatic':
                pricePerNight = 25;
                break;

            case 'Aegean':
                pricePerNight = 26.60;
                break;
        }
    } else if(cabinType === 'apartment'){
        switch(cruiseType){
            case 'Mediterranean':
                pricePerNight = 40.50;
                break;
            
            case 'Adriatic':
                pricePerNight = 34.99;
                break;

            case 'Aegean':
                pricePerNight = 39.80;
                break;
        }
    }

    let totalPrice = pricePerNight * nights * 4;
    // check if more than 7 nights
    if(nights > 7 ){
        totalPrice *= 0.75; 
    }

    // print output
    console.log(`Annie's holiday in the ${cruiseType} sea costs ${totalPrice.toFixed(2)} lv.`);
    
}

solve([ 'Aegean', 'standard cabin', '10', '' ]);