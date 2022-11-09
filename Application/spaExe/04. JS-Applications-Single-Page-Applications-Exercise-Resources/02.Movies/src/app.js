// [ ] improve HTML structure
// [ ] create app.js module
// [ ] create util.js containing hide and display of view
// [ ] placeholders for all views

// implement views
// - create request logic
// - DOM manipulation logic
// [ ] catalog
// [ ] login
// [ ] register
// [ ] create
// [ ] details
// [ ] like
// [ ] edit
// [ ] delete

import { homePage } from './home.js'
import { registerPage } from './register.js'
import { loginPage } from './login.js'
import { createPage } from './create.js'
import { updateNav } from './util.js'

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': createPage
};

// navbar and create have same business logic, just two different places in HTML
document.querySelector('nav').addEventListener('click', onNavigate);// navbar clickability
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e){
    e.preventDefault();
    if(e.target.tagName == 'A' && e.target.href) { //click valid only on <a> and <a>'s having href, thus, excluding 'welcome, guest'
        const url = new URL(e.target.href)
        let view = routes[url.pathname];
        if (typeof view == 'function'){
            view();
        }
    }
}

function logout(){
    sessionStorage.clear();
    updateNav();
}


// Start application in catalog/homePage/ view -> call homePage (which will render view and fetch data to be rendered) and updateNavBar user||guest
updateNav();
homePage(); 
    // initally, app calls homePage and homePage: 1) renders hide/show funcs from utils.js and 2) fetches data to fill in with
    // after that: USER/GUEST can call loginPage() from app.js navbar, loginPage() calls showView() from util.js
    // showView() is in login.js and login.js module is a closure that store relevant for showView(section) section in a top-level variable
    // then you attach eventListeners for the possible clickable events ensuing from logging in and redirect to homePage() and update nav with updateNav();


// GENERAL COMMENTS:

// Loading module from  was blocked ERROR
// when first loading > easy solution: change src attributies in index.html to absolute path src="./src/app.js"
// why happeing > because you load liveserver not on current directory but several directories higher
// so it starts to search for the src, hrefs there for example Application JS folder and it does not find them
// better than aboslute path is relative -> solution: save in git, open new folder -> current directory and RELAX :D

// window.updateNav = updateNav; !!!! HACK to test in browser just functionality without rendering

// if you set routes object and import its functions without them being ready, thus, empty modules -> errors that stall the debugging:
// Uncaught SyntaxError: ambiguous indirect export: loginPage || Uncaught ReferenceError: homePage is not defined