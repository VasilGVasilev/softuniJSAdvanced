import { post } from './api.js';
import { createSubmitHandler } from './util.js';

let ctx = null;

const section = document.getElementById('loginView');
const form = section.querySelector('form');
createSubmitHandler(form, onSubmit)
section.remove();

export function showLogin(inCtx) {
    ctx = inCtx;
    ctx.render(section)
}

async function onSubmit({email, password}) {

    const data = await post('/users/login', {email, password});

    const userData = {
        email: data.email,
        accessToken: data.accessToken,
        id: data._id
    };

    sessionStorage.setItem('userData', JSON.stringify(userData));
    ctx.checkUserNav();
    ctx.goTo('homeBtn');
}
