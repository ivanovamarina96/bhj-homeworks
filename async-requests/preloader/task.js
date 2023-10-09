const loader = document.querySelector ('.loader')
const xhr = new XMLHttpRequest();
const parent = document.querySelector ('.item');
const bigBoss = document.getElementById('items');


xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.addEventListener ('readystatechange', ()=> {
    if (xhr.readyState == xhr.DONE) {
loader.classList.remove ('loader_active');
     const array = JSON.parse(xhr.responseText);
     const valute = array.response.Valute;
     keys = Object.keys(valute);
     
     for (let i = 0; i < keys.length; i++) {
        const code = document.createElement('div');
        code.classList.add ('item__code');
        const value = document.createElement('div');
        value.classList.add ('item__value');
        const currency = document.createElement('div');
        currency.classList.add ('item__currency');
        currency.textContent = 'руб.'
        code.textContent = valute[keys[i]].CharCode;
        value.textContent = valute[keys[i]].Value;
        const clone = parent.cloneNode (false);
        clone.insertAdjacentElement("beforeEnd", code);
        clone.insertAdjacentElement("beforeEnd",  value);
        clone.insertAdjacentElement("beforeEnd", currency);
        bigBoss.appendChild(clone);
        parent.remove ();
        
     }
    }
})
xhr.send(); 