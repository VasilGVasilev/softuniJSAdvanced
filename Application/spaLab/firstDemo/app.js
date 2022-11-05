import {sum} from './module.js'
import Person from './Person.js' //default export can be automatically renamed unlike 'x as y' logic
import * as calc from './calculator.js' //import as object named calc

console.log(sum(4,5))

// this only works on server: liveserver, etc

// if you try to load a module onto browser directly -> CORS error

// there could be functional import but it will return a promise

async function start(){
    const module = await import('./module.js')
}

// cool thing about modules is that nothing escapes into the window Obj
// -> you cannot do get functions or imported functions


console.log(calc.mult(2,5));