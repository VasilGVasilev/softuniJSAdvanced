import {router} from './router.js';
// show all nav btns
const guestNavigation = document.querySelector('#guest');
const userNavigation = document.querySelector('#user');
guestNavigation.style.display = 'inline';
userNavigation.style.display = 'inline';

const navigationElement = document.querySelector('.navigation');
navigationElement.addEventListener('click', (e)=>{
    e.preventDefault(); 
    if(e.target.tagName == 'A'){ //target anchors 
        let url = new URL(e.target.href); //to limit localhost:3030/index.html to / 

        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        
        router(url.pathname); // 1) take the href of the clicked <a> and send it to router ->goto router.js
    }
})