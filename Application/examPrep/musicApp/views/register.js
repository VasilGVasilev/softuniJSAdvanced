import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

// function expression cannot be hoisted, tho
const registerTemplate = (onSubmit) => html`
<section id="registerPage">
<form @submit=${onSubmit}>
    <fieldset>
        <legend>Register</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <label for="conf-pass" class="vhide">Confirm Password:</label>
        <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

        <button type="submit" class="register">Register</button>

        <p class="field">
            <span>If you already have profile click <a href="#">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.email.length == 0 || data.password.length == 0 || data['conf-pass'].lenght == 0){ //brakcet notation for erro handling of "-"
            throw new Error('No empty fields!')
        }
        if(data.password != data['conf-pass']){
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