import {html, render} from 'https://unpkg.com/lit-html?module'; //this is executed by browser

// html === createTemplate from first demo
// render === arrow function that createTemplate returns

const template = (name) => html`<h2>Hello there, ${name}</h2>`;

start();

function start(){
    const main = document.querySelector('main');

    const templateResult = template('Azis'); //that returns an object that cannot be attached directly to DOM -> use render
    
    render(templateResult, main);
}

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
