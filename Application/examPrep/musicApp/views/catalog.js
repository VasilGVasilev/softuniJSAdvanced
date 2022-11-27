import { html, nothing } from "../node_modules/lit-html/lit-html.js"
import * as albumService from "../api/data-albums.js"

const catalogTemplate = (albums, logged) => html`
<section id="catalogPage">
<h1>All Albums</h1>
${albums.length > 0 ? albums.map((album) => albumTemplate(album, logged)) : noAlbumTemplate}
</section>
`

// href="/dashboard/${album._id} no such, so create one in app
const albumTemplate = (album, logged) => html`
<div class="card-box">
<img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${logged == true ? loggedInTemplate(album) : nothing}

    </div>
</div>
`

const loggedInTemplate = (album) => html`
        <div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>
`


const noAlbumTemplate = () => html`
<!--No albums in catalog-->
<p>No Albums in Catalog!</p>
`






export async function catalogPage(ctx) {
    const albums = await albumService.getAll();
    let logged = Boolean(ctx.user);
    ctx.render(catalogTemplate(albums, logged))
}
