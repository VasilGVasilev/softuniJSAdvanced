import { getById } from "../api/data.js";

const section = document.getElementById('detailsPage');

export async function showDetails(context, id){
    const idea = await getById(id);
    console.log(idea);
    context.showSection(section)
    section.innerHTML = createIdeaHTML(idea);
}

function createIdeaHTML(idea){ //fragment instead of div because the original html is 3 elements with no common parent ! container is not a parent
    let html = `
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    `
    // only owner user can  delete recipe
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user._id == idea._ownerId){
        html += `
        <div class="text-center">
            <a id="deleteBtn" class="btn detb" href="">Delete</a>
        </div>  
        `
    }
    return html;
}
