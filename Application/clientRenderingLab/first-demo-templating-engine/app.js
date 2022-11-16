import {data} from './data.js';


start();
function start(){
    const main = document.querySelector('main');
    
    main.innerHTML = data.map(articleTemplate).join('');
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