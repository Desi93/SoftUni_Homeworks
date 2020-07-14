function solve(input){
    let destination = input.shift();
    while(destination != 'End'){
        let budget = Number(input.shift());
        let savedMoney = 0;
        while (savedMoney < budget){
            let amount = Number(input.shift());
            savedMoney += amount;
        } 

        console.log(`Going to ${destination}!`);
        
        destination = input.shift();
    } 
}

solve([
    'France',
'2000',
'300',
'300',
'200',
'400',
'190',
'258',
'360',
'Portugal',
'1450',
'400',
'400',
'200',
'300',
'300',
'Egypt',
'1900',
'1000',
'280',
'300',
'500',
'End'
  ]);