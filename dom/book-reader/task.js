const fontSize = [...document.querySelectorAll('.font-size')];
const controlColor = [...document.querySelector('.book__control_color').children];
const book = document.querySelector('.book');
const bookContent = document.querySelector ('.book__content');
const  controlBackground = [...document.querySelector('.book__control_background').children]
fontSize.forEach (element => {
	
	element.addEventListener('click', (evt) => {
	book.classList.remove('book_fs-big');
	book.classList.remove('book_fs-small');
	evt.preventDefault();
	if (element.className.includes('font-size_small')) {
		book.classList.add('book_fs-small')
	}
	if (element.className.includes('font-size_big')) {
		book.classList.add('book_fs-big')
	}
	
	for (let i = 0; i < fontSize.length; i++) {
			fontSize[i].classList.remove('font-size_active');
		
		}
		element.classList.toggle('font-size_active');

})
})

controlColor.forEach (index => {

index.addEventListener('click', (evt) =>{
	evt.preventDefault();
	for (let ind = 0; ind < controlColor.length; ind++) {
		controlColor[ind].classList.remove('color_active');
	
	}
	index.classList.toggle('color_active');
	bookContent.style.color = index.getAttribute ('data-text-color');
})


}
	
	)

	controlBackground.forEach (unit => {

		unit.addEventListener('click', (evt) =>{
			evt.preventDefault();
			for (let a = 0; a < controlColor.length; a++) {
				controlBackground[a].classList.remove('color_active');
			
			}
			unit.classList.toggle('color_active');
			document.body.style.background = unit.getAttribute ('data-bg-color');
		})
		
		
		}
			
			)