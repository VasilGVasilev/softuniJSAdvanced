document.getElementById('user').style.display = 'none';
document.querySelector('form').addEventListener('submit', submitLogin);

async function submitLogin(e){
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');

    try {
        // error handling
        if(email === '' && password === ''){
            throw new Error('Email and password fields empty!')
        }
        if(email === ''){
            throw new Error('Email field empty!')
        }
        if(password === ''){
            throw new Error('Password field empty!')
        }

        // request/response
        let response = await fetch('http://localhost:3030/users/login', {
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
        console.log(data);
        // browser storage
            // save accessToken and id to correlate with ownerId in update functionality
            // you can have only one accessToken and id per login session so no collisions
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('_id', data._id);
        sessionStorage.setItem('email', data.email);

        // homepage redirect
        window.location = 'http://127.0.0.1:5500/authenticationExe/05.Fisher-Game/src/'
    } catch (error) {
        alert(error.message);
    }
}