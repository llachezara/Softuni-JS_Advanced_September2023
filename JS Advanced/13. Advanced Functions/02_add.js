function solution(x) {
    return function (num) {
        let result = num + x++;
        return result;
    }
}
let add7 = solution(7);
console.log(add7(2));
console.log(add7(2));
console.log(add7(2));
console.log(add7(2));
console.log(add7(2));

