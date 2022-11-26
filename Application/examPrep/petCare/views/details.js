import { html, nothing } from "../../node_modules/lit-html/lit-html.js"

const detailsTemplate = (pet) => html `
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
            ${pet._isOwner == true ? userTempalte(pet) : nothing}
            <!-- if there is no registered user, do not display div-->

        </div>
    </div>
</section>
`

const userTempalte = (pet) => html`
            <div class="actionBtn">
                <!--(Bonus Part) Only for no creator and user  <a href="#" class="donate">Donate</a>-->
                <!-- Only for registered user and creator of the pets-->
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a href="#" class="remove">Delete</a>
            </div>
`

export async function detailsPage(ctx){
    const pet = ctx.pet; //done in preload
    ctx.render(detailsTemplate(pet))
}