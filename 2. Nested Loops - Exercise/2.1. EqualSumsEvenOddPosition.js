function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let curNumStr = curNum.toString();

        let oddPosition = 0;
        let evenPosition = 0;

        for (let x = 0; x < curNumStr.length; x++) {
            let digits = Number(curNumStr[x]);

            if (x % 2 === 0) {
                evenPosition += digits;
            } else {
                oddPosition += digits;
            }
        }

        if (evenPosition === oddPosition) {
            result += curNumStr + ' ';
        }
    }
    console.log(result);
}
equalSumsEvenOddPosition(['123456', '124000']);