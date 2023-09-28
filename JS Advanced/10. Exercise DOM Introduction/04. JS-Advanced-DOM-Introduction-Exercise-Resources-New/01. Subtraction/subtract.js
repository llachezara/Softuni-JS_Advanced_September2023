function subtract() {
    let firstNumValue = document.getElementById('firstNumber').value;
    let secondNumValue = document.getElementById('secondNumber').value

    let result = Number(firstNumValue) - Number(secondNumValue);
    document.getElementById('result').textContent = result;
}