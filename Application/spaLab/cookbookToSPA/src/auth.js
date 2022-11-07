const guestNavigation = document.querySelector('#guest');
const userNavigation = document.querySelector('#user');


export function updateAuthState(){
    let serialisedUser = sessionStorage.getItem('user');

    if(serialisedUser){
        userNavigation.style.display = 'inline';
        guestNavigation.style.display = 'none';
    } else {
        guestNavigation.style.display = 'inline';
        userNavigation.style.display = 'none';
    }
}

export function lougout(){
    sessionStorage.removeItem('user');
    updateAuthState();
}

export function getToken(){
    let serialisedUser = sessionStorage.getItem('user');
    if (serialisedUser) {
        let user = JSON.parse(serialisedUser);
        return user.accessToken
    }
    
}