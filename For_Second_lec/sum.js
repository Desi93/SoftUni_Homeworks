function sumNumbers(input){
    let data = input.shift();
    let sum = 0;

    while (data != 'Stop'){
        let number = Number(data);
        sum += number;
        data = input.shift();
    }

    console.log(sum);
    
}

sumNumbers(['10', '20', '30', '45', 'Stop']);