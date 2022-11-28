import { html } from "../node_modules/lit-html/lit-html.js"
import * as memeService from "../api/data-memes.js"
import { createSubmitHandler } from "../util.js";


const editTemplate = (meme, onSubmit) => html`
        <section id="edit-meme">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" value="${meme.title}">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description">${meme.description}
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value="${meme.imageUrl}">
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.title.length == 0 || data.description.length == 0 || data.imageUrl.length == 0){
            throw new Error('No empty fields!')
        }
        let id = ctx.meme._id; // no need for await, fetch done in preload

        let result = await memeService.putById(id, {
            title: data.title, 
            description: data.description, 
            imageUrl: data.imageUrl
        });
        ctx.page.redirect(`/details/${result._id}`)

    } catch (error) {
        alert(error.message)
    }

}

export async function editPage(ctx){
    const meme = ctx.meme; // no need for await, fetch done in preload
    ctx.render(editTemplate(meme, createSubmitHandler(ctx, onSubmit)))
}