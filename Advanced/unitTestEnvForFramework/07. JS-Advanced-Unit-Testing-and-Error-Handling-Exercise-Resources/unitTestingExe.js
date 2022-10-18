// function reqValidator(obj){
//     let arrMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
//     let uriRegex = /^[\w.]+$/;
//     let arrVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
//     let messageRegex = /^[^<>\\&\'\"]+$/;

//     if (!(obj.method && arrMethods.includes(obj.method))){
//         throw new Error('Invalid request header: Invalid Method')
//     }
//     if (!(obj.uri && (obj.uri == '*' || uriRegex.test(obj.uri)))){
//         throw new Error('Invalid request header: Invalid URI')
//     }
//     if (!(obj.version && arrVersions.includes(obj.version))){
//         throw new Error('Invalid request header: Invalid Version')
//     }
//     if (!(obj.hasOwnProperty('message') && (obj.message == '' || messageRegex.test(obj.message)))){
//         throw new Error('Invalid request header: Invalid Message')
//     }
//     return obj;
// }

// reqValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// })


