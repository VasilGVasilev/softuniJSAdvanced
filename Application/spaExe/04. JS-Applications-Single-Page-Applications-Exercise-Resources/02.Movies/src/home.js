import { showView, spinner } from "./util.js";
import { detailsPage } from "./details.js"

const section = document.querySelector('#home-page');
const catalog = section.querySelector('#movie .card-deck.d-flex.justify-content-center'); // place . instead of space in names so that it does not search in subdiv

export function homePage(){
    showView(section); //render initial view
    displayMovies(); //fetch data + render 
}



async function displayMovies(){

    catalog.replaceChildren(spinner()); //render

    const movies = await getMovies(); //fetch

    catalog.replaceChildren(...movies.map(createMoviePreview)); //render

    catalog.addEventListener('click', showMoreDetails) //render
}




// ----- view movies and view displayMore--------------------
// ----------------------------------------------------------

function showMoreDetails(e){
    if(e.target.tagName == 'BUTTON'){
        e.preventDefault();
        const id = e.target.dataset.id; //link between clicked on id and id used for later fetch
        detailsPage(id);
    }
}

function createMoviePreview(movie){
    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${movie._id}">
            <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
        </a>
    </div>`;

    return element;
}
// -----------------------------------------------------------



// ----------------------fetch data---------------------------
// -----------------------------------------------------------
async function getMovies(){
    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();

    return data;
}