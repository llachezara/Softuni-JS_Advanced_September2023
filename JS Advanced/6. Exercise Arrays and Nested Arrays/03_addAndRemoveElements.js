function print(commands) {
    let array = [];
    let firstNum = 0;

    for (let i = 0; i < commands.length; i++) {
        firstNum++;

        if (commands[i] === 'add') {

            array.push(firstNum);
        } else {
            array.splice(array.length - 1, 1);
        }

    }

    if (array.length === 0) {
        console.log("Empty");
    } else {
        console.log(array.join('\n'));
    }

}
print(["add",
    "add",
    "remove",
    "remove",
    "add"])