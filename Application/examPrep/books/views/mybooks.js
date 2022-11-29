import { html } from "../node_modules/lit-html/lit-html.js"
import * as bookService from "../api/data-books.js"
import { getUserData } from "../util.js"




const myBooksTemplate = (user, mybooks) => html`
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
${mybooks.length != 0 ? mybooks.map((book) => bookTemplate(book)) : nobookTemplate()}


</section>
`

const bookTemplate = (book) => html`
<ul class="my-books-list">
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
</ul>
` 


const nobookTemplate = () => html`
<p class="no-books">No books in database!</p>
`

export async function myBooksPage(ctx) {
    const user = await getUserData()
    const mybooks = await bookService.getMyBooks(user._id);
    ctx.render(myBooksTemplate(user, mybooks))
}