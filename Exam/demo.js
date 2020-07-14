function solve(bees, flowers){
    bees = Number(bees);
    flowers = Number(flowers);

    let totalHoney = bees * flowers * 0.21;
    let honeycombFull = Math.floor(totalHoney / 100);

    let honeyLeft = totalHoney - (honeycombFull * 100);


    console.log(`${honeycombFull} honeycombs filled.`);
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`);
    

}

solve(11, 120);