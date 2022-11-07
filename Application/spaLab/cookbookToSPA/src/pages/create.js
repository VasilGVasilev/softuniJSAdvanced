import { getToken } from '../auth.js'
const createSection = document.querySelector('.create');
const createForm = createSection.querySelector('form');


export function renderCreate(){
    createSection.style.display = 'block';
}

createForm.addEventListener('submit', onSubmit);

async function onSubmit(event){
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    const name = formData.get('name').trim();
    const img = formData.get('img').trim();
    const ingredients = formData.get('ingredients').trim().split('\n');
    const steps = formData.get('steps').trim().split('\n');

    const recipe = {
        name,
        img,
        ingredients,
        steps
    }

    try {
        const response = await fetch('http://localhost:3030/data/recipes',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(recipe)
        });

        if(response.ok == false){
            const error = await response.json();
            throw new Error(error.message);
        }

        // clean inputs after submit
        
    } catch (err) {
        alert(err.message);
    }
}