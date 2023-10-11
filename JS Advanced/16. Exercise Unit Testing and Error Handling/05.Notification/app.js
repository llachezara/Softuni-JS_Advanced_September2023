function notify(message) {
  let divElementWithMessage = document.getElementById('notification');

  divElementWithMessage.textContent = message;
  divElementWithMessage.style.display = 'block';

  divElementWithMessage.addEventListener('click', hide);

  function hide(e) {
    let divElement = e.currentTarget;
    divElement.style.display = 'none';
  }
}