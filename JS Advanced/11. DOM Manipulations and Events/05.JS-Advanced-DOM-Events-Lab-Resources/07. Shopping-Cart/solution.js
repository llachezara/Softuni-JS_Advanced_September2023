function solve() {
   let products = Array.from(document.getElementsByClassName('product'));
   let textAreaElement = document.querySelector('textarea')

   let totalSum = 0;
   let productsArray = [];
   for (const product of products) {
      let buttonElementOfProduct = product.querySelector('button.add-product');

      buttonElementOfProduct.addEventListener('click', addProduct);
      function addProduct(event) {
         const productDivElement = event.currentTarget.parentElement.parentElement;

         const productName = productDivElement.querySelector('div.product-title').textContent;

         if (!productsArray.includes(productName)) {
            productsArray.push(productName);
         }


         const productPrice = Number(productDivElement.querySelector('div.product-line-price').textContent);
         totalSum += productPrice;


         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

      }

   }
   const checkoutButtonElement = document.querySelector('button.checkout');
   checkoutButtonElement.addEventListener('click', addOrderSummary);

   function addOrderSummary() {
      textAreaElement.textContent += `You bought ${productsArray.join(', ')} for ${totalSum.toFixed(2)}.`;

      const buttonsElements = document.querySelectorAll('button');

      for (const buttonElement of buttonsElements) {
         buttonElement.disabled = true;
      }
   }

}