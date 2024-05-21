function trainTheTrainers(input) {
    let judgeCount = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let totalGradesSum = 0;
    let totalGradesCount = 0;

    while (command !== 'Finish') {
        let presentationName = command;
        let presentationGradeSum = 0;

        for (let currentJudge = 1; currentJudge <= judgeCount; currentJudge++) {
            let grade = Number(input[index]);
            index++;

            presentationGradeSum += grade;
        }

        let avgPresentationGrade = presentationGradeSum / judgeCount;
        console.log(`${presentationName} - ${avgPresentationGrade.toFixed(2)}.`);

        totalGradesSum += avgPresentationGrade;
        totalGradesCount++;

        command = input[index];
        index++;
    }
    let avgGrade = totalGradesSum / totalGradesCount;

    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
// trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);

trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);