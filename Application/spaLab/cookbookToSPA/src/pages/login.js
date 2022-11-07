import { updateAuthState } from '../auth.js'
import { renderHome } from './home.js'

const loginSection = document.querySelector('.login'); 
// 3) industry practice 'LAZY LOADING' - store values outside export function which is triggered with every click
    // the same goes with eventListeners -> better outside function or build a structure that attaches and detaches them
const loginForm = loginSection.querySelector('form'); //shortcut instead of 'document.' 

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password')

    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(res=>res.json())
        .then(user => {
            sessionStorage.setItem('user', JSON.stringify(user));
            updateAuthState(); // 4) update authentication State based on sessionStorage -> goto home.js
            alert('successfully logged in')
            renderHome();
        })
})

export function renderLogin(){
    loginSection.style.display = 'block';
}