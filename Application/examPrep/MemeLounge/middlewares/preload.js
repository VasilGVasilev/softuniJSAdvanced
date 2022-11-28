import * as memeService from "../api/data-memes.js"

// returns the object with added info
export async function preload(ctx, next){
    const memeId  = ctx.params.id;
    const meme = await memeService.getById(memeId);
    ctx.meme = meme;

    // if such, add key value boolean to pet object
    if(ctx.user && ctx.user._id == meme._ownerId){
        meme._isOwner = true; //it attached key:value to meme which is stored via reference in ctx.meme so you also automatically have it on ctx.meme
    }
    next()
}