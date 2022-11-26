import { html, nothing } from "../node_modules/lit-html/lit-html.js"
import { createSubmitHandler } from "../util.js";
import * as petService from "../api/data-pets.js"

const createTemplate = (onSubmit) => html`
<section id="createPage">
    <form @submit=${onSubmit} class="createForm">
        <img src="./images/cat-create.jpg">
        <div>
            <h2>Create PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Create Pet</button>
        </div>
    </form>
</section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.name.length == 0 || data.breed.length == 0 || data.age.length == 0 || data.weight.length == 0 || data.image.length == 0){
            throw new Error('No empty fields!')
        }

        let result = await petService.create({
            name: data.name, 
            breed: data.breed, 
            age: data.age, 
            weight: data.weight, 
            image: data.image
        });
        ctx.page.redirect(`/`)

    } catch (error) {
        alert(error.message)
    }

}

export function createPage(ctx){
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)))
}