export function sum(a,b){
    return a+b;
}

// export {
//     sum
// }

// is not the same as 

// module.exports = {
//     sum
// }

// thus, not an object

// so no 

// export {
//     newSumName: sum
// }

// BUT legacy way is:

// export default {
//     newSumName: sum //valid object
// }

// best practice is to name the export in curly braces
// so that you can have it neatly organised

// const calcSum = {
//     sum
// }

// export calcSum;