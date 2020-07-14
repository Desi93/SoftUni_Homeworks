function softUniReception(input){
    let firstEmpEff = Math.min(100, Number(input.shift()));
    let secondEmpEff = Math.min(100, Number(input.shift()));
    let thirdEmpEff = Math.min(100, Number(input.shift()));
    let studentsCount = Math.min(10000, Number(input.shift()));

    let efficiency = firstEmpEff + secondEmpEff + thirdEmpEff;
    let hourCount = 0;
    let hours = 0;
    let breakCount = 0;

    while(studentsCount > 0){
        if(hourCount != 3){
            studentsCount -= efficiency;
            hourCount++;            
            hours++;
        } else if(hourCount == 3){
            hourCount = 0;
            breakCount++;
        }
    }

    hours += breakCount;
    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['3','2','5','40']);