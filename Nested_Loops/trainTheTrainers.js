function solve(input){
    let judges = Number(input.shift());
    let line = input.shift();
    let presentationCount = 0;
    let totalGrades = 0;

    while(line != 'Finish'){
        let presentation = line;
        let grade = 0;
        let averageGrade = 0;
        let totalCurrentGrade = 0;

        for(let i = 1; i <= judges; i++){
            grade = Number(input.shift());
            totalCurrentGrade += grade;
        }
        averageGrade = totalCurrentGrade / judges;
        console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);
        totalGrades += averageGrade;
        presentationCount++;
        line = input.shift();
    }
    
    let averageTotal = totalGrades / presentationCount;
    console.log(`Student's final assessment is ${averageTotal.toFixed(2)}.`);
    

}

solve([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish'
  ]);