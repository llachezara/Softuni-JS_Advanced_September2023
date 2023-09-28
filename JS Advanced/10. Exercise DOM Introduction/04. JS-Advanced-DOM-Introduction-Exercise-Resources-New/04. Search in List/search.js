function search() {
   let inputElement = document.getElementById('searchText');

   let stringToSearch = inputElement.value;

   let listItems = document.querySelectorAll("#towns li");

   let matches = 0;
   for (const item of listItems) {

      let textInCurrItem = item.textContent.toLowerCase();

      if (textInCurrItem.includes(stringToSearch.toLowerCase())) {
         item.style.textDecoration = 'underline';
         item.style.fontWeight = 'bold';
         matches++;
      } else {
         item.style.textDecoration = 'none';
         item.style.fontWeight = 'normal';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
   inputElement.value = '';

}
