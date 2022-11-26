import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import { getUserData } from "../util.js"



const detailsTemplate = (pet, logged) => html `
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
            ${ logged == null ? nothing : loggedTemplate(pet)}
            <!-- if there is no registered user, do not display div-->

        </div>
    </div>
</section>
`

const loggedTemplate = (pet) => html`
    <div class="actionBtn">
        ${pet._isOwner == true ? creatorTemplate(pet) : userTemplate()}
    </div>
`

const userTemplate = () => html`
    <a href="#" class="donate">Donate</a>
`

const creatorTemplate = (pet) => html`
    <a href="/edit/${pet._id}" class="edit">Edit</a>
    <a href="/delete/${pet._id}" class="remove">Delete</a>
`


export async function detailsPage(ctx){
    const pet = ctx.pet; //done in preload
    let logged = getUserData(); //returns null or other thus the checker -> ${ logged == null ? nothing : loggedTemplate(pet)}
    ctx.render(detailsTemplate(pet, logged))
}

