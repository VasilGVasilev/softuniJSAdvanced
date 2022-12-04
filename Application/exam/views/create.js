import { html } from "../node_modules/lit-html/lit-html.js"
import { createSubmitHandler } from "../util.js";
import * as albumService from "../api/data-albums.js"

const createTemplate = (onSubmit) => html`
      <section id="create">
        <div class="form">
          <h2>Add Album</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.singer.length == 0 || data.album.length == 0 || data.imageUrl.length == 0 || data.release.length == 0 || data.label.length == 0 || data.sales.length == 0){
            throw new Error('No empty fields!')
        }

        let result = await albumService.create({
            singer: data.singer,
            album: data.album, 
            imageUrl: data.imageUrl, 
            release: data.release, 
            label: data.label, 
            sales: data.sales
          });
        ctx.page.redirect(`/dashboard`)
        


    } catch (error) {
        alert(error.message)
    }

}

export function createPage(ctx){
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)))
}