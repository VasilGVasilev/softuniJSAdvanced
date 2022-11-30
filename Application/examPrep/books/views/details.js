import { html, nothing } from "../node_modules/lit-html/lit-html.js"
import * as api from "../api/api.js";
import { getLikes, liked, postLike } from "../api/data-books.js";


const detailsTemplate = (user, book, onClick, totalBookLikes, onLike, likedBool) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <div class="actions">
    ${book._isOwner == true ? creatorTemplate(book, onClick) : userOrGuestTemplate(user, onLike, likedBool)}


        <!-- ( for Guests and Users )  -->
        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: ${totalBookLikes}</span>
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
const userOrGuestTemplate = (user, onLike, likedBool) => html`
 ${user != null ? userTemplate(onLike, likedBool) : nothing}
`

const creatorTemplate = (book, onClick) => html`
        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a class="button" href="" @click=${onClick}>Delete</a>

`

const userTemplate = (onLike, likedBool) => html`
        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${likedBool == 1 ? nothing : html`<a class="button" @click=${onLike} href="">Like</a>`}
        
`

export async function detailsPage(ctx){
    const book = ctx.book; //done in preload
    const bookId = book._id
    const user = ctx.user;
    
    
    let likedBool = 0;
    let totalBookLikes = await getLikes(book._id);
    if(user){
        let userId = user._id
        likedBool = await liked(bookId, userId)
    }


    // due tp delete being a button not a link
    async function onClick(){
        const choice = confirm('Do you want to delete this book?')
        if (choice){
            await api.del('/data/books/' + book._id);
            ctx.page.redirect('/dashboard')
        }

    }

    // like button logic
        // [x] get total likes 
        // [] like button
        // [] has user liked?

    
    async function onLike(e){
        e.preventDefault();
        await postLike({bookId});
        ctx.page.redirect(`/details/${bookId}`)
    }
    
    ctx.render(detailsTemplate(user, book, onClick, totalBookLikes, onLike, likedBool))
}