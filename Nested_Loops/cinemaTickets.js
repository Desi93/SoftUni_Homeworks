function solve(input){
    let movie = input.shift();

    let totalTickets = 0;
    let percentStandardTickets = 0;
    let percentStudentTickets = 0;
    let percentKidTickets = 0;
    let standard = 0;
    let kid = 0;
    let student = 0;

    while(movie != 'Finish'){    
        let seats = Number(input.shift());
        let typeOfTicket = input.shift();
        let soldTickets = 0;

        while(typeOfTicket != 'End'){
            soldTickets++;
            if(typeOfTicket == 'kid'){
                kid++;
            } else if(typeOfTicket == 'student'){
                student++;
            } else if(typeOfTicket == 'standard'){
                standard++;
            } 

            if(soldTickets >= seats){
                break;
            }
            
            typeOfTicket = input.shift();
        }

        
        let percentFull = (soldTickets / seats) * 100;
        
        console.log(`${movie} - ${percentFull.toFixed(2)}% full.`);

        totalTickets += soldTickets; 
        movie = input.shift();
    }
    
    
    percentStandardTickets = (standard / totalTickets) * 100;
    percentStudentTickets = (student / totalTickets) * 100;
    percentKidTickets = (kid / totalTickets) * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
    
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