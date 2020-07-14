function solve(input){
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    for(let f = floors; f > 0; f--){
        let floor = '';
        for(let r = 0; r < rooms; r++){
            if((f % 2 == 0) && (f != floors)){
                floor += `O${f}${r} `;
            } else if (f == floors){
                floor += `L${f}${r} `;
            } else {
                floor += `A${f}${r} `;
                
            }
        
        }
        console.log(floor);
        
    }
    
    
}

solve([ '6', '4' ]);