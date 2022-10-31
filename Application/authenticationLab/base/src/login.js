document.querySelector('form').addEventListener('submit', onSubmit);

async function onSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    try {
        if(email == ''){//grab by attribute with [name="email"]
            document.querySelector('[name="email"').style.border = '1px solid red';
            throw new Error('Email is required!');
        } 
        if(password == ''){
            document.querySelector('[name="password"').style.border = '1px solid red';
            throw new Error('Password is required!');
        }

        const response = await fetch('http://localhost:3030/users/login',{
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
            throw new Error(error.message)
        }

        const data = await response.json();

        sessionStorage.setItem('accessToken', data.accessToken);

        window.location = 'http://127.0.0.1:5500/authenticationLab/base/index.html';
    } catch (err) {
        alert(err.message);
    }
}