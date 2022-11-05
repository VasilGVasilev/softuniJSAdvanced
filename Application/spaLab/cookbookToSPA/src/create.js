document.querySelector('form').addEventListener('submit', onSubmit);

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
    // if you are registered you will have accessToken
    const token = sessionStorage.getItem('accessToken');

    try {
        const response = await fetch('http://localhost:3030/data/recipes',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(recipe)
        });

        if(response.ok == false){
            const error = await response.json();
            throw new Error(error.message);
        }
        

        window.location = 'http://127.0.0.1:5500/authenticationLab/base/index.html';
    } catch (err) {
        alert(err.message);
    }
}