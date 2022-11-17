import { html, render } from 'https://unpkg.com/lit-html?module'; //this is executed by browser
import { articleTemplate } from './article.js';
import { data } from './data.js';

const timerTemplate = (time) => html`<h3>${time.hours}:${time.minutes}:${time.seconds}</h3>`

const greetingTemplate = (name, count) => html`<h1>Hello there, ${name}. Clicked ${count}`;



start();

function start(){
    document.getElementById('reloadBtn').addEventListener('click', onClick);

    const main = document.querySelector('main');

    setInterval(updateTime, 1000);
    // render is not appendChild, more like replaceChildren so it lit-html puts only its latest input, but doesnt replace hardcoded html
    render(data.map(articleTemplate), main)
}

function updateTime(){
    const now = new Date();
    const time = {
        hours: now.getHours(),
        minutes: ('0' + now.getMinutes()).slice(-2),
        seconds: ('0' + now.getSeconds()).slice(-2)
    }
    render(timerTemplate(time), document.querySelector('#timer'));
}

function onClick(){
    const header = document.querySelector('header');
    render(greetingTemplate('Peter', 1), header)
}

// every time we click on reloadBtn we create new element 
// via greetingTemplate and render it to the header
// but lit-html compares what we try to render and what is already rendered
// there is no difference => no update so DOM not congested unnecessarily







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
