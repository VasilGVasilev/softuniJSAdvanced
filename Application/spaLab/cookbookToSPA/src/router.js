// router will change the index view depending on the url.pathname

import { renderHome } from './pages/home.js';
import { renderLogin } from './pages/login.js';
import { render404 } from './pages/404.js'
import { renderRegister } from './pages/register.js'
import { renderCreate } from './pages/create.js'
import { renderLogout } from './pages/logout.js'

// instead of if else for each seaction show in router() below hideContent() use a dictionary
const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/create': renderCreate,
    '/logout': renderLogout
}

export function router(path){ // 2) use the path as a way to access routes object instead of if else and invoke the relevant to the path function -> goto login.js
    hideContent();
    // The boolean operators in JavaScript can return an operand, 
    // and not always a boolean result as in other languages.
    // The Logical OR operator (||) returns the value of its second operand, 
    // if the first one is falsy, otherwise the value of the first operand is returned.
    // you can also use ?? but it is only for null or undefined, while || is applicable to all falsy values
    const renderer = routes[path] || render404; // ONLY IN JS: add '|| function()' to catch renderer = undefined, since it is object or undefined 
    renderer();
}

function hideContent(){
    const mainContent = document.querySelector('.main-content');
    Array.from(mainContent.children).forEach(element => {
        element.style.display = 'none';
    });
}