const host = 'http://localhost:3030';

export async function request(url, dataObj){
    try {

        const res = await fetch(host + url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        });

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