const host = 'http://localhost:3030'; // reoccuring url beginning abstracted on top-level

async function request(url, method = 'get', data){ 
    const options = {
        method,
        headers: {}
    };

    if(data != undefined){
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok != true){
            const error = await response.json();
            throw new Error(error.message);
        }
    
        if(response.status == 204){ //logout: The service returns an empty response - if you attempt to parse it as JSON, you will receive an error! 
            return response;
        } else {
            return response.json();
        }
    } catch (error) {
        alert(error.message);
        throw error; // otherwise the request() will consume the error and return undefined
    }
}


async function get(url){ // url is only specific part not 'localhost'
    return request(url)
}

async function post(url, data){
    return request(url, 'post', data)
}

async function put(url, data){
    return request(url, 'put', data)
}

async function del(url, data){
    return request(url, 'delete', data)
}

export {
    get,
    post,
    put,
    del as delete
}

// in browser console:
// await api.request('http://localhost:3030/data/ideas')
// >> Array(3) [ {…}, {…}, {…} ]



// NB:
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.
// function multiply(a, b = 1) {
//     return a * b;
//   }
  
//   console.log(multiply(5, 2));
//   // expected output: 10
  
//   console.log(multiply(5));
//   // expected output: 5