import { html } from "../node_modules/lit-html/lit-html.js"
import * as albumService from "../api/data-albums.js"


const dashboardTemplate = (albums) => html`
<section id="dashboard">
<h2>Albums</h2>
${albums.length > 0 ? albums.map(albumTemplate) : noalbumTemplate()}


<!-- Display an h2 if there are no posts -->

</section>
`

const albumTemplate = (album) => html`
<ul class="card-wrapper">
  <!-- Display a li with information about every post (if any)-->
  <li class="card">
    <img src="${album.imageUrl}" alt="travis" />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/details/${album._id}">Details</a>
  </li>
</ul>
`


const noalbumTemplate = () => html`
<h2>There are no albums added yet.</h2>
`

export async function dashboardPage(ctx) {
    const albums = await albumService.getAll();
    ctx.render(dashboardTemplate(albums))
}