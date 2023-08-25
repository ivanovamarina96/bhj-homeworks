const productQuantityControls = [...document.querySelectorAll('.product__quantity-controls')];
const productQuantity = [...document.querySelectorAll('.product__quantity')];
const cartProducts = document.querySelector('.cart__products');
const parentProduct = document.querySelector('.products');
productQuantityControls.forEach((element) => {

	element.children[0].addEventListener('click', () => {
		if (element.children[1].textContent > 1) {
			element.children[1].textContent--
		}
	})
	element.children[2].addEventListener('click', () => {
		element.children[1].textContent++;
	})
})
productQuantity.forEach((index) => {
	const product = document.createElement('div');

	index.children[2].addEventListener('click', () => {


		if (index.parentElement.parentElement.getAttribute('data-id') == product.getAttribute('data-id')) {
			product.children[1].textContent = index.children[1].children[1].textContent;
		} else {

			product.classList.add('cart__product');
			product.insertAdjacentHTML('afterbegin', '<img class="cart__product-image"src="image.png"><div class="cart__product-count"></div>')
			cartProducts.insertAdjacentElement('beforeend', product);
			product.setAttribute('data-id', index.parentElement.parentElement.getAttribute('data-id'));
			product.children[1].textContent = index.children[1].children[1].textContent;
			product.children[0].setAttribute('src', index.parentElement.parentElement.children[1].getAttribute('src'))
		}


	})
});