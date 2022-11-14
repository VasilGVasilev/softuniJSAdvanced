// views
import { showCatalog } from './catalog.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
import { showCreate } from './create.js';

// utils
import { checkUserNav, onLogout } from './util.js';
import { render } from './domRender.js'


document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'catalogView': showCatalog,
    'loginView': showLogin,
    'registerView': showRegister,
    'createView': showCreate,
    'logoutView': onLogout
};

// start application 
checkUserNav();
goTo('catalogView');
// debugger;

function onNavigate(event) {
    if (event.target.tagName == 'A') {
        const viewName = event.target.id;
        if (goTo(viewName)){
            event.preventDefault();
        }

    }
}

function goTo(viewName){
    const view = sections[viewName]
    if (typeof view == 'function') {
        view({ // DEPENDANCY INJECTION is a design pattern in which an object or function receives other objects or functions that it depends on
            render, // just replaces <main> children with specific section
            goTo, // triggers view() which has an object render, goTo and checkUserNav to use in the relevant module
            checkUserNav
        });
        return true;
    } else {
        return  false;
    }
}
