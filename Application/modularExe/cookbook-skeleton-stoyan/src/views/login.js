import { html } from "../../node_modules/lit-html/lit-html.js"
import { login } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

// function expression cannot be hoisted, tho
const loginTemplate = (onSubmit) => html`
    <section id="login">
        <article>
            <h2>Login</h2>
            <form @submit=${onSubmit} id="loginForm">
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input type="submit" value="Login">
            </form>
        </article>
    </section>
    `

async function onSubmit(ctx, data, event){
    await login(data.email, data.password);
    event.target.reset();
    ctx.page.redirect('/catalog');
}

export function loginPage(ctx){
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)))
} 

// alternative:



// export function loginPage(ctx){
//     ctx.render(loginTemplate(onSubmit));

//     async function onSubmit(event){
//         event.preventDefualt();
//         let formData = Object.entries(new FormData(event.target))

//         await login(formData.email, formData.password);

//         event.target.reset();
//         ctx.page.redirect('/catalog');
//     }
// } 