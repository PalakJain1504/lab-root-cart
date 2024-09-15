// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  if (!product) {
    console.error('Product is null or undefined');
    return;
  }

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  if (!priceElement || !quantityElement) {
    console.error('Price or Quantity element not found');
    return;
  }

  console.log('Price Element:', priceElement);
  console.log('Quantity Element:', quantityElement);

  const price = parseFloat(priceElement.innerText);
  const quantity = quantityElement.valueAsNumber;

  console.log('Price:', price, 'Quantity:', quantity);

  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);

  return subtotal;
}
  


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });


  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = total.toFixed(2);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.closest('.product');
  productRow.remove();
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (name && price > 0) {
    const newRow = document.createElement('tr');
    newRow.classList.add('product');
    newRow.innerHTML = `
      <td class="name"><span>${name}</span></td>
      <td class="price">$<span>${price.toFixed(2)}</span></td>
      <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action"><button class="btn btn-remove">Remove</button></td>
    `;

    document.querySelector('#cart tbody').appendChild(newRow);

    
    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    
    nameInput.value = '';
    priceInput.value = 0;
  }
  
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  
  const createBtn = document.getElementById('create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});

