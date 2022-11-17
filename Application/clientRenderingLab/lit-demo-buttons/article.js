import { html } from '../node_modules/lit-html/lit-html.js';

export const articleTemplate = (article, onClick) => html`
<article>
    <h2>${article.title}</h2> 
    <button @click=${onClick}>Click me</button>
    <div class="content">
        <p>${article.content}</p>
    </div>
    ${footerTemplate(article.author)}
</article>`;

const footerTemplate = (author) => html`<footer>Author: ${author}</footer>`

