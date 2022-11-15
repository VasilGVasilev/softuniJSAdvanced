// router creates an object link {};
//  router will export factory functions initialise




export function intialize(links){
    // PART ONE initilize
    const main = document.querySelector('main');
    document.querySelector('nav').addEventListener('click', onNavigate);

    const context = {
        showSection,
        goTo
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

    function goTo(path){
        const handler = links[path];
        if (typeof handler == 'function'){
            handler(context)
        }
    }

}
