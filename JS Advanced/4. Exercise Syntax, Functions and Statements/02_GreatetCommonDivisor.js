function findGratestCommonDivisor(num1, num2) {

    let smallerNum = Math.min(num1, num2);
    let biggerNum = Math.max(num1, num2);

    let gcd = 1;
    for (let num = 1; num <= smallerNum; num++) {

        if (biggerNum % num == 0 && smallerNum % num == 0) {
            gcd = num;
        }
    }

    console.log(gcd);
}
findGratestCommonDivisor(21,7)