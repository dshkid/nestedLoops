function numberPyramid(input) {
    let num = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrLine = '';

    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {

            if (current > num) {
                isBigger = true;
                break;
            }
            printCurrLine += current + ' ';
            current++;
        }
        console.log(printCurrLine);
        printCurrLine = '';
        if (isBigger) {
            break;
        }
    }
}
numberPyramid(['15']);