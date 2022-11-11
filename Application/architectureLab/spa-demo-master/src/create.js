import { post } from './api.js'

let ctx = null; // better solution with templating, but now top-level ctx variable;

const section = document.getElementById('createView');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.remove();


export function showCreate(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const title = formData.get('title').trim();

    await post('/data/movies', {title});
    // redirect error so that in the case of create the execution will stop at await response from request() and not load showCatalog();
    // there should be another trycatch to catch the error returned by await request()

        // A JavaScript error in a part of the UI shouldn’t break the whole app. 
        // To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.
        // Error boundaries are React components that catch JavaScript errors anywhere 
        // in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    ctx.goTo('catalogBtn');
}