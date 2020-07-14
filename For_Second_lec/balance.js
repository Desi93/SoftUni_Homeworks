function fun(tablesCount, tableLength, tableWidth) {
    let tableclothArea = ((tableLength + 0.60) * (tableWidth + 0.60)) * tablesCount;
    let squareclothArea = ((tableLength / 2) * (tableLength / 2)) * tablesCount;
    let priceInUSD = tableclothArea * 7 + squareclothArea * 9;
    let priceInBGN = priceInUSD * 1.85;

    console.log(`${priceInUSD.toFixed(2)} USD`);
    console.log(`${priceInBGN.toFixed(2)} BGN`);
}

fun(5, 1.00, 0.50);