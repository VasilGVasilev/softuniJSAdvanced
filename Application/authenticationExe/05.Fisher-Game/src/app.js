window.addEventListener('load', loadingHomepage);
// how is _ownerId generated? so that it can be used for user specific edit

const logoutBtn = document.getElementById('logout');

async function loadingHomepage(){
    if (sessionStorage.accessToken == null){
        document.getElementById('user').style.display = 'none';
        document.getElementById('main').style.display = 'none';

    } else {
        document.getElementById('guest').style.display = 'none';
        document.querySelector(".add").disabled = false;
    }
    logoutBtn.addEventListener('click', logoutFunc);
}

async function logoutFunc(){
    const token = sessionStorage.getItem('accessToken');

    await fetch('http://localhost:3030/users/logout', {
        headers:{
            'X-Authorization': token
        }
    });

    sessionStorage.clear();

    window.location = 'http://127.0.0.1:5500/authenticationExe/05.Fisher-Game/src/'
}