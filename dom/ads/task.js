const rotator = document.querySelector('.rotator');
const rotatorCase = [...rotator.children]
let counter = 0;
let timer = 1000;


let timerId = setTimeout(function time() {
	if (counter < rotatorCase.length) {
		rotatorCase.forEach(element => {
			element.classList.remove('rotator__case_active')
		})
		rotatorCase[counter].classList.add('rotator__case_active');
		rotatorCase[counter].style.color = rotatorCase[counter].getAttribute('data-color');
		timer = rotatorCase[counter].getAttribute('data-speed');
		counter++;

	} else {
		counter = 0;
	}

	timerId = setTimeout(time, timer)

}, timer)