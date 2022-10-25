// let promise = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         if(Math.random()>0.5){
//             resolve('Just married...');
//         } else {
//             reject('Sorry it\'s me')
//         }
//     }, 3000);
// })

// promise.then((e)=>console.log(e));
// promise.catch((e)=>console.log(e));

// resolve in new Promise() is a param but also a function
// you put in the string 'Just married...' as a param
// to call then properly you need to wrap the whole thing
// in a lambda function whose param you have declared
// and now to execute it you need a definition 


// FETCH API

// let promiseResult = fetch('https://swapi.dev/api/people/1');

// promiseResult
//     .then(result => console.log(result))
//     .catch(err=>console.log(err))

// >>    Response 
// so you need to make it a promise with .json()
// and to resolve it with .then()

// but basically the fetch api returns a stream 
// whose response is the meta data whose body is the main data

// server has throttling option -> make request/response slower -> A throttle is a common technique used in the browser to improve an application's performance by limiting the number of events your code needs to handle.

// async / await is not like other langs about multithreading
// its just sugar syntax for promises

