import { showHome } from './home.js';
import { checkUserNav } from './util.js';
import { post } from './api.js';

const section = document.getElementById('loginView');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.remove();

export function showLogin(ctx) {
    ctx.render(section)
}

async function onSubmit(event, ctx) {
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    const data = await post('/users/login', {email, password});

    const userData = {
        email: data.email,
        accessToken: data.accessToken,
        id: data._id
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));
    checkUserNav();
    showHome();
}
