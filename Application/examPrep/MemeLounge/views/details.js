import { html, nothing } from "../node_modules/lit-html/lit-html.js"
import * as api from "../api/api.js";

const detailsTemplate = (meme, onClick) => html`
<section id="meme-details">
<h1>Meme Title: ${meme.title}
</h1>
<div class="meme-details">
    <div class="meme-img">
        <img alt="meme-alt" src="${meme.imageUrl}">
    </div>
    <div class="meme-description">
        <h2>Meme Description</h2>
        <p>
            ${meme.description}
        </p>
        ${meme._isOwner == true ? userTempalte(meme, onClick) : nothing}

    </div>
</div>
</section>
`

const userTempalte = (meme, onClick) => html`
<a class="button warning" href="/edit/${meme._id}">Edit</a>
<button class="button danger" @click=${onClick}>Delete</button>
`

export function detailsPage(ctx){
    const meme = ctx.meme; //done in preload

    // due tp delete being a button not a link
    
    async function onClick(){
        const choice = confirm('Do you want to delete this meme?')
        if (choice){
            await api.del('/data/memes/' + meme._id);
            ctx.page.redirect('/catalog')
        }

    }
    ctx.render(detailsTemplate(meme, onClick))
}

