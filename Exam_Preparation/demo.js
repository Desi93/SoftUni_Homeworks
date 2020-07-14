function solve(input){
    let pensAmount = Number(input.shift());
    let markersAmount = Number(input.shift());
    let detergentAmount = Number(input.shift());
    let discountPercent = Number(input.shift());

    let penPrice = 5.80;
    let markersPrice = 7.2;
    let detergentPrice = 1.2;

    let pensTotalPrice = penPrice * pensAmount;
    let markerTotalPrice = markersPrice * markersAmount;
    let detergentTotalPrice = detergentAmount * detergentPrice;

    let totalPrice = pensTotalPrice + markerTotalPrice + detergentTotalPrice;

    let discount = discountPercent / 100;

    let totalPriceWithDiscount = totalPrice * (1 - discount);

    console.log(totalPriceWithDiscount.toFixed(3));


}

solve([ '2', '3', '2.5', '25' ])