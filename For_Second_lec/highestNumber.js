function highestNumber(input){
    let numberCount = Number(input.shift());
    let minNumber = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < numberCount; i++){ 
        let number = Number(input.shift());
        if (minNumber > number){
            minNumber = number;
        }
    }

    console.log(minNumber);
}

highestNumber(['5',
    '-5000',
    '-4000',
    '-3000',
    '-2000',
    '-1000']);