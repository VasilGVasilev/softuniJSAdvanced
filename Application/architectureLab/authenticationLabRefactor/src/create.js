import { post } from './api.js'
import { createSubmitHandler } from './util.js'

let ctx = null; // better solution with templating, but now top-level ctx variable;

const section = document.getElementById('create');
const form = section.querySelector('form');
createSubmitHandler(form, onSubmit); //(form to extract, callback(extracted data))
section.remove();


export function showCreate(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onSubmit({name, img, ingredients, steps}) { // callback(extracted data)
    //fetch
    await post('/data/recipes', {name, img, ingredients, steps})
    // render
    ctx.goTo('catalogView');
}

