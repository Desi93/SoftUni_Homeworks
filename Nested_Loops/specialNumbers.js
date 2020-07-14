function solve(input){
    let n = Number(input.shift());
    let output = '';

    for (let d1 = 1; d1 <= 9; d1++){
        for (let d2 = 1;  d2<= 9; d2++){
            for (let d3 = 1; d3 <= 9; d3++){
                for (let d4 = 1; d4 <= 9; d4++){
                    let firstIsMagic = n % d1 === 0;
                    let secondIsMagic = n % d2 === 0;
                    let thirdIsMagic = n % d3 === 0;
                    let fourthIsMagic = n % d4 === 0;
                    if(firstIsMagic && secondIsMagic && thirdIsMagic && fourthIsMagic){
                        output += `${d1}${d2}${d3}${d4} `;
                    }
                }
            }
        }
    }
    console.log(output);
    
}

solve([ '3' ]);