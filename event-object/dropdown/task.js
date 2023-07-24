const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(dropdownList.querySelectorAll('.dropdown__item'));

function value() {
	dropdownList.classList.toggle('dropdown__list_active');
}

dropdownValue.addEventListener('click', value);

dropdownItem.forEach(item => item.addEventListener('click', (evt) => {
	evt.preventDefault();
	dropdownList.classList.remove('dropdown__list_active');
	dropdownValue.textContent = item.textContent;
}));