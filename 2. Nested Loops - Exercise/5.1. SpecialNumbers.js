function specialNumbers(input) {
    let num = Number(input[0]);

    let result = '';

    for (let curNum = 1111; curNum <= 9999; curNum++) {
        let curNumStr = curNum.toString();
        let isSpecial = true;

        for (let x = 0; x < curNumStr.length; x++) {
            let digits = Number(curNumStr[x]);

            if (num % digits !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial === true) {
            result += curNumStr + ' ';
        }
    }
    console.log(result);
}
specialNumbers(['3']);

// specialNumbers(['11']);

// specialNumbers(['16']);