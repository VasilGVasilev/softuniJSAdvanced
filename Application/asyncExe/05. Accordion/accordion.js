async function solution() {
    try {
        let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
        let response = await fetch(url);
        if(!response.ok){
            throw new Error('Error obtaining article list');
        }
        let data = await response.json();
        data.forEach(element => {
            let articleElement = document.createElement('div');
            articleElement.classList.add('accordion');
            articleElement.innerHTML = 
            `
            <div class="head">
                <span>${element.title}</span>
                <button class="button" id="${element._id}" onclick="moreOnclick(event)">More</button>
            </div>
            <div class="extra"></div>
            `
            let main = document.getElementById('main');
            main.appendChild(articleElement);
        });

    } catch (error) {
        
    }
}

async function moreOnclick(e){
    try {
        let currentTarget = e.currentTarget;
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/` + e.currentTarget.id;
        let parent = currentTarget.parentNode.parentNode;
        let extraDiv = parent.querySelector('div.extra');
        
        let reponse = await fetch(url);
        if(!reponse.ok){
            throw new Error('Error obtaining article details');
        }
        let data = await reponse.json();
        extraDiv.innerHTML = `<p>${data.content}</p>`
        if(currentTarget.textContent == 'More'){
            currentTarget.textContent = 'Less';
            extraDiv.style.display = 'block';
        } else{
            currentTarget.textContent = 'More';
            extraDiv.style.display = 'none';
        }
    } catch (error) {
        
    }
}
solution();