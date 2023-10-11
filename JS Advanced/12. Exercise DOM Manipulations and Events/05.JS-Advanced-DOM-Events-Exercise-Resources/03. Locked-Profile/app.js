function lockedProfile() {
    let divsClassProfile = Array.from(document.getElementsByClassName('profile'));

    for (const divEl of divsClassProfile) {

        let buttonElOfDivEl = divEl.querySelector('button');
        buttonElOfDivEl.addEventListener('click', showInfo)

        function showInfo(event) {
            let buttonEl = event.currentTarget;
            let lockedProfileBool = checkIfProfileIsLocked(buttonEl);

            let divElWithHiddenInfo = buttonEl.parentElement.querySelector('div');

            if (divElWithHiddenInfo.style.display === 'inline' && checkIfProfileIsLocked(buttonEl) === false) {
                divElWithHiddenInfo.style.display = 'none';
                buttonEl.textContent = 'Show more';

            } else {
                if (!lockedProfileBool) {
                    divElWithHiddenInfo.style.display = 'inline';
                    buttonEl.textContent = 'Hide it';
                }
            }

        }

        function checkIfProfileIsLocked(reference) {
            return reference.parentElement.querySelector('input[value=lock]').checked;
        }
    }
}