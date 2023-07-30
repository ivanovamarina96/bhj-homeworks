const reval = [...document.querySelectorAll('.reveal')];

window.addEventListener('scroll', () => {
		for (let i = 0; i < reval.length; i++) {
			let {
				top,
				bottom
			} = reval[i].getBoundingClientRect();
			if (top > 0 || bottom > 0) {
				reval[i].classList.add('reveal_active')
			}
			if (bottom < 0) {
				reval[i].classList.remove('reveal_active')
			}
		}
	}

)