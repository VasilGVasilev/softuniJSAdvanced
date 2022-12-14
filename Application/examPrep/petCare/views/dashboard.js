import { html } from "../node_modules/lit-html/lit-html.js"
import * as petService from "../api/data-pets.js"

const dashboardTemplate = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">

        ${pets.length > 0 ? pets.map(petsTemplate) : nopetsTemplate}

    </div>
</section>
`

// href="/dashboard/${pet._id} no such, so create one in app
const petsTemplate = (pet) => html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src="${pet.image}">
        </article>
        <h2 class="name">${pet.name}</h2>
        <h3 class="breed">${pet.breed}</h3>
        <div class="action">
            <a class="btn" href="/details/${pet._id}">Details</a> 
        </div>
    </div>`



const nopetsTemplate = () => {
    return html`
    <div>
        <p class="no-pets">No pets in dashboard</p>
    </div>
    `
}
export async function dashboardPage(ctx) {
    const pets = await petService.getAll()
    ctx.render(dashboardTemplate(pets))
}
