// Boilerplate abstraction tool
    // hide and show funcs for rendering that are used by homePage()
    // updateNav logic that is used by app.js

const views = Array.from(document.querySelectorAll(".view-section"));

export function hideAll(){
    views.forEach(v => v.style.display = 'none')
}

export function showView(section){
    hideAll();
    section.style.display = 'block';
}

export function spinner(){
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;';
    
    return element;
}

export function updateNav(){
    // check if there is user in sessionStorage
    const user = JSON.parse(sessionStorage.getItem('user'));
   
    const msgContainer = document.getElementById('welcome-msg');
    
    if(user){
        document.querySelectorAll('.user').forEach(e=>e.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(e=>e.style.display = 'none'); 
        msgContainer.textContent = `Welcome, ${user.email}`;       
    } else {
        document.querySelectorAll('.user').forEach(e=>e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e=>e.style.display = 'inline-block'); 
        msgContainer.textContent = '';
    }
}

