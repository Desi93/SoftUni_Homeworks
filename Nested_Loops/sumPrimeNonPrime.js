function solve(input){
    let number = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;

    while(number !== 'stop'){
        let currentNum = Number(number);

        if(currentNum < 0){
            console.log(`Number is negative.`);
            number = input.shift();
            continue;
        }
        
        let isPrime = true;

        for(let i = 2; i <= Math.sqrt(currentNum); i++){
            if(currentNum % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeSum += currentNum;
        } else {
            nonPrimeSum += currentNum;
        }
        number = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
    
}

solve([
    '3',    '9',
    '0',    '7',
    '19',   '4',
    'stop'
  ]);