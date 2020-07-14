function solve(input){
    let bakers = Number(input.shift());

    let cookiesPrice = 1.50;
    let cakesPrice = 7.80;
    let wafflesPrice = 2.30;

    let totalPastryBaked = 0;
    let totalMoney = 0;

    let bakerName = input.shift();
    
    console.log(`All bakery sold: ${totalPastryBaked}`);
    console.log(`Total sum for charity: ${totalMoney.toFixed(2)} lv.`);
    

}

solve([
    '3',            'Iva',
    'cookies',      '5',
    'cakes',        '3',
    'Stop baking!', 'George',
    'cakes',        '7',
    'waffles',      '2',
    'Stop baking!', 'Ivan',
    'cookies',      '6',
    'Stop baking!'
  ]);