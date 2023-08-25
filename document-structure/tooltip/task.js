const hasTooltip = [...document.querySelectorAll('.has-tooltip')];
const div = document.createElement('div');
div.classList.add('tooltip');
hasTooltip.forEach((element) => element.addEventListener('click', (e) => {
	e.preventDefault();
	let coords = element.getBoundingClientRect();
	div.classList.add('tooltip_active')
	div.innerHTML = element.getAttribute('title');
	div.style.top = coords.bottom + "px";
	div.style.left = coords.left + "px";
	element.insertAdjacentElement("beforeEnd", div)
}))