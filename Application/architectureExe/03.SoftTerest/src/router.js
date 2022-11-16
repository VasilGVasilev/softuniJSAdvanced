// router creates an object link {};
//  router will export factory functions initialise




export function intialize(links){
    // PART ONE initilize
    const main = document.querySelector('main');
    const nav = document.querySelector('nav')
    nav.addEventListener('click', onNavigate);
    

    const context = {
        showSection,
        goTo,
        updateNav
    }

    return context;

    // PART TWO storing functions 
    function showSection(section){
        main.replaceChildren(section);
    }

    function onNavigate(event){
        let target = event.target;
        if(target.tagName == 'IMG'){ //bad html <a><img></a> <a> is not deepest
            target = target.parentElement;
        }
        
        if (target.tagName == 'A'){ //better html <li><a></a></li> <a> is deepest
            event.preventDefault();
            const url = new URL(target.href);
            goTo(url.pathname);
        }
    }

    function goTo(name, ...params){
        const handler = links[name];
        if (typeof handler == 'function'){
            handler(context, ...params)
        }
    }

    function updateNav(){
        const user = localStorage.getItem('user');
        if(user){
            nav.querySelectorAll('.user').forEach(element => element.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(element => element.style.display = 'none');
        } else{
            nav.querySelectorAll('.user').forEach(element => element.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(element => element.style.display = 'block');
        }
    }

}
