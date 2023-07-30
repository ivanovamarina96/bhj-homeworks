const fontSize = [...document.querySelectorAll('.font-size')];
const book = document.querySelector('.book')
for (let i = 0; i < fontSize.length; i++) {
	fontSize[i].addEventListener('click', (evt) => {
		evt.preventDefault();
		fontSize[i].classList.add('font-size_active');
		if (fontSize[i].className.includes('font-size_small')) {
			book.classList.toggle('book_fs-small')
		}
		if (fontSize[i].className.includes('font-size_big')) {
			book.classList.toggle('book_fs-big')
		}
		if (!fontSize[i].className.includes('font-size_big') && !fontSize[i].className.includes('font-size_small')) {
			book.classList.remove('book_fs-big');
			book.classList.remove('book_fs-small')

		}



		for (let index = 0; index < fontSize.length; index++) {
			if (fontSize.indexOf(fontSize[index]) != fontSize.indexOf(fontSize[i])) {
				fontSize[index].classList.remove('font-size_active');

			}
		}

	})

}