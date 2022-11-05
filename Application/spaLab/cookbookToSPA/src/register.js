// Uncaught TypeError: document.querySelector(...) is null
// due to script being in the <head> so defer is added before src
document.querySelector('form').addEventListener('submit', onSubmit);

async function onSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // not in object so that we control what gets send to the server
    // excluse rePass
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('rePass');

    try {
        if (email == '' || password == ''){
            throw new Error('All fields are required!');
        }
        if (password != repass){
            throw new Error('Passwords don\'t match!');
        }
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if(response.ok == false){
            const error = await response.json();
            throw new Error(error.message)
        } 
        const data = await response.json();
        console.log(data.accessToken);
        sessionStorage.setItem('accessToken', data.accessToken);

        window.location = 'http://127.0.0.1:5500/authenticationLab/base/index.html';
    } catch (err) {
        alert(err.message)
    }

}