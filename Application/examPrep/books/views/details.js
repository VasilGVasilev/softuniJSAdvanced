import { html } from "../node_modules/lit-html/lit-html.js"
import * as api from "../api/api.js";



const detailsTemplate = (book, onClick) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <div class="actions">
    ${book._isOwner == true ? creatorTemplate(book, onClick) : likeTemplate()}


        <!-- ( for Guests and Users )  -->
        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: 0</span>
        </div>
        <!-- Bonus -->
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>
`

const creatorTemplate = (book, onClick) => html`
        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a class="button" href="" @click=${onClick}>Delete</a>

`

const likeTemplate = () => html`
        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        <a class="button" href="#">Like</a>
`

export function detailsPage(ctx){
    const book = ctx.book; //done in preload

    // due tp delete being a button not a link
    
    async function onClick(){
        const choice = confirm('Do you want to delete this book?')
        if (choice){
            await api.del('/data/books/' + book._id);
            ctx.page.redirect('/dashboard')
        }

    }
    ctx.render(detailsTemplate(book, onClick))
}