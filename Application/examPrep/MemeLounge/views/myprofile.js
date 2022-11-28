import { html } from "../node_modules/lit-html/lit-html.js"
import * as memeService from "../api/data-memes.js"
import { getUserData } from "../util.js"




const myCatalogTemplate = (user, myMemes) => html`
<section id="user-profile-page" class="user-profile">
<article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
    <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${(myMemes.length)}</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>
<div class="user-meme-listings">
${myMemes.length != 0 ? myMemes.map((meme) => memeTemplate(meme)) : noMemeTemplate()}

</div>
</section>
`

const memeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>

` 


const noMemeTemplate = () => html`
    <p class="no-memes">No memes in database.</p>
`

export async function myCatalogPage(ctx) {
    const user = await getUserData()
    const memes = await memeService.getAll();
    const myMemes = memes.filter(e=>e._ownerId === user._id)
    console.log(myMemes);
    ctx.render(myCatalogTemplate(user, myMemes))
}