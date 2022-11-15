// import * as api from './api/users.js' //if you just want to load file no need for a specific file to be named

import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

const main = document.querySelector('main');
document.getElementById('views').remove(); //there is a display:none to hide the initial render before sections stored to vars and removed from DOM

document.querySelector('nav').addEventListener('click', onNavigate);

const links = {
    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/catalog': showCatalog,
    '/details': showDetails,
    '/create': showCreate
};

const context = {
    showSection
}

function showSection(section){
    main.replaceChildren(section);
}

function onNavigate(event){
    let target = event.target;
    if(target.tagName == 'IMG'){ //bad html <a><img></a> <a> is not deepest
        target = target.parentElement;
    }
    
    if (target.tagName == 'A'){ //better html <li><a></a></li> <a> is deepest
        event.preventDefault();
        const url = new URL(target.href);
        const handler = links[url.pathname];
        if (typeof handler == 'function'){
            handler(context)
        }
    }
}

// order of calling 
// window.displayHome -> showHome(context)
// showHome(context) -> context.showSection(section);
// context.showSection(section) -> showSection(section)
// showSection(section) -> main.replaceChidlren(section)

// displayHome calls showHome from home.js
// we put context obj as a argument in showHome
// showHome uses this argument and accesses its only method -> showSection
// context.showSection(section) is written so that it is called with sections as an argument
// showSection is executed -> main.replaceChildren with the parameter section passed in

// dependancy injection eliminating the need to import/export functionlaity
// THUS:
// we make an object/context/ with reusable functions
// pass it in to every instance that will use these functions
