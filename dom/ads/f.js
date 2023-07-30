const rotator = document.querySelector('.rotator');
const rotatorCase = [...rotator.children]
let time







for (let i = 0; i < rotatorCase.length; i++) {
   
   rotatorCase[i].style.color = rotatorCase[i].getAttribute('data-color');
   
   setInterval(() => {
      time = rotatorCase[i].getAttribute('data-speed');
   for (let element of rotatorCase) {
   if (element.className.includes ('rotator__case_active')) {
   element.classList.remove ('rotator__case_active');
   element.nextElementSibling.classList.add('rotator__case_active');
   return
   }
   
   
   else if (rotator.lastElementChild.className.includes ('rotator__case_active')) {
   rotator.firstElementChild.classList.add('rotator__case_active');
   rotator.lastElementChild.classList.remove('rotator__case_active');
   return
   }
   
   
   }
   
   
   
   }, time);
}