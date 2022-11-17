import { render } from '../node_modules/lit-html/lit-html.js';
import { articleTemplate } from './article.js';
import { data } from './data.js';


start();

function start(){
    const main = document.querySelector('main');

    render(data.map(a => articleTemplate(a, onAlert)), main)
}
