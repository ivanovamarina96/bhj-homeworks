const reval = [...document.querySelectorAll('.reveal')];

reval.forEach (element => {
	window.addEventListener('scroll', () => {
		
			let {
				top,
				bottom
			} = element.getBoundingClientRect();
			if (top > 0 || bottom > 0) {
				element.classList.add('reveal_active')
			}
			if (bottom < 0 || top > window.innerHeight) {
				element.classList.remove('reveal_active')
			}
		})	

})


