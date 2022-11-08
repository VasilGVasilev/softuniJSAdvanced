import { showDetails } from "./details.js";

const section = document.getElementById('homeView'); //module closure!
section.querySelector('div.topic-title').addEventListener('click', showDetails);
let form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.querySelector('[name="cancel"]').addEventListener('click', clearForm);
const container = section.querySelector('.topic-container');

section.remove(); // thus, importing showDetails see (1) underneath

export async function showHome(ev){ //async due to rendering of data fetched from server
    ev && ev.preventDefault(); //a conditional that checks for ev existing before calling ev.preventDefault() ALSO ev?.preventDefualt();
    
    document.getElementById('main').replaceChildren('Loading...'); //it is async so a slight delay of fetching
    
    const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);
    const posts = await res.json();
    container.replaceChildren(...Object.values(posts).map(createPostReview))
    
    document.getElementById('main').replaceChildren(section);
}

function createPostReview(post){
    const element = document.createElement('div');
    element.className = 'topic-name-wrapper';
    element.innerHTML = `
    <div class="topic-name">
        <a href="/details" class="normal" id="${post._id}">
            <h2>${post.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${post.dateCreated}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                </div>
            </div>


        </div>
    </div>
    `
    return element;
}

async function onSubmit(ev){
    ev.preventDefault();
    const formData = new FormData(form);
    // console.log(...formData.entries());
    const title = formData.get('topicName');
    const username = formData.get('username');
    const content = formData.get('postText');

    try {
        const respone = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({//only three elements excepted to avoid injection see. (2)
                title,
                username,
                content,
                dateCreated: new Date()
            })
        })

        if(respone.ok != true){
            const error = await respone.json();
            throw new Error(error.message)
        }
         
        form.reset();
        showHome();
    } catch (error) {
        alert(error.message)
    }
}

function clearForm(){
    form.reset();
}

// (1) -> app depends on home, home depends on details
// home takes the section from app DOM, adds it to main and removes it from DOM
// the above predisposes that details eventHandler is attached to the section stored in top-level INITIALISATION of home module, not the original DOM section below <main>, becuase it was removed from there
// details takes the section from home (not 'app' DOM), adds it to main and removes it from DOM

// (2) -> you can make another field in form through the DOM
// and it will be sent as in the body of the fetch request
// and if this body is general (body: JSON.stringify(body)) and not with specific elements (body: JSON.stringify({element1, element2}))
// you will be prone to a XSS injection 