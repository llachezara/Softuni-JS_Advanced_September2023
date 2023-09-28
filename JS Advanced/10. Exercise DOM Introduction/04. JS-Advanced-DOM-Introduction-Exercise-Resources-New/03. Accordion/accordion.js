function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let changeText = buttonElement.textContent == "More" ? "Less" : "More";
    buttonElement.textContent = changeText;

    let elementToExpand = document.getElementById('extra');

    if (buttonElement.textContent == 'Less') {
        elementToExpand.style.display = 'block';
    } else {
        elementToExpand.style.display = 'none';
    }

}