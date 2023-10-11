function create(arrrayWithContent) {
   let divWithFinalInfoElement = document.getElementById('content');

   for (const string of arrrayWithContent) {
      let divEl = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = string;
      pElement.style.display = 'none';

      divEl.appendChild(pElement);

      divEl.addEventListener('click', clickedDiv);

      function clickedDiv(event) {
         let pElement = event.currentTarget.querySelector('p');
         pElement.style.display = 'inline';
      }
      divWithFinalInfoElement.appendChild(divEl);
   }
}