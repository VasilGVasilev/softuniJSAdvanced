import { showView } from "./util.js";

const section = document.querySelector('#movie-example');

export function detailsPage(id){
    showView(section);
    displayMovie(id);
}

async function displayMovie(id){
    section.replaceChildren(spinner());

    const user = JSON.parse(sessionStorage.getItem('user'));

    const [movies, likes, ownLikes] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id, user)
    ]);

    section.replaceChildren(createMovieCard(movie, user, likes, ownLike));
}

function createMovieCard(movie, user, likes, ownLike){
    const element = document.createElement('div');
    element.className = 'container';
    element.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>
        <div class="col-md-8">
            <img class="img-thumbnail" src="${movie.img}" alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>${movie.description}</p>
            ${createControls(movie, user, ownLike)}
            <span class="enrolled-span">Liked ${likes}</span>
        </div>
    </div>`;

    const likeBtn = element.querySelector('.like-btn');
    if(likeBtn){
        likeBtn.addEventListener('click', (e) => likeMovie(e, movie._id)) // '<a class="btn btn-primary like-btn" href="#">Like</a>' the anchor requires us to preventDefault() thus-> ('click', (e) => likeMovie(e, movie._id)) instead of simply ('click', likeMovie)
    }
    
    return element;
}

// owner can 'edit/delete' but cannot 'like', non-owner can 'like' but cannot 'edit/delete'
function createControls(movie, user, ownLike){
    const isOwner = user && user._id == movie._ownerId;

    let controls = [];

    
    if (isOwner) {
        controls.push('<a class="btn btn-danger" href="#">Delete</a>');
        controls.push('<a class="btn btn-warning" href="#">Edit</a>');
    } else if (user && ownLike == false) {
        controls.push('<a class="btn btn-primary like-btn" href="#">Like</a>');
    }
    controls.push();

    return controls.join('');
}

async function getMovie(id){
    const res = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movie = await res.json();

    return movie;
}

async function getLikes(id){
    const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const likes = res.json();

    return likes;
}

async function getOwnLike(movieId, user){
    if(!user){
        return false;
    } else {
        const userId = user._id;
        const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
        const like = await res.json();

        return like.length > 0; // we need to know if it is true or false, thus, this return
    }
}

async function likeMovie(e, movieId){
    e.preventDEfualt();

    const user = JSON.parse(sessionStorage.getItem('user'));

    await fetch('http://localhost:3030/data/likes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({
            movieId
        })
    })

    detailsPage(movieId);
}