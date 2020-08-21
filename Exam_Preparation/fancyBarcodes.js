function fancyBarcodes(input){
    let barcodes = Number(input.shift());
    let pattern = /([@][#]{1,})[A-Z]+[A-Za-z0-9]{4,}[A-Z]([@][#]{1,})/;
    let number = /\d+/g;

    for(let i = 0; i < barcodes; i++){
        let barcode = input.shift();
        if(barcode.match(pattern)){
            let group = '';
            let match;
            if(barcode.match(number)){
                while ((match = number.exec(barcode)) != null) {
                    group += match[0];
                }
            } else {
                group = '00';
            }

            console.log(`Product group: ${group}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

fancyBarcodes([
  '6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#'
]);