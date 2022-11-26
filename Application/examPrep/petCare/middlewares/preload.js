import * as petService from "../api/data-pets.js"

// returns the object with added info
export async function preload(ctx, next){
    const petId  = ctx.params.id;
    const pet = await petService.getById(petId);
    ctx.pet = pet;

    // if such, add key value boolean to pet object
    if(ctx.user && ctx.user._id == pet._ownerId){
        pet._isOwner = true; // this added key:value is only stored locally in pet, it does not update the server DB!
    }
    next()
}