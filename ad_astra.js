function solve(input){
    let pattern = /([|#])([A-Za-z ]+)\1+([0-9]{2}[/][0-9]{2}[/][0-9]{2})\1(\d{0,5})\1/g;
    let foodInfo = input.shift();

    let totalFood = foodInfo.match(pattern);
    let totalCalories = 0;
    let days = 0;

    if(totalFood != null){
        for(let i = 0; i < totalFood.length; i++){
            let name, date, calories;
            let food = totalFood[i];
            
            if(food[0] == '#'){
                food = food.replace('#', '');
                [name, date, calories] = food.split('#');
            } else if(food[0] == '|'){
                food = food.replace('|', '');
                [name, date, calories] = food.split('|');
            }
        
            calories = Number(calories);
            
            if(calories <= 10000 && calories > 0){
                totalCalories += calories;
            }
        
        }

    days = Math.floor(totalCalories / 2000);
}


    console.log(`You have food to last you for: ${days} days!`);

    if(totalFood != null){
        for(let i = 0; i < totalFood.length; i++){
            let name, date, calories;
            let food = totalFood[i];

            if(food[0] == '#'){
                food = food.replace('#', '');
                [name, date, calories] = food.split('#');
            } else if(food[0] == '|'){
                food = food.replace('|', '');
                [name, date, calories] = food.split('|');
            }

            calories = Number(calories);

            if(calories <= 10000 && calories > 0){
                console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
            }
        }
    }
        
}

solve(
    [
        ''
    ]    
);
