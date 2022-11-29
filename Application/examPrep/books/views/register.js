import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

// function expression cannot be hoisted, tho
const registerTemplate = (onSubmit) => html`
        <section id="register-page" class="register">
            <form @submit="${onSubmit}" id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.email.length == 0 || data.password.length == 0 || data['confirm-pass'].lenght == 0){ //brakcet notation for erro handling of "-"
            throw new Error('No empty fields!')
        }
        if(data.password != data['confirm-pass']){
            throw new Error('Password does not match!')
        }

        await register(data.email, data.password);
        event.target.reset();
        ctx.page.redirect('/dashboard');

    } catch (error) {
        alert(error.message)
    }

}

export function registerPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)))
} 