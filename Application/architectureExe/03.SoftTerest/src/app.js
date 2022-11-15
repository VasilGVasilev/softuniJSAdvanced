// import * as api from './api/users.js' //if you just want to load file no need for a specific file to be named

const main = document.querySelector('main');

const homePage = document.getElementById('homePage');
const registerPage = document.getElementById('registerPage');
const loginPage = document.getElementById('loginPage');
const catalogPage = document.getElementById('dashboard-holder');
const detailsPage = document.getElementById('detailsPage');
const createPage = document.getElementById('createPage');

document.getElementById('views').remove(); //there is a display:none to hide the initial render before sections stored to vars and removed from DOM

const links = {
    '/': homePage,
    '/catalog': catalogPage,
    '/login': loginPage,
    '/register': registerPage,
    '/details': detailsPage,
    '/create': createPage
};

window.showSection = (name) => {
    const section = links[name];
    main.replaceChildren(section);
}