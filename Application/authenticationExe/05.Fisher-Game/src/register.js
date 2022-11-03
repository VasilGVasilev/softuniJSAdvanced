document.getElementById('user').style.display = 'none';

document.querySelector('form').addEventListener('submit', submitRegister);

async function submitRegister(e){
    e.preventDefault();

    // get input data
    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');
    let repass = formData.get('rePass');

    try {
        // error handling
        if(email === '' && password === '' && repass === ''){
            throw new Error('All fields are empty!')
        }
        if(email === ''){
            throw new Error('Email field is empty!')
        }
        if(password === ''){
            throw new Error('Password field is empty!')
        }
        if(repass === ''){
            throw new Error('Repeat field is empty!')
        }
        if(repass !== password){
            throw new Error('Repeat and Password do not match!')
        }
        
        // request-response
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        if(response.ok == false){
            const error = await response.json();
            throw new Error(error.message);
        }

        let data = await response.json();
        
        // browser storage
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('_id', data._id);
        
        // redirect to Homepage
        window.location = 'http://127.0.0.1:5500/authenticationExe/05.Fisher-Game/src/'

    } catch (error) {
        alert(error.message);
    }
}