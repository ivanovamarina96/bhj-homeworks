const element = document.getElementById('clicker__counter');
const picture = document.getElementById('cookie');
element.textContent = 0;
picture.onclick = function() {
	element.textContent++;
}
picture.onmousedown = function() {
	picture.style.width = '300px';
}
picture.onmouseup = function() {
	picture.style.width = '200px';
}