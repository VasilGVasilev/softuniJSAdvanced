import { homePage } from "./home.js";
import { showView, updateNav } from "./util.js";

const section = document.querySelector('#form-login');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function loginPage(){
    showView(section);
}

async function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password); //fetch

    form.reset();
    updateNav(); //render
    homePage(); //render
}

async function login(email, password){
    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const user = await res.json();
        sessionStorage.setItem('user', JSON.stringify(user));
        
    } catch (error) {
        alert(error.message);
        throw err; //so that it can be transfered outside of the login() function and have actual use
    }
}