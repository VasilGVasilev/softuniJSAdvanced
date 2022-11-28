let userLinks = document.querySelector('div.user')
let guestLinks =  document.querySelector('div.guest')
let span = userLinks.querySelector('span')

export function updateNav(ctx, next) {

    if(ctx.user) {
        userLinks.style.display = 'inline'
        guestLinks.style.display = 'none'
        span.textContent = `Welcome, ${ctx.user.email}`
    } else {
        userLinks.style.display = 'none'
        guestLinks.style.display = 'inline'
    }
    next()
}