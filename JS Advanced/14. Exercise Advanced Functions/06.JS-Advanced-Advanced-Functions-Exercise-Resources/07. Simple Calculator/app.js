function calculator() {
    return {
        init: function (selector1, selector2, resultSelector) {
            this.element1 = document.querySelector(selector1);
            this.element2 = document.querySelector(selector2);
            this.resultElement = document.querySelector(resultSelector);
        },
        add: function () {
            const sum = Number(this.element1.value) + Number(this.element2.value);
            this.resultElement.value = sum;
        },
        subtract: function () {
            const difference = Number(this.element1.value) - Number(this.element2.value);
            this.resultElement.value = difference;
        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



