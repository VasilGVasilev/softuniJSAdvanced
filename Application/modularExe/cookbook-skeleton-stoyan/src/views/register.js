import { html } from "../../node_modules/lit-html/lit-html.js"
import { register } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

// function expression cannot be hoisted, tho
const registerTemplate = (onSubmit) => html`
    <section id="register">
        <article>
            <h2>Register</h2>
            <form @submit=${onSubmit} id="registerForm">
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="rePass"></label>
                <input type="submit" value="Register">
            </form>
        </article>
    </section>
    `

async function onSubmit(ctx, data, event){
    try {
        if(data.password != data.rePass){
            
            throw new Error('Password do not match!')
        }
        await register(data.email, data.password);
        event.target.reset();
        ctx.page.redirect('/catalog');
    } catch (error) {
        alert(error.message)
    }

}

export function registerPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)))
} 