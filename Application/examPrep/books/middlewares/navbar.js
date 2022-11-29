let userLinks = document.getElementById('user')
let guestLinks =  document.getElementById('guest')
let span = userLinks.querySelector('span')

export function updateNav(ctx, next) {

    if(ctx.user) {
        userLinks.style.display = 'inline-block'
        guestLinks.style.display = 'none'
        span.textContent = `Welcome, ${ctx.user.email}`
    } else {
        userLinks.style.display = 'none'
        guestLinks.style.display = 'inline-block'
    }
    next()
}