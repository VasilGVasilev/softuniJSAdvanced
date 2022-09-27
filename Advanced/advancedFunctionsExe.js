// function sortArray(arr, type){
//     // sort higher-order function -> takes another function
//     const methods = {
//         asc: arr.sort((a,b) => a - b),
//         desc: arr.sort((a,b) => b - a)
//     }

//     arr.sort(methods[type]);

//     return arr;
// }

// with ternary operator:

// return arr.sort((a,b) => (type == 'asc' ? a - b : b - a));

// sortArray([14, 7, 17, 6, 8], 'asc')
// sortArray([14, 7, 17, 6, 8], 'desc')


// WORK WITHOUT SETTING PARAMETERS:

// argument key word
// function argInfo(){
//     console.log(arguments);
// }
// argInfo(1, 2, 3) // [Arguments] { '0': 1, '1': 2, '2': 3 } special collection not an array


// params and spread
// function argInfo(...params){
//     console.log(params);
// }
// argInfo(1, 2, 3) // [ 1, 2, 3 ]

function argInfo(){
    let params = Array.from(arguments);
    const types = {};

    for (let arg of params){
        const type = typeof arg;
        console.log(`${typeof arg}: ${arg}`);
        if(types[type] == undefined){
            types[type] = 0;
        }
        types[type]++;
    }
    console.log(types);
}
argInfo(1, 2, 3) // [ 1, 2, 3 ]
