import { html } from "../node_modules/lit-html/lit-html.js"
import { createSubmitHandler } from "../util.js";
import * as memeService from "../api/data-memes.js"
import { notify } from "../notify.js";

const createTemplate = (onSubmit) => html`
    <section id="create-meme">
        <form @submit=${onSubmit} id="create-form">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.title.length == 0 || data.description.length == 0 || data.imageUrl.length == 0){
            throw new Error('No empty fields!')
        }

        let result = await memeService.create({
            title: data.title, 
            description: data.description, 
            imageUrl: data.imageUrl
        });
        ctx.page.redirect(`/catalog`)

    } catch (error) {
        notify(error.message)
    }

}

export function createPage(ctx){
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)))
}