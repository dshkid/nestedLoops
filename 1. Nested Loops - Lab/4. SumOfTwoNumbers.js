function sumOfTwoNumbers(Input) {
    let startNum = Number(Input[0]);
    let finalNum = Number(Input[1]);
    let magicNum = Number(Input[2]);

    let combinations = 0;
    let isFound = false;

    for (let x = startNum; x <= finalNum; x++) {
        for (y = startNum; y <= finalNum; y++) {
            let sum = x + y;
            combinations++;

            if (sum === magicNum) {
                console.log(`Combination N:${combinations} (${x} + ${y} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(['88', '888', '1000']);