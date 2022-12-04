import page from './node_modules/page/page.mjs';
import { updateNav } from './middlewares/navbar.js';
import { decorateContext } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/user.js';
import { dashboardPage } from './views/dashboard.js';
import { createPage } from './views/create.js';
import { preload } from './middlewares/preload.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

page(addSession); 
page(updateNav); 
page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logout);
page('/dashboard', dashboardPage);
page('/create', createPage);
page('/details/:id', preload, detailsPage)
page('/edit/:id', preload, editPage)

page.start();