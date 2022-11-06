const homeSection = document.querySelector('.home'); //here because it is a value in heap due to module home.js being a closure

export function renderHome(){
    homeSection.style.display = 'block';
}