// import * as api from './api/users.js' //if you just want to load file no need for a specific file to be named

const main = document.querySelector('main');

const homePage = document.getElementById('homePage');
homePage.remove();

window.showSection = () => {
    main.appendChild(homePage);
}