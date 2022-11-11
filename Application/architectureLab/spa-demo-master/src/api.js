const host = 'http://localhost:3030';

export async function request(url, dataObj){

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    }
    // if there is user -> apply token to options
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if(userData != null){
        options.headers['X-Authorization'] = JSON.parse(sessionStorage.getItem('userData')).accessToken;
    }

    try {
        const res = await fetch(host + url, options);

        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        
        return data;

    } catch (err) {
        alert(err.message);
        throw err // redirect error so that in the case of create.js the execution will stop at await response from request() and not load showCatalog();
    }
}