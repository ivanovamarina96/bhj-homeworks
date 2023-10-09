const xhr = new XMLHttpRequest ();
xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
const title = document.querySelector('.poll__title');
const parent = document.querySelector ('.poll__answers');
xhr.addEventListener ('readystatechange', ()=> {
    if (xhr.readyState == xhr.DONE) {
        const obj = JSON.parse(xhr.responseText);
        const answers = obj.data.answers;
        title.textContent = obj.data.title;
        for (let i = 0; i < answers.length; i++) {
            let button = document.createElement ('button');
            button.classList.add ('poll__answer');
            button.textContent = answers[i];
            parent.append (button);
            button.style.marginLeft = '5px';
            button.addEventListener ('click', ()=> {
                alert ('Спасибо, ваш голос засчитан!')
               }) 
            
        }
       
    }
})
xhr.send(); 