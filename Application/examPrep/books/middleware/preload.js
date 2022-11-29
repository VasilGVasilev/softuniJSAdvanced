import * as bookService from "../api/data-books.js"

// returns the object with added info
export async function preload(ctx, next){
    const bookId  = ctx.params.id;
    const book = await bookService.getById(bookId);
    ctx.book = book;

    // if such, add key value boolean to pet object
    if(ctx.user && ctx.user._id == book._ownerId){
        book._isOwner = true; //it attached key:value to meme which is stored via reference in ctx.meme so you also automatically have it on ctx.meme
    }
    next()
}