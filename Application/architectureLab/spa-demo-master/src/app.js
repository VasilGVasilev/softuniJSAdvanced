// views
import { showHome } from './home.js';
import { showCatalog } from './catalog.js';
import { showAbout } from './about.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
import { showCreate } from './create.js';

// utils
import { checkUserNav, onLogout } from './util.js';
import { render } from './domRender.js'

// app.js content:
    // routing table
    // navigation
    // ctx(dom, nav, session)

// sampleView.js
    // init (top-level) -> dom refs
    //                  -> event handlers
    // activate (ctx)
    // view control (-> event handler) 


document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'homeBtn': showHome,
    'catalogBtn': showCatalog,
    'aboutBtn': showAbout,
    'loginBtn': showLogin,
    'registerBtn': showRegister,
    'createBtn': showCreate,
    'logoutBtn': onLogout
};

// start application 
checkUserNav();
goTo('homeBtn');
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
            render, //object with method render that will be called through ctx.render() in catalog for example with showCatalog(ctx){ctx.redner()}
            goTo, //so that you can redirect when you need -> create.js to catalog.js ALSO NOT INFINITE LOOP BECAUSE IT IS NOT CALLED if view({ goTo() }), infinite
            checkUserNav
        });
        return true;
    } else {
        return  false;
    }
}
