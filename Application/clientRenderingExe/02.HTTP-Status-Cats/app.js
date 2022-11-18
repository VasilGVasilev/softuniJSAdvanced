import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { cats } from './catSeeder.js'

const allCats = document.getElementById('allCats');

start();
function start(){

    const catsTemplate = (cats) => html`
    <ul>
    ${cats.map(ulTemplate.bind(null, handleClick))}
    </ul>
    `
    const ulTemplate = (handleClick, cat) => html`<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${handleClick}>Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
    </li>`


    let result = catsTemplate(cats)
    render(result, allCats)
}

function handleClick(e){
    let divCat = e.target.parentElement.children[1]
    divCat.style.display = 'block';
}
