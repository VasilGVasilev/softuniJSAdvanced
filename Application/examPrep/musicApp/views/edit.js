import { html } from "../node_modules/lit-html/lit-html.js"
import * as albumService from "../api/data-albums.js"
import { createSubmitHandler } from "../util.js";


const editTemplate = (album, onSubmit) => html `
<section class="editPage">
<form @submit="${onSubmit}">
    <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" name="name" class="name" type="text" value="${album.name}">

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="${album.imgUrl}">

            <label for="price" class="vhide">Price</label>
            <input id="price" name="price" class="price" type="text" value="${album.price}">

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="${album.releaseDate}">

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" name="artist" class="artist" type="text" value="${album.artist}">

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" name="genre" class="genre" type="text" value="${album.genre}">

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" rows="10"
                cols="10">${album.description}</textarea>

            <button class="edit-album" type="submit">Edit Album</button>
        </div>
    </fieldset>
</form>
</section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.name.length == 0 || data.imgUrl.length == 0 || data.price.length == 0 || data.releaseDate.length == 0 || data.artist.length == 0 || data.genre.length == 0 || data.description.length == 0){
            throw new Error('No empty fields!')
        }
        let id = ctx.album._id; // no need for await, fetch done in preload

        let result = await albumService.putById(id, {
            name: data.name, 
            imgUrl: data.imgUrl, 
            price: data.price, 
            releaseDate: data.releaseDate, 
            artist: data.artist,
            genre: data.genre,
            description: data.description
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

