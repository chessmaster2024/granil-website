
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    
    button.textContent = 'Added to Cart!';
  });
});
const buyNowButtons = document.querySelectorAll('.buy-now');

buyNowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    
    button.textContent = 'Purchased!';
  });
});

