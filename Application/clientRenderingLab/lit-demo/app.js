import { html, render } from 'https://unpkg.com/lit-html?module'; //this is executed by browser

import { data } from './data.js';

const templateArticle = (article) => html`
<article>
<h2>${article.title}</h2> 
<div class="content">
<p>${article.content}</p>
</div>
<footer>Author: ${article.author}</footer>
</article>`;

start();

function start(){
    const main = document.querySelector('main');

    // render is not appendChild, more like replaceChildren so it lit-html puts only its latest input, but doesnt replace hardcoded html
    render(data.map(templateArticle), main)
}

// you create the template and put in e to use it later
// for key.value pairing article.title etc when accessing data with array of objects
// use data.map goes through each object and the (article) => article.title methods fills in the gaps






// html === createTemplate from first demo
// render === arrow function that createTemplate returns



// const name = 'Peter'
// const age = '19'

// greet`I'm ${name}. I'm ${age} years old.` //`` is like ()

// function greet(){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }

// >> Array(3) [ "I'm ", ". I'm ", " years old." ]
// >> Peter 
// >> 19

// template object:
// strings array: template engine's first argument divides the original unaltered string in chuncks that surround the specific custamizable strings
// values array: other arguments are the custamizable string
