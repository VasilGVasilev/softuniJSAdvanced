import {render, html} from './node_modules/lit-html/lit-html.js'



const form = document.querySelector('form');
const root = document.getElementById('root');

form.addEventListener('submit', onSubmit);

let townsArray = [];

function onSubmit(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let towns = formData.get('towns');
    townsArray = towns.split(', ');
    let ulTemplate = (towns) => html` 
    <ul>
    ${towns.map(t=>html`<li>${t}</li>`)}
    </ul>
    `
// in ulTemplate you can omit '(towns) =>' but more in handy to be an arrow function
// however, html`` is a function in itself so if in it you have a var, the value will be sought after in outer scope:

// let ulTemplate = html` 
//     <ul>
//     ${townsArray.map(t=>html`<li>${t}</li>`)}
//     </ul>
//     `
    
    render(ulTemplate(townsArray), root);
}
