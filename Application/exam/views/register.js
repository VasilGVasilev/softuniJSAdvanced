import { html } from "../node_modules/lit-html/lit-html.js"
import { register } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

// function expression cannot be hoisted, tho
const registerTemplate = (onSubmit) => html`
      <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.email.length == 0 || data.password.length == 0 || data['re-password'].lenght == 0){ //brakcet notation for erro handling of "-"
            throw new Error('No empty fields!')
        }
        if(data.password != data['re-password']){
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