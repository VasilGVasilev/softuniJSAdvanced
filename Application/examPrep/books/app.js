import page from './node_modules/page/page.mjs';
import { updateNav } from './middlewares/navbar.js';
import { decorateContext } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/user.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { preload } from './middlewares/preload.js';
import { editPage } from './views/edit.js';
import { myBooksPage } from './views/mybooks.js';

page(addSession) 
page(updateNav) 
page(decorateContext)
page('/login', loginPage)
page('/register', registerPage);
page('/logout', logout)
page('/create', createPage)
page('/dashboard', dashboardPage)
page('/details/:id', preload, detailsPage)
page('/edit/:id', preload, editPage)
page('/mybooks', myBooksPage)

page.start()