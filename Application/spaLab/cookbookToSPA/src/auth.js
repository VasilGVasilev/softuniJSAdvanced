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