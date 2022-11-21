import page from './node_modules/page/page.mjs';
import { loginView } from './views/login.js'
import { catalogView } from './views/catalog.js';
import { registerView } from './views/register.js';
import { logout } from './views/logout.js';
import { createView } from './views/create.js';
import { myPublicationsView } from './views/my-publications.js';
import { detailsView } from './views/details.js';

page('/my-publications', myPublicationsView)
page('/create', createView)
page('/register', registerView)
page('/catalog', catalogView)
page('/login', loginView)
page('/details/:detailsId', detailsView)
page.start();

// logout
document.getElementById('logoutBtn').addEventListener('click', logout);

// show user/guest navbat
export const updateInfo = () => {
    let userDiv = document.getElementById('user');
    let guestDiv = document.getElementById('guest');

    if(localStorage.length == 0){
        userDiv.style.display = 'none';
        guestDiv.style.display = 'inline';
    } else {
        userDiv.style.display = 'inline';
        guestDiv.style.display = 'none';
    }
}
updateInfo();
