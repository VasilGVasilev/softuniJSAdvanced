const host = 'http://localhost:3030';

async function request(method, url, dataObj){

    const options = {
        method,
        headers: {}
    }

    // CHECK for method and customize options
    if(dataObj !== undefined){ // by type and value because even falsy values are still valid values, thus, !==
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(dataObj);
    }

    // CHECK for user and apply token to options
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

// get or post

export async function get(url){
    return request('get', url);
}

export async function post(url, data){
    return request('post', url, data);
}

