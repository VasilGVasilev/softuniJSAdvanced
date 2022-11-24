import page from '../node_modules/page/page.mjs';
import { updateNav } from './middlewares/navbar.js';
import { decorateContext } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';


// separation of concerns
page(addSession) // checks localStorage user
page(updateNav) //navigation is dealt with separately from main section depending on localStorage info which in itelf is abstracted
page(decorateContext) //rendering functionality 
page('/', homePage)
page('/login', loginPage)

page.start();