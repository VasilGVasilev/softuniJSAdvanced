let userLinks = document.querySelector('.user')
let guestLinks =  document.querySelector('.guest')

export function updateNav(ctx, next) {

    if(ctx.user) {
        userLinks.style.display = 'inline'
        guestLinks.style.display = 'none'
    } else {
        userLinks.style.display = 'none'
        guestLinks.style.display = 'inline'
    }
    next()
}