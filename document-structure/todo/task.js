const tasksList = document.querySelector('.tasks__list');
const form = document.querySelector('.tasks__control');
const tasksInput = document.querySelector('.tasks__input')


form.addEventListener('submit', (e) => {
	e.preventDefault();
	const parent = document.createElement('div');
	parent.classList.add('task');
	tasksList.insertAdjacentElement("afterBegin", parent);
	const child = document.createElement('div');
	child.classList.add('task__title');
	child.textContent = tasksInput.value;

	if (child.textContent == tasksInput.value) {
		tasksInput.value = '';
	}
	parent.insertAdjacentElement("beforeEnd", child);
	parent.insertAdjacentHTML('beforeEnd', '<a href="#" class="task__remove">&times;</a>');
	const removeTask = document.querySelectorAll('.task__remove');
	removeTask.forEach((element) => {
		element.addEventListener('click', (e) => {
			e.preventDefault();
			element.parentElement.remove();
		})
	})


})