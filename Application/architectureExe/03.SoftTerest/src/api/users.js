import { get, post } from './api.js'

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
}


export async function login(email, password){
    const user = await post(endpoints.login, {email, password}) //due to await if error -> throw exception and function stops executing
    localStorage.setItem('user', JSON.stringify(user));
}
export async function register(email, password){
    const user = await post(endpoints.register, {email, password}) 
    localStorage.setItem('user', JSON.stringify(user));
}
export async function logout(ctx){
    get(endpoints.logout);
    localStorage.removeItem('user');
    ctx.updateNav();
    ctx.goTo('/')
}