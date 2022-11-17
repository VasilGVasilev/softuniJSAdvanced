import { html } from '../../node_modules/lit-html/lit-html.js';

export const articleTemplate = (onDelete, article) => html`
<article>
    <h2>${article.title}</h2>
    <button @click=${onDelete}>Delete</button> 
    <div class="content">
        <p>${article.content}</p>
    </div>
    ${footerTemplate(article.author)}
</article>`;

const footerTemplate = (author) => html`<footer>Author: ${author}</footer>`

