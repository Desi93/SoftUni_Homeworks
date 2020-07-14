function solve(input){
    let movie = input.shift();
    while(movie != 'Finish'){
        let seats = Number(input.shift());
        let soldTickets = 0;
        let ticket = input.shift();
        while(ticket != 'End'){
            soldTickets++;

            if(soldTickets >= seats){
                break;
            }

            ticket = input.shift();
        }

        let percentFull = (soldTickets / seats) * 100;
        
        console.log(`${movie} - ${percentFull.toFixed(2)}% full.`);
        

        movie = input.shift();
    }
}

solve([
    'Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish'
  ]);