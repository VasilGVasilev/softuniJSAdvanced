// you put in the object with .call() to take advantage of the this.x and this.y 
// function areaVol(areaIn, volIn, input){
//     let parsedInput = JSON.parse(input);
//     let resultArr = [];
//     for (let cube of parsedInput){
//         let current = {
//             area: areaIn.call(cube),
//             volume: volIn.call(cube)
//         }
//         resultArr.push(current)
//     }
//     return resultArr;
// }

// areaVol(area, vol, `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`
//     );
// areaVol(area, vol, `[
//     {"x":"10","y":"-22","z":"10"},
//     {"x":"47","y":"7","z":"-5"},
//     {"x":"55","y":"8","z":"0"},
//     {"x":"100","y":"100","z":"100"},
//     {"x":"55","y":"80","z":"250"}
//     ]`
//     )

// function area() {
//     return Math.abs(this.x * this.y);
// };

// function vol() {
//     return Math.abs(this.x * this.y * this.z);
// };
// the exercise emphasises that you are given input functions that are
// supposed to be executed with the given context



// function solution(){
//     let state = '';

//     function append(str){
//         state += str;
//     }

//     function removeStart(n){
//         state = state.slice(n);
//     }

//     function removeEnd(n){
//         state = state.slice(0, -n);
//     }

//     function print(){
//         console.log(state);
//     }
// // you need return so that you can access the object 
// // with functions through the fucntion expression => firstZeroTest.append
// // this exercise shows how the closure works
// // you return an object with functions to maintain the access to them
// // the state variable is in the heap and also accessible\
// // REMEMBER:
// //  -> make a var that will be saved in heap through closure obj
// //  -> make functions
// //  -> return them or return an object with them 

//     return {
//         append,
//         removeStart,
//         removeEnd,
//         print
//     }
// }
// let firstZeroTest = solution();

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();



1:23:43