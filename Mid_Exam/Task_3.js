function num(input){
    let numbers = input;
    numbers = numbers.split(' ').map(Number);

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    let greaterNumsCount = 0;
    let greaterNums = [];

    for(let i = 0; i < numbers.length; i++){
        let currentNum = numbers[i];

        if(currentNum > average){
            greaterNums.push(currentNum);
            greaterNumsCount++;
        } 
    }

    greaterNums.sort(sortNums);
  
    if(greaterNumsCount > 5){
        greaterNums.splice(5);
    } 

    if(greaterNumsCount > 0){
        let print = '';

        for(let i = 0; i < greaterNums.length; i++){
            print += greaterNums[i] + ' ';
        }

        console.log(print);
        
        
    } else {
        console.log('No');
    }

    function sortNums(a, b) {
        return b - a;
    }
}

num('10 20 30 40 50');