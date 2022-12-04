import { html } from "../node_modules/lit-html/lit-html.js"
import * as albumService from "../api/data-albums.js"
import { createSubmitHandler } from "../util.js";


const editTemplate = (album, onSubmit) => html`
      <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value="${album.singer}"/>
            <input type="text" name="album" id="album-album" placeholder="Album" .value="${album.album}"/>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value="${album.imageUrl}"/>
            <input type="text" name="release" id="album-release" placeholder="Release date" .value="${album.release}"/>
            <input type="text" name="label" id="album-label" placeholder="Label" .value="${album.label}"/>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value="${album.sales}"/>

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
        let id = ctx.album._id; // no need for await, fetch done in preload

        let result = await albumService.putById(id, {
            singer: data.singer,
            album: data.album, 
            imageUrl: data.imageUrl, 
            release: data.release, 
            label: data.label, 
            sales: data.sales
          });
        ctx.page.redirect(`/details/${result._id}`)

    } catch (error) {
        alert(error.message)
    }

}

export async function editPage(ctx){
    const album = ctx.album; // no need for await, fetch done in preload
    ctx.render(editTemplate(album, createSubmitHandler(ctx, onSubmit)))
}