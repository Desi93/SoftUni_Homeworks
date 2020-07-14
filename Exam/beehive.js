function solve(population, years){
    population = Number(population);
    years = Number(years);

    for(let year = 1; year <= years; year++){
        if(population >= 10){
            population += (Math.floor(population / 10) * 2);
        }

        if(year % 5 == 0){
            population -= (Math.floor(population / 50) * 5);
        }

        population -= (Math.floor(population / 20) * 2);
    }

    console.log(`Beehive population: ${population}`);
    
}

solve('100', '6');