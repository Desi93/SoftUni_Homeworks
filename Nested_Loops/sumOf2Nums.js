function solve(input){
    let begin = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combinationCounter = 0;
    let sum = 0;

    for (let x1 = begin; x1 <= end; x1++){
        for (let x2 = begin; x2 <= end; x2++){
            combinationCounter++;
            sum = x1 + x2;
            if(sum == magicNumber){
                console.log(`Combination N:${combinationCounter} (${x1} + ${x2} = ${sum})`);
                break;
            } 
        }
        if (sum == magicNumber){
            break;
        }
    }

    if(sum != magicNumber){
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
    }
}

solve([ '88', '888', '1000' ]
);