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

// import { homePage } from './home.js'
// import { registerPage } from './register.js'
// import { loginPage } from './login.js'
// import { createPage } from './create.js'
import { updateNav } from './util.js'

// const routes = {
//     '/': homePage,
//     '/login': loginPage,
//     '/logout': logout,
//     '/register': registerPage,
//     '/create': createPage
// };

// document.querySelector('nav').addEventListener('click', onNavigate);// navbar clickability
// document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

// function onNavigate(e){
//     e.preventDefault();
//     if(e.target.tagName == 'A' && e.target.href) { //click valid only on <a> and <a>'s having href, thus, excluding 'welcome, guest'
//         const url = new URL(e.target.href)
//         let view = routes[url.pathname];
//         if (typeof view == 'function'){
//             view();
//         }
//     }
// }

window.updateNav = updateNav;

// Start application in catalog/homePage/ view -> call homePage (which will render view and fetch data to be rendered) and updateNavBar user||guest
//  