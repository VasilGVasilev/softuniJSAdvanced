import {sum} from './module.js'

console.log(sum(4,5))

// this only works on server: liveserver, etc

// if you try to load a module onto browser directly -> CORS error