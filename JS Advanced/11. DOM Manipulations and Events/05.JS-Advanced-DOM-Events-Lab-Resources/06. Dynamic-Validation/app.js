function validate() {
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', enterKeyPress);

    const validateRegExp = /[a-z]+@[a-z]+\.[a-z]+/g;
    function enterKeyPress(event) {
        
            let email = event.target.value;
            const bool = validateRegExp.test(email);
            if (bool) {
                inputElement.classList.remove('error');
            }else{
                inputElement.classList.add('error');
            }

        
    }
}