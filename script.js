const menu = document.querySelector('.menu0');

menu.addEventListener('click', function()  {
     alert('you are already on the main page')
})

const menu1 = document.querySelector('#menu')
const menu2 = document.querySelector('#tg1')
const menu3 = document.querySelector('#menu111')
const menu4 = document.querySelector('#menu111')
const menu5 = document.querySelector('#g')
const menu6 = document.querySelector('#f')
const menu7 = document.querySelector('#h')
const menu8 = document.querySelector('#ddd')
menu1.addEventListener('click', () => {
     if(menu2.classList.contains('tg1') == true) {

          menu2.classList.remove('tg1');
          menu4.classList.remove('menu111'); 
          menu8.classList.remove('ddd');
          menu5.classList.remove('gs');
          menu7.classList.remove('hs');
          menu6.classList.remove('psss');
     } else {
          menu2.classList.add('tg1');
          menu4.classList.add('menu111'); 
          menu8.classList.add('ddd');
          menu5.classList.add('gs');
          menu7.classList.add('hs');
          menu6.classList.add('psss');
     }
})