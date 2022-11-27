import { render } from '../node_modules/lit-html/lit-html.js';

let root = document.querySelector('main#content')

function ctxRender(content) {
    render(content, root)
}

export function decorateContext(ctx, next) {
    ctx.render = ctxRender
    next()
}