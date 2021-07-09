// ITERATION 1

function updateSubtotal(product) {

  const price = parseFloat(product.querySelector('.price span').textContent)
  const quantity = product.querySelector('.quantity input').value
  const subPrice = (price * quantity).toFixed(2) * 1
  product.querySelector('.subtotal span').textContent = subPrice
  return subPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 let total = 0
  // ITERATION 2
  document.querySelectorAll('.product').forEach(product => {
    total += updateSubtotal(product)
  })
  
  // ITERATION 3
  document.querySelector('#total-value span').textContent = total.toFixed(2) * 1
}

// ITERATION 4

function removeProduct(event) {
  event.closest('tr').remove()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const tbody = document.querySelector('tbody')
  const template = document.getElementById('productRow')
  const clone = document.importNode(template.content, true)

  const name = document.querySelector('.create-product td:first-of-type input').value
  const price = document.querySelector('.create-product td:nth-of-type(2) input').value

  clone.querySelector('.name span').textContent = name
  clone.querySelector('.price span').textContent = price
  
  tbody.appendChild(clone)
  initRemoveBtn()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  initRemoveBtn()
  
  document.getElementById('create').onclick = () => {
    createProduct()
  }
});

function initRemoveBtn() {
  document.querySelectorAll('.btn.btn-remove').forEach(btn => {
    btn.onclick = () => removeProduct(btn)
  })
}