function sameNumbers(number) {
    let numAsString = String(number);

    let sameDigitsInNumber = true;
    const digitToCheckFor = numAsString[0];
    let sumOfDigits = 0;
    for (let index = 0; index < numAsString.length; index++) {

        let currDigit = numAsString[index];
        if (digitToCheckFor != currDigit) {
            sameDigitsInNumber = false;
        }

        sumOfDigits += Number(currDigit);
    }

    console.log(sameDigitsInNumber);
    console.log(sumOfDigits);
}

sameNumbers(1234)