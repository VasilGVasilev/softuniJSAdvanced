import { html } from "../node_modules/lit-html/lit-html.js"
import { login } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

// function expression cannot be hoisted, tho
const loginTemplate = (onSubmit) => html`
    <section id="loginPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
    `

async function onSubmit(ctx, data, event){
    try {

        if(data.email.length == 0 || data.password.length == 0){
            throw new Error('No empty fields!')
        }

        await login(data.email, data.password);
        event.target.reset();
        ctx.page.redirect('/');

    } catch (error) {
        alert(error.message)
    }

}

export function loginPage(ctx){
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)))
} 