import { html } from "../node_modules/lit-html/lit-html.js"
import { login } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

// function expression cannot be hoisted, tho
const loginTemplate = (onSubmit) => html`
      <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>
`

async function onSubmit(ctx, data, event){
    try {

        if(data.email.length == 0 || data.password.length == 0){
            throw new Error('No empty fields!')
        }

        await login(data.email, data.password);
        event.target.reset();
        ctx.page.redirect('/dashboard');

    } catch (error) {
        alert(error.message)
    }

}

export function loginPage(ctx){
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)))
} 