function solve(input){
    let income = Number(input.shift());
    let months = Number(input.shift());
    let spendings = Number(input.shift());

    let totalIncome = income * months;
    let totalSpendings = spendings * months;
    let otherSpendings = 0.3 * income * months;
    let totalSaved = totalIncome - totalSpendings - otherSpendings;
    let totalSavedPercentage = (totalSaved / totalIncome) * 100;

    console.log(`She can save ${totalSavedPercentage.toFixed(2)}%`);
    console.log(totalSaved.toFixed(2));
    
    
}

solve([ '1500', '3', '800' ]);