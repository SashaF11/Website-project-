// Make basket variable an array 

let basket = [];

// function to add items

function addToCart(shoeId,shoe,price){
    // check if item is already in basket
 const existingShoe = basket.find(item => item.id === shoeId);

 if(existingShoe){
    existingShoe.quantity += 1;
 } else{
    basket.push({
        id:shoeId,
        name:shoe,
        price:price,
        quantity:1
    });
 }
    // show basket

    updateBasketDisplay();
}

//update html

function updateBasketDisplay(){
    const basketList = document.getElementById('basketItems');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

// Clear basket display
basketList.innerHTML = '';

// loop it
basket.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
  basketList.appendChild(li);

// add price 

totalPrice += item.price * item.quantity;

});

    //display the price on website

totalPriceElement.textContent = `Total: £${totalPrice.toFixed(2)}`;
}
