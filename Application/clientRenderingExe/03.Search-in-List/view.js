import { html } from '../../node_modules/lit-html/lit-html.js'

export const ulTemplate = (towns) => html`
<ul>${towns.map((town)=>html`<li id=${town}>${town}</li>`)}</ul>
`