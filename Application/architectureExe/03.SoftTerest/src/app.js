// import * as api from './api/users.js' //if you just want to load file no need for a specific file to be named

import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

const main = document.querySelector('main');
document.getElementById('views').remove(); //there is a display:none to hide the initial render before sections stored to vars and removed from DOM

const links = {
    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/catalog': showCatalog,
    '/details': showDetails,
    '/create': showCreate
};

window.showSection = (name) => {
    const section = links[name];
    main.replaceChildren(section);
}