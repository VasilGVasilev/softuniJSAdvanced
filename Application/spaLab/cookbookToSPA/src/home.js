const homeSection = document.querySelector('.home'); //here because it is a value in heap due to module home.js being a closure
const recipeList = homeSection.querySelector('.recipe-list');

// 5) render home with relevant recipes using fragment for more efficient DOM tree traversal
export function renderHome(){
    fetch('http://localhost:3030/data/recipes')
        .then(res=>res.json())
        .then(recipes => {
            renderRecipes(Object.values(recipes));
            homeSection.style.display = 'block'; // a little glitch when viewing due to above fetch
        });
}

// use fragement as industry practice to have more efficient appending of elements to fragement and only then appending fragment to div DOM element
    //fragment is not part of DOM tree so appending to it is faster
function renderRecipes(recipes){
    const fragment = document.createDocumentFragment(); //pseudo-DOM element not attached to actual DOM

    recipes.forEach(element => {
        fragment.appendChild(renderRecipe(element))
    });

    recipeList.innerHTML = '';
    recipeList.appendChild(fragment);
}

function renderRecipe(recipe){
    const recipeElement = document.createElement('article');
    recipeElement.classList.add('preview');

    recipeElement.innerHTML = `
    <div class="title">
        <h2>${recipe.name}</h2>
    </div>
    <div class="small">
        <img src="${recipe.img}">
    </div>
    `;

    return recipeElement;
}
