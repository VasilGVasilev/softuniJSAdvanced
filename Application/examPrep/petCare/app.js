import page from './node_modules/page/page.mjs';
import { updateNav } from './middlewares/navbar.js';
import { decorateContext } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
// import { catalogPage } from './views/catalog.js';
// import { createPage } from './views/create.js';
// import { detailsPage } from './views/details.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/user.js';
// import { preload }  from "./middlewares/preload.js"



// separation of concerns
page(addSession) // checks localStorage user
page(updateNav) //navigation is dealt with separately from main section depending on localStorage info which in itelf is abstracted
page(decorateContext) //rendering functionality 
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
// page('/catalog', catalogPage)
// page('/create', createPage)
// page('/catalog/:id', preload, detailsPage)

page('/logout', logout)

page.start();