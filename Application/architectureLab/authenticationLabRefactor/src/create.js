// import { post } from './api.js'
// import { createSubmitHandler } from './util.js'

let ctx = null; // better solution with templating, but now top-level ctx variable;

const section = document.getElementById('create');
// const form = section.querySelector('form');
// createSubmitHandler(form, onSubmit); //(form to extract, callback(extracted data))
section.remove();

// NOTICE how eventHandler createSubmitHandler() is top-level from renderer showCreate(), because if handler is inside renderer, it will be triggered every time it is rednered
// it is bad practice to overpopulate with eventHandlers

export function showCreate(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

// async function onSubmit({title}) { // callback(extracted data)
//     //fetch
//     await post('/data/movies', {title});
//     // render
//     ctx.goTo('catalogBtn');
// }