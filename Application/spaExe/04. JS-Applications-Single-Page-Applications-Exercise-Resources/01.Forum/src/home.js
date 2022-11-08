import { showDetails } from "./details.js";

const section = document.getElementById('homeView');
section.querySelector('div.topic-title').addEventListener('click', showDetails);
let form = section.querySelector('form');
form.addEventListener('submit', onSubmit);


section.remove(); // thus, importing showDetails see (1) underneath

export function showHome(ev){
    ev && ev.preventDefault(); //a conditional that checks for ev existing before calling ev.preventDefault() ALSO ev?.preventDefualt();
    document.getElementById('main').replaceChildren(section);
}

async function onSubmit(ev){
    ev.preventDefault();
    const formData = new FormData(form);
}

// (1) -> app depends on home, home depends on details
// home takes the section from app DOM, adds it to main and removes it from DOM
// the above predisposes that details eventHandler is attached to the section stored in top-level INITIALISATION of home module, not the original DOM section below <main>, becuase it was removed from there
// details takes the section from home (not 'app' DOM), adds it to main and removes it from DOM