import { updateAuthState } from '../auth.js'

const registerSection = document.querySelector('.register');

export function renderRegister(){
    registerSection.style.display = 'block';
}

const registerForm = registerSection.querySelector('form'); //shortcut instead of 'document.' 
registerForm.addEventListener('submit', onSubmit);

async function onSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // not in object so that we control what gets send to the server
    // excluse rePass
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('rePass');

    try {
        if (email == '' || password == ''){
            throw new Error('All fields are required!');
        }
        if (password != repass){
            throw new Error('Passwords don\'t match!');
        }
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        let user = await response.json();
        sessionStorage.setItem('user', JSON.stringify(user));
        updateAuthState();

        if(response.ok == false){
            const error = await response.json();
            throw new Error(error.message)
        } 

    } catch (err) {
        alert(err.message)
    }

}


export function renderLogin(){
    loginSection.style.display = 'block';
}