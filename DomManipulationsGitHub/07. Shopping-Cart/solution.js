function solve() {
   
   let totalAmount = 0;
   let productsArray=[];
   let addButton = document.getElementsByClassName('product-add');
   let checkOutButton = document.getElementsByClassName('checkout')[0];
   let textArea = document.querySelector('textarea');
   textArea.disabled = "false";

   document.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.className == 'add-product') {
         let targetClass = e.target.parentNode.parentNode;
         let productName =  targetClass.children[1].children[0].innerText;
         let productPrice = targetClass.children[3].innerText;
         let td = document.createElement('td');

         if (!productsArray.includes(productName)) {
            productsArray.push(productName)
         }
         totalAmount += Number(productPrice);

         textArea.value += `Added ${productName} for ${productPrice} to the cart.\n`
        
         //to the textarea in the following format: "Added {name} for {money} to the cart.\n". 
         
      } else if (e.target.className == 'checkout') {
         if (productsArray == [] || totalAmount == 0) {
            textArea.value +='Something went wrong, please excuse us!\n'
         } else{
         let ordersNames = productsArray.join(', ');
         let endString = `You bought ${ordersNames} for ${totalAmount.toFixed(2)}.\n`
         textArea.value += endString;
         }
      }
   })

}