function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

function sum(a,b){
    return a+b
}
module.exports={
    isOddOrEven,
    sum
}