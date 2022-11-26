import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import * as petService from "../api/data-pets.js"
import { createSubmitHandler } from "../util.js";


const editTemplate = (pet, onSubmit) => html `
<section id="editPage">
    <form @submit="${onSubmit}" class="editForm">
        <img src="${pet.image}">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value="${pet.name}">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value="${pet.breed}">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value="${pet.age}">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value="${pet.weight}">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value="${pet.image}">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.name.length == 0 || data.breed.length == 0 || data.age.length == 0 || data.weight.length == 0 || data.image.length == 0){
            throw new Error('No empty fields!')
        }
        let id = ctx.pet._id;

        let result = await petService.putById(id, {
            name: data.name, 
            breed: data.breed, 
            age: data.age, 
            weight: data.weight, 
            image: data.image
        });
        event.target.reset();
        ctx.page.redirect(`/details/${result._id}`)

    } catch (error) {
        alert(error.message)
    }

}

export async function editPage(ctx){
    const pet = await ctx.pet; //done in preload
    ctx.render(editTemplate(pet, createSubmitHandler(ctx, onSubmit)))
}