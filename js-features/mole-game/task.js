const getHole = index => document.getElementById(`hole${index}`);
const statusHole = document.getElementById('dead');
const lostHole = document.getElementById('lost');


for (let index = 1; index < 9; index++) {
	getHole(index).onclick = function() {
		if (getHole(index).className.includes('hole_has-mole')) {
			statusHole.textContent = parseInt(statusHole.textContent) + 1;
		} else {
			lostHole.textContent = parseInt(lostHole.textContent) + 1;
		}
	}
}

setInterval(() => {
	if (statusHole.textContent == 10) {
		alert('Победа');
		statusHole.textContent = 0;
		lostHole.textContent = 0;


	}
	if (lostHole.textContent == 5) {
		alert('Поражение');
		statusHole.textContent = 0;
		lostHole.textContent = 0;
	}
}, 100)