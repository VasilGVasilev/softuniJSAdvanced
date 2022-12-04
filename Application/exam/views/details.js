import { html, nothing } from "../node_modules/lit-html/lit-html.js"
import * as api from "../api/api.js";
import { getLikes, liked, postLike } from "../api/data-albums.js";


const detailsTemplate = (user, album, onClick, totalalbumLikes, onLike, likedBool) => html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src="${album.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${album.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">${totalalbumLikes}</span></div>

  <!--Edit and Delete are only for creator-->
  <div id="action-buttons">
  ${album._isOwner == true ? creatorTemplate(album, onClick) : userOrGuestTemplate(user, onLike, likedBool)}

  </div>
</div>
</section>
`

const userOrGuestTemplate = (user, onLike, likedBool) => html`
 ${user != null ? userTemplate(onLike, likedBool) : nothing}
`

const creatorTemplate = (album, onClick) => html`
        <a href="/edit/${album._id}" id="edit-btn">Edit</a>
        <a href="" @click=${onClick} id="delete-btn">Delete</a>
`

const userTemplate = (onLike, likedBool) => html`
        ${likedBool == 1 ? nothing : html`<a href="" @click=${onLike} id="like-btn">Like</a>`}
        
`

export async function detailsPage(ctx){
    const album = ctx.album; //done in preload
    const albumId = album._id
    const user = ctx.user;
    
    
    let likedBool = 0;
    let totalalbumLikes = await getLikes(album._id);
    if(user){
        let userId = user._id
        likedBool = await liked(albumId, userId)
    }


    // due to delete being a button not a link
    async function onClick(){
        const choice = confirm('Do you want to delete this album?')
        if (choice){
            await api.del('/data/albums/' + album._id);
            ctx.page.redirect('/dashboard')
        }

    }

    // like button logic
        // [x] get total likes 
        // [x] like button
        // [x] has user liked?

    
    async function onLike(e){
        e.preventDefault();
        await postLike({albumId});
        ctx.page.redirect(`/details/${albumId}`)
    }
    
    ctx.render(detailsTemplate(user, album, onClick, totalalbumLikes, onLike, likedBool))
}