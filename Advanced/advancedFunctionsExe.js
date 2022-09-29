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

// function argInfo(){
//     let params = Array.from(arguments);
//     const types = {};

//     for (let arg of params){
//         const type = typeof arg;
//         console.log(`${type}: ${arg}`);
//         if(types[type] == undefined){
//             types[type] = 0;
//         }
//         types[type]++;
//     }
//     // make an array out of obj to sort
//     const resultArr = Object.entries(types).sort((a,b)=>b[1] - a[1]);

//     for (let [type, count] of resultArr){
//         console.log(`${type} = ${count}`);
//     }
// }
// argInfo('cat', 42, function () { console.log('Hello world!'); }) // [ 1, 2, 3 ]





// function getFibonator(){
//     let first = 0;
//     let second = 1;
//     return function () {
//         let next = first + second;
//         first = second;
//         second = next;
//         return first;
//     }
// }


// functions are first-class in JS so like objects

// function getFibonator(){
//     const result = function () {
//         let next = result.first + result.second;
//         result.first = result.second;
//         result.second = next;
//         return result.first;
//     }
//     result.first = 0;
//     result.second = 1;
//     return result;
// }

// SyntaxError: Function statements require a function name
// const result = function () {}
// result.first = 0;
// console.log(result);
// [Function: result] { first: 0 }

// or with this, bind

// function getFibonator(){
//     return (function () {
//         let next = this.first + this.second;
//         this.first = this.second;
//         this.second = next;
//         return this.first;
//     }).bind({
//         first: 0,
//         second: 1
//     })
    
// }


// let fib = getFibonator();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13



// function add(n){
//     const inner = function(a){
//         n += a;
//         return inner;
//     }
//     inner.toString = function (){
//         return n;
//     }
//     return inner;
// }

// add(1)(6)(-3)


function solve(){
    
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    const stock = { 
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const commands = { 
        restock,
        prepare,
        report
    }

    return manager; // hoisting

    function manager(line){
        const [command, param, qty] = line.split(' ');
        return commands[command] (param, qty);
    }

    function restock(type, qty){
        stock[type] += Number(qty);
        return 'Success';
    }

    function prepare(recipeAsString, qty){
        qty = Number(qty);
        // find recipe 
        const recipe = Object.entries(recipes[recipeAsString]); //we need to make a copy so to not modify the actual object with recepies

        // calc total ingredient quant
        recipe.forEach(ingredient => ingredient[1] *= qty) // recipe Ex. after being made into an array via Object.entries [['carbohydrate', 10], ['flavour', 20]]

        // compare one by one with stock
        for (let [ingredient, required] of recipe){
            if (stock[ingredient] < required){
                return `Error: not enough ${ingredient} in stock`;
            }
        }  //dont use foreach because it cannot be stopped without throwing an exception

        // otherwise, substract quantities from stock and return success
        recipe.forEach(([ingredient, required]) => stock[ingredient] -= required);
        return 'Success';
    }

    function report(){
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }
}
