const host = 'http://localhost:3030';

async function request(method, url, dataObj){

    // factor in: get request with body -> error 400
    const options = {
        method,
        headers: {}
    }

    // CHECK for method and customize options
    if(dataObj !== undefined){ // by type and value because even falsy values are still valid values, thus, !==
        options.headers['Content-Type'] = 'application/json';
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

        // logout in util.js uses the get() and get() uses request() which returns the res.json() no content!
        // resulting in: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data
        
        if (res.status == 204){
            return res;
        } else {
            return await res.json();
        }

    } catch (err) {
        alert(err.message);
        throw err // redirect error so that in the case of create.js the execution will stop at await response from request() and not load showCatalog();
    }
}

// get or post Decorator functions

export async function get(url){
    return request('GET', url);
}

export async function post(url, data){
    return request('POST', url, data);
}

