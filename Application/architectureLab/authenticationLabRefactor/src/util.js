export function checkUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display = 'none';
    } else {
        document.getElementById('userNav').style.display = 'none';
        document.getElementById('guestNav').style.display = 'inline-block';
    }
}

export function onLogout(ctx) {
    get('/users/logout');
    sessionStorage.removeItem('userData');
    ctx.checkUserNav();
    ctx.goTo('homeBtn');
}