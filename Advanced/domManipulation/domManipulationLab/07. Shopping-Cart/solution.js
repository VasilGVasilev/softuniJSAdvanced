function solve() {
   let arrOfProducts = Array.from(document.querySelectorAll('div.product-line-price')).map(e=>e.textContent);
   let btnArr = Array.from(document.querySelectorAll('button.add-product'));
   let checkout = document.querySelector('button.checkout');
   let textArea = document.querySelector('textarea');

   let totalPrice = 0;
   let setOfAddedProducts = new Set();

   // adding logic
   btnArr.forEach(e => e.addEventListener('click', clickMe));
   function clickMe(event){
      
      let nameClicked = event.target.parentElement.parentElement.children[1].children[0].textContent;
      let priceClicked = Number(event.target.parentElement.parentElement.children[3].textContent);

      totalPrice += Number(priceClicked);
      setOfAddedProducts.add(nameClicked);

      textArea.textContent += `Added ${nameClicked} for ${priceClicked.toFixed(2)} to the cart.\n`
   }

   // checkout logic
   checkout.addEventListener('click', checkoutMe);

   function checkoutMe(){
      let arr = Array.from(setOfAddedProducts);
      btnArr.forEach(e => {
         e.disabled = true; })
      checkout.disabled = true;
      textArea.textContent += `You bought ${arr.join(', ')} for ${totalPrice.toFixed(2)}.`
   }
}