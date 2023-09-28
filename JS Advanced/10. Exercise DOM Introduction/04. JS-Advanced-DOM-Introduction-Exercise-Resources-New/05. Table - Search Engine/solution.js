function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let inputField = document.getElementById('searchField');
   let trs = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {

      let searchString = inputField.value;
      inputField.value = '';

      for (const row of trs) {

         let [...rowtdS] = row.children;

         for (const td of rowtdS) {

            if (td.textContent.includes(searchString)) {
               row.classList.add('select');
               break;
            }else{
               row.classList.remove('select');
            }
         }

      }

   }
}