import { html } from 'https://unpkg.com/lit-html?module'; //this is executed by browser


export const articleTemplate = (article) => html`
<article>
<h2>${article.title}</h2> 
<div class="content">
<p>${article.content}</p>
</div>
${html`<footer>Author: ${author}</footer>`}
</article>`;



