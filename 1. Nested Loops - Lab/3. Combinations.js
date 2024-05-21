function combinations(input) {
    let sum = Number(input[0]);

    let combinationsCount = 0;

    for (let firstNum = 0; firstNum <= sum; firstNum++) {
        for (let secondNum = 0; secondNum <= 25; secondNum++) {
            for (let thirdNum = 0; thirdNum <= 25; thirdNum++) {

                if (firstNum + secondNum + thirdNum === sum) {
                    combinationsCount++;
                }

            }

        }
    }
    console.log(combinationsCount);

}
combinations(['20']);