const tasksList = document.querySelector('.tasks__list');
const form = document.querySelector('.tasks__control');
const tasksInput = document.querySelector('.tasks__input')


form.addEventListener('submit', (e) => {
	e.preventDefault();
	const parent = document.createElement('div');
	tasksList.insertAdjacentElement("afterBegin", parent);
	const child = document.createElement('div');
	child.classList.add('task__title');
	child.textContent = tasksInput.value.trim();
	tasksInput.value = '';
	if (child.textContent.length > 0) {
	parent.insertAdjacentElement("beforeEnd", child);
	parent.insertAdjacentHTML('beforeEnd', '<a href="#" class="task__remove">&times;</a>');
	parent.classList.add('task');
	}

	parent.children[1].addEventListener('click', (e) => {
		e.preventDefault();
		parent.remove();
	})


})