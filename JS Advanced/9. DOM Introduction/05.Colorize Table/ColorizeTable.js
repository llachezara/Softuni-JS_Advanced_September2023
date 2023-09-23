function colorize() {
    let tableDatas = document.querySelectorAll('tr:nth-child(2n)') ;
    
    for (const element of tableDatas) {
        element.style.backgroundColor = "teal";
    }
}