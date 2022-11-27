let userLinks = document.getElementById('user')
let guestLinks =  document.getElementById('guest')

export function updateNav(ctx, next) {

    if(ctx.user) {
        userLinks.style.display = 'inline-block'
        guestLinks.style.display = 'none'
    } else {
        userLinks.style.display = 'none'
        guestLinks.style.display = 'inline-block'
    }
    next()
}