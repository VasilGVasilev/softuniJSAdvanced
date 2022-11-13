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
        view({
            render, //object with method render that will be called through ctx.render() in catalog for example with showCatalog(ctx){ctx.redner()}
            goTo, //so that you can redirect when you need -> create.js to catalog.js ALSO NOT INFINITE LOOP BECAUSE IT IS NOT CALLED if view({ goTo() }), infinite
            checkUserNav
        });
        return true;
    } else {
        return  false;
    }
}
