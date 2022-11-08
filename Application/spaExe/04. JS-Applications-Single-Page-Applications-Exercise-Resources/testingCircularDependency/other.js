import { sum } from './app.js'

export function firstN(){
    return 5;
}

let result = sum();

console.log(result);

// Uncaught ReferenceError: can't access lexical declaration 'sum' before initialization
// you have circular depenancy index makes app.js the central module
// app.js module can have its logic abstracted to other.js
// you can export a function in other.js, export it, and import it in app.js
// BUT YOU CANNOT import a function into app.js since it is the parent of all modules (by having attribute -> type="module");
