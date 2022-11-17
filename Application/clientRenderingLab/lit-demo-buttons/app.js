import { render } from '../node_modules/lit-html/lit-html.js';
import { articleTemplate } from './views/article.js';
import { data } from './data.js';
import { formTemplate } from './views/form.js';


const main = document.querySelector('main');
const header = document.querySelector('header');

start();

function start(){
    update();
}

function update(){ // in fact it renders
    render(formTemplate(onSubmit), header);
    render(data.map(articleTemplate.bind(null, onDelete)), main);
}

function onDelete(index){
    data.splice(index, 1);
    update();
}


function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const article = {
        title: formData.get('title'),
        content: formData.get('content'),
        author: formData.get('author')
    }
    event.target.reset();
    data.push(article);

    update();
}