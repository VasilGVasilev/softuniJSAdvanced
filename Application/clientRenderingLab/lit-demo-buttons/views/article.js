import { html } from '../../node_modules/lit-html/lit-html.js';

export const articleTemplate = (onDelete, article, index) => html` //index comes from .map() in app.js
<article>
    <h2>${article.title}</h2>
    <button @click=${() => onDelete(index)}>Delete</button> 
    <div class="content">
        <p>${article.content}</p>
    </div>
    ${footerTemplate(article.author)}
</article>`;

const footerTemplate = (author) => html`<footer>Author: ${author}</footer>`
// it works with just onDelete(index) in app.js,
// because lit-html sees index as a truthy value and thus
// always deletes the first article
