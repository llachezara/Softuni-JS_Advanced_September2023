function validate() {
    let regex = /^[a-z]+@[a-z]+\.[a-z]+/g;
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', onChange);

    function onChange(e){
        let inputElement = e.currentTarget;

        if (regex.test(inputElement.value)) {
            inputElement.classList.remove('error');
        }else{
            inputElement.classList.add('error');
        }
    }
}