const host = 'http://localhost:3030'; // reoccuring url beginning abstracted on top-level

async function request(method, url, data){ 
    const options = {
        method,
        headers: {}
    };

    if(data != undefined){
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user')); //parse to avoid return null
    if(user){
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }


    try {
        const response = await fetch(host + url, options);

        if (response.ok != true){
            if(response.status == 403){
                localStorage.removeItem('user'); 
            } //forbidden due to unmatching token for example, when server is restarted, but localstorage saves the old token -> solution: if 403 clear localStorage  !!!! possibly not needed for sessionstorage due to expiration when browser tab is closed
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


const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

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