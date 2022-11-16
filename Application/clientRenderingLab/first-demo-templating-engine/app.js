import {data, nav as links} from './data.js';


start();
function start(){
    const main = document.querySelector('main');
    const nav = document.querySelector('nav ul');
    main.innerHTML = data.map(articleTemplate).join('');
    nav.innerHTML = links.map(navTemplate).join('');
}

function articleTemplate(article){
    return `
    <article>
    <h2>${article.title}</h2>
    <div class="content">
        <p>
            ${article.content}
        </p>
    </div>
    <footer>Author: ${article.author}</footer>
    </article>`
}

function navTemplate(nav){
    return `<li><a href="${nav.href}">${nav.label}</a></li>`;
}