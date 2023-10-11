function solution(num) {
    let sum = num;

    function add(number) {
        sum += number;
        return add;
    }

    add.toString = function () {
        return `${sum}`;
    }

    return add;
}
console.log(solution(1)(2)(3) + '');