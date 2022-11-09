import { homePage } from "./home.js";
import { showView, updateNav } from "./util.js";

const section = document.querySelector('#form-sign-up');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function registerPage(){
    showView(section);
}

async function onSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword')

    if (email == '' || password == ''){
        throw new Error('All fields are required!');
    }
    if (password != repass){
        throw new Error('Passwords don\'t match!');
    }

    await register(email, password); //fetch

    form.reset();
    updateNav(); //render
    homePage(); //render
}

async function register(email, password){
    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const user = await response.json();
        sessionStorage.setItem('user', JSON.stringify(user));
        
    } catch (error) {
        alert(error.message);
        throw err; //so that it can be transfered outside of the login() function and have actual use
    }
}