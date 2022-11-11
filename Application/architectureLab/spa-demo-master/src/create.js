import { post } from './api.js'
import { createSubmitHandler } from './util.js'

let ctx = null; // better solution with templating, but now top-level ctx variable;

const section = document.getElementById('createView');
const form = section.querySelector('form');
createSubmitHandler(form, onSubmit); //(form to extract, callback(extracted data))
section.remove();


export function showCreate(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onSubmit({title}) { // callback(extracted data)
    //fetch
    await post('/data/movies', {title});
    // render
    ctx.goTo('catalogBtn');
}