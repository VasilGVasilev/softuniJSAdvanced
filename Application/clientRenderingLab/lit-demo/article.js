import { html, render } from 'https://unpkg.com/lit-html?module'; //this is executed by browser


export const articleTemplate = (article) => html`
<article>
<h2>${article.title}</h2> 
<div class="content">
<p>${article.content}</p>
</div>
${footerTemplate(article.author)}
</article>`;

const footerTemplate = (author) => html`<footer>Author: ${author}</footer>`

