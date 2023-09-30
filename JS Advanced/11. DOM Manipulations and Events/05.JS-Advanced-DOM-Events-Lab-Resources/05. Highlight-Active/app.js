function focused() {
   let divElement = document.querySelector('body div');

   for (const div of  divElement.querySelectorAll('div')) {
    
    const inputElement = div.querySelector('input');
    inputElement.addEventListener('focus', focusedDiv);
    inputElement.addEventListener('blur', blurDiv);

   }

   function focusedDiv(event) {
    event.currentTarget.parentElement.classList.add('focused');  
   }
   function blurDiv(event) {
    event.currentTarget.parentElement.classList.remove('focused');  
   }
}