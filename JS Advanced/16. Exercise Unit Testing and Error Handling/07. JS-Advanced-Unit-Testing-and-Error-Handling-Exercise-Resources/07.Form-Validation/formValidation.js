function validate() {
    // let inputElementsArray = Array.from(document.querySelectorAll('#userInfo input'));

    let inputUsernameEl = document.getElementById('username');
    let inputEmailEl = document.getElementById('email');
    let inputPasswordEl = document.getElementById('password');
    let inputConfirmPasswordEl = document.getElementById('confirm-password');
    let inputCompanyEl = document.getElementById('company');
    let inputCompanyNumberEl = document.getElementById('companyNumber');

    let companyInfoFieldSetEl = document.getElementById('companyInfo');
    let companyNumberValidation = /.*/;

    inputCompanyEl.addEventListener('change', onChange)
    function onChange(event) {
        let showCompanyInfo = inputCompanyEl.checked ? true : false;

        if (showCompanyInfo) {
            companyInfoFieldSetEl.style.display = 'block';
            companyNumberValidation = /^[1-9][0-9]{3}$/;
        } else {
            companyInfoFieldSetEl.style.display = 'none';
            companyNumberValidation = /.*/;
        }
    }

    let submitButtonEl = document.getElementById('submit');
    submitButtonEl.addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault();
        let usernameValidation = /^[A-Za-z0-9]{3,20}$/;
        let passwordValidation = /^[\w]{5,15}$/;
        let confirmPasswordValidator = inputConfirmPasswordEl.value === inputPasswordEl.value ? true : false;
        let emailValidation = /^.*@.*\..*$/;


        let allInfoInInputElementsCorrect = true;
        //username 
        if (!usernameValidation.test(inputUsernameEl.value)) {
            inputUsernameEl.style.borderColor = 'red';
            allInfoInInputElementsCorrect = false;
        } else {
            inputUsernameEl.style.borderColor = '';
        }

        //email
        if (!emailValidation.test(inputEmailEl.value)) {
            inputEmailEl.style.borderColor = 'red';
            allInfoInInputElementsCorrect = false;
        } else {
            inputEmailEl.style.borderColor = '';
        }

        //password
        if (!passwordValidation.test(inputPasswordEl.value)) {
            inputPasswordEl.style.borderColor = 'red';
            allInfoInInputElementsCorrect = false;

        } else {
            if (!confirmPasswordValidator) {
                inputPasswordEl.style.borderColor = 'red';
            } else {
                inputPasswordEl.style.borderColor = '';
            }
        }

        //confirm password
        if (!confirmPasswordValidator) {
            inputConfirmPasswordEl.style.borderColor = 'red';
            allInfoInInputElementsCorrect = false;

        } else {
            if (!passwordValidation.test(inputPasswordEl.value)) {
                inputConfirmPasswordEl.style.borderColor = 'red';
            }
            else {
                inputConfirmPasswordEl.style.borderColor = '';
            }
        }

        //companyNumber
        if (!companyNumberValidation.test(inputCompanyNumberEl.value)) {
            inputCompanyNumberEl.style.borderColor = 'red';
            allInfoInInputElementsCorrect = false;
        } else {
            inputCompanyNumberEl.style.borderColor = '';
        }

        let elementWithIDValid = document.getElementById('valid');
        if (allInfoInInputElementsCorrect) {
            elementWithIDValid.style.display = 'block';
        } else {

            elementWithIDValid.style.display = 'none';

        }
    }

}
// else {
//     if (!passwordValidation.test(inputPasswordEl.value)) {
//         inputConfirmPasswordEl.style.borderColor = 'red';
//     }
//     else {
//         inputConfirmPasswordEl.style.borderColor = '';
//     }
// }
