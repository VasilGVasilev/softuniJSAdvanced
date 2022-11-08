const section = document.getElementById('detailsView');
section.remove();

export function showDetails(ev){
    
    let target = ev.target;

    if(target.tagName == 'H2'){ // faulty html <h2> in <a>
        target = target.parentElement;
    }

    if(target.tagName == 'A'){
        ev.preventDefault();

        const postId = target.id;
        showPost(postId);
    }
}

async function showPost(postId){

    document.getElementById('main').replaceChildren('Loading...');

    const response =  await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/` + postId);
    const post = await response.json();

    const element = document.createElement

    document.getElementById('main').replaceChildren(section);
}