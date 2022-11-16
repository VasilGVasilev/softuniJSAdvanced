// import * as api from './api/users.js' //if you just want to load file no need for a specific file to be named

import { logout } from "./api/users.js";
import { intialize } from "./router.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

document.getElementById('views').remove(); //there is a display:none to hide the initial render before sections stored to vars and removed from DOM

const links = {
    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/catalog': showCatalog,
    '/details': showDetails,
    '/create': showCreate,
    '/logout': logout
};
const router = intialize(links); // router has two parts see router.js


// start application in homeView
router.goTo('/');


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
