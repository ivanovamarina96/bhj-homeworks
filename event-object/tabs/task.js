const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
for (let i = 0; i < 3; i++) {
	tab[i].addEventListener('click', () => {
		tab[i].classList.add('tab_active');
		tabContent[i].classList.add('tab__content_active');

		for (let index = 0; index < 3; index++) {
			if (tab.indexOf(tab[index]) != tab.indexOf(tab[i])) {
				tab[index].classList.remove('tab_active');
				tabContent[index].classList.remove('tab__content_active');
			}
		}

	})

}