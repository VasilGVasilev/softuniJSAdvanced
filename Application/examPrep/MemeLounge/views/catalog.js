import { html, nothing } from "../node_modules/lit-html/lit-html.js"
import * as memeService from "../api/data-memes.js"

const catalogTemplate = (memes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
    ${memes.length > 0 ? memes.map((meme) => memeTemplate(meme)) : noMemeTemplate}
        <!-- Display : If there are no memes in database -->
    </div>
</section>`

// href="/dashboard/${album._id} no such, so create one in app
const memeTemplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>
`


const noMemeTemplate = () => html`
<p class="no-memes">No memes in database.</p>
`

export async function catalogPage(ctx) {
    const memes = await memeService.getAll();
    ctx.render(catalogTemplate(memes))
}