import { deleteById, getById } from "../api/data.js";

const section = document.getElementById('detailsPage');

export async function showDetails(context, id){
    const idea = await getById(id);
    context.showSection(section);


    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user._id == idea._ownerId;
    section.innerHTML = createIdeaHTML(idea, isOwner);

    if(isOwner){
        section.querySelector('#deleteBtn').addEventListener('click', async (event) => {
            event.preventDefault();
            const choice = confirm('Are you sure you want to delete this idea?') //blocking operation sync
            if(choice){
                await deleteById(id);
                context.goTo('/catalog')
            }
        })
    }
}

function createIdeaHTML(idea, isOwner){ //fragment instead of div because the original html is 3 elements with no common parent ! container is not a parent
    let html = `
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    `
    // only owner user can  delete recipe
    if(isOwner){
        html += `
        <div class="text-center">
            <a id="deleteBtn" class="btn detb" href="">Delete</a>
        </div>  
        `
    }
    return html;
}
