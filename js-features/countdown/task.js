const element = document.getElementById('timer');
element.textContent = '60';

let timerId = setInterval(() => {
	if (element.textContent > 0) {
		element.textContent = parseInt(element.textContent) - 1;
	} else {
		clearInterval(timerId);
		alert('Вы победили в конкурсе');
	}
}, 1000)