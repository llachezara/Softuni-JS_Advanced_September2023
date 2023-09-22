function findPreviousDay(year, month, day) {

    let previousDate = new Date(year, month - 1, day - 1);
    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth()+1}-${previousDate.getDate()}`);

}
findPreviousDay(2015, 1, 1)