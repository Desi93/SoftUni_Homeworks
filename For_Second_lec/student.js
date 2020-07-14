function student(input){
    let studentName = input.shift();
    let grade = Number(input.shift());
    let gradesCount = 0;
    let gradesSum = 0;
    let averageGrade = 0;
    let failCount = 0;

    while(gradesCount < 12){
        if(grade >= 4){
            gradesSum += grade;
            gradesCount++;
        } else{
            failCount++;
            if(failCount > 1){
            break;
        }
        gradesCount++;
        }
        
        
        
        grade = Number(input.shift());       
    }

    if(failCount > 1){
        console.log(`${studentName} has been excluded at ${gradesCount} grade`);
        
    } else {
        averageGrade = gradesSum / gradesCount ; 
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
    
}

student(['Mimi',
'5',
'6',
'5',
'6',
'5',
'6',
'6',
'2',
'3'
])