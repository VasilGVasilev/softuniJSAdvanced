import * as albumService from "../api/data-albums.js"

// returns the object with added info
export async function preload(ctx, next){
    const albumId = ctx.params.id;
    const album = await albumService.getById(albumId);

    ctx.album = album;

    // if such, add key value boolean to pet object
    if(ctx.user && ctx.user._id == album._ownerId){
        album._isOwner = true; //it attached key:value to meme which is stored via reference in ctx.meme so you also automatically have it on ctx.meme
    }
    next()
}