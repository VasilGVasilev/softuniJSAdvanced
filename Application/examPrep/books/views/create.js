import { html } from "../node_modules/lit-html/lit-html.js"
import { createSubmitHandler } from "../util.js";
import * as bookService from "../api/data-books.js"

const createTemplate = (onSubmit) => html`
        <section id="create-page" class="create">
            <form @submit=${onSubmit} id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book">
                </fieldset>
            </form>
        </section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.title.length == 0 || data.description.length == 0 || data.imageUrl.length == 0){
            throw new Error('No empty fields!')
        }

        let result = await bookService.create({
            title: data.title, 
            description: data.description, 
            imageUrl: data.imageUrl,
            type: data.type
        });
        ctx.page.redirect(`/dashboard`)
        


    } catch (error) {
        alert(error.message)
    }

}

export function createPage(ctx){
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)))

}