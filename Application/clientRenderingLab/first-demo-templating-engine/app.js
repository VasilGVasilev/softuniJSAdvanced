import {data, nav as links} from './data.js';
import { createTemplate } from './engine.js'

start();
async function start(){
    const main = document.querySelector('main');
    const nav = document.querySelector('nav ul');

    const articleTemplateAsString = await(await fetch('./templates/article.html')).text(); //double due to doubly nested promise response and data
    const articleTemplate = createTemplate(articleTemplateAsString);
    main.innerHTML = data.map(articleTemplate).join('');

    const navTemplateAsString = await(await fetch('./templates/nav.html')).text(); //double due to doubly nested promise response and data
    const navTemplate = createTemplate(navTemplateAsString);
    nav.innerHTML = links.map(navTemplate).join('');
}
