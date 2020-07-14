function examPrep(input){
    let maxBadGrades = Number(input.shift());

    let countBadGrades = 0;
    let sumGrades = 0;
    let counterGrades = 0;
    let lastTask = '';

    while(countBadGrades < maxBadGrades){
        let taskName = input.shift();
        let grade = Number(input.shift());

        if(taskName === 'Enough' ){
            let averageGrade = sumGrades / counterGrades;
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${counterGrades}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }

        sumGrades += grade;
        counterGrades++;

        if(grade <= 4){
            countBadGrades++;
        }

        lastTask = taskName;
    }

    if(countBadGrades == maxBadGrades){
        console.log(`You need a break, ${countBadGrades} poor grades.`);
    }
}

