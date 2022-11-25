import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

// function expression cannot be hoisted, tho
const registerTemplate = (onSubmit) => html`
    <section id="registerPage">
    <form @submit=${onSubmit} class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.email.length == 0 || data.password.length == 0 || data.repeatPassword.lenght == 0){
            throw new Error('No empty fields!')
        }
        if(data.password != data.repeatPassword){
            throw new Error('Password does not match!')
        }

        await register(data.email, data.password);
        event.target.reset();
        ctx.page.redirect('/');

    } catch (error) {
        alert(error.message)
    }

}

export function registerPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)))
} 