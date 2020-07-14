function solve(input){
    let n = Number(input.shift());
    let l = Number(input.shift());
    let password = '';

    for (let s1 = 1; s1 <= n; s1++){
        for(let s2 = 1; s2 <= n; s2++){
            for(let s3 = 97; s3 < 97 + l; s3++){
                for(let s4 = 97; s4 < 97 + l; s4++){
                    for(let s5 = 1; s5 <= n; s5++){
                        if(s5 > s2 && s5 > s1){
                        let thirdLetter = String.fromCharCode(s3);
                        let fourthLetter = String.fromCharCode(s4);
                        password += `${s1}${s2}${thirdLetter}${fourthLetter}${s5} `;
                        }
                    }
                }
            }
        }
        
    }
    
    console.log(password);
    
}

solve([ '2', '4' ]);