// function even(arr){
//     let newArr = [];
//     for (let i = 0 ; i < arr.length; i++){
//         if(i % 2 === 0){
//             newArr.push(arr[i]);
//         }

//     }
//     console.log(newArr.join(' '));
// }
// even(['20', '30', '40', '50', '60'])

// function even(arr){
//     let newArr = [];
//     for (let i = 0 ; i < arr.length; i++){
//         if(i % 2 === 0){
//             newArr.push(arr[i]);
//         }

//     }
//     newArr[-1] ='apples'
//     console.log(newArr);
//     //>> [ '20', '40', '60', '-1': 'apples' ]
//     // setting valies vie non-integers using bracket notation creates OBJECT properties instead of array elements

// }
// even(['20', '30', '40', '50', '60'])

// REST operator
// let nums = [1, 2, 3, 4];
// let [a, b, ...elems] = nums;
// elems >> [3, 4];
// rest operator unpacks values from arrays or objects

// rest operator takes the rest and puts the into an array
// spread spreads the array into function, deconstruction or whatever action is done
//  1, 2, 3 to one array that is then looped through Rest
//  1, 2, 3 that are spread to each variable in deconstructing Spread
// spread is a possible way to make a copy of an array instead of .slice() but be AWARE for nodelist to array it doesnt work

// .sort() explained 
// [7, 3]
// if return is positive number => sort a after b
// if return is negative or 0 => sort a before b
// function compare(a, b){
//     if (a > b){
//         return 1;
//         // change => a goes after b  || 7 > 3 so change 7 goes after 3
//         [3, 7]
//     } else if (a < b){
//         return -1;
//         // no change =  a stays before b || 3 < 7 so no change 3 stays before 7
//     }
// }
// More efficient - arithemtically
// function compare(a, b){
//     a - b
//     if result is negitve or 0 => nochange stay the same
//     if result is positive => change swap
// }



// function fibb(n, k){
//     function solve(length, previousNumbers) {
//         let resultArr = [1];
//         for (let index = 1; index <= length - 1; index++) {
//             let start = index - previousNumbers < 0 ? 0 : index - previousNumbers;
//             let sum = resultArr.slice(start, index).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
//             resultArr.push(sum);
//         }
    
//         // for (let index = 1; index <= length - 1; index++) {
//         //     let sum = 0;
//         //     let currIndex = index - 1;
//         //     for (let i = 1; i <= previousNumbers; i++) {
//         //         let number = resultArr[currIndex] == undefined ? 0 : resultArr[currIndex];
//         //         currIndex--;
//         //         sum += number;
//         //     }
//         //     resultArr.push(sum);
//         // }
//         return resultArr;
//     }
// }

// fibb(6, 3)

// function firstLast(arr){
//     let first = Number(arr.shift());
//     let last = Number(arr.pop());
//     let sum = first + last;
//     console.log(sum);
// }

// firstLast(['20', '30', '40']);



// function negPos(arr){
//     let result = [];
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             result.unshift(arr[i]);
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     for (let i of result){
//         console.log(i);
//     }
// }

// negPos([7, -2, 8, 9])

// function smallestTwo(arr){
//     let sortedArr = arr.sort((a,b)=>a-b)
//     sortedArr.splice(2);
//     console.log(sortedArr.join(' '));
// }

// smallestTwo([30, 15, 50, 5])


// function biggerH(arr){
//     let sortedArr = arr.sort((a,b)=>a-b)
//     let mid = sortedArr.length / 2;
//     let result = [];
//     if (sortedArr.length % 2 === 0){
//          result = sortedArr.slice((mid));
//     } else {
//         mid = Math.ceil(mid);
//         result = sortedArr.slice(mid);
//     }
//     console.log(result);
// }

// biggerH([3, 19, 14, 7, 2, 19, 6])

// slice shallow copy explained
// Objects will reflect change in the original place 
// from where they were shallowly copied because they 
// are stored as references (to their address in the Heap).

// Primitive data types will NOT reflect change in 
// the original place because they are directly stored in 
// the callstack (in Execution Contexts)


// function piece(arr, start, end){
//     let indexStart = arr.indexOf(start);
//     let indexEnd = arr.indexOf(end) + 1;
//     return arr.slice(indexStart, indexEnd);
// }

// piece(['Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie');


// function processOdd(arr){
//     let oddArr = arr.filter((_, index) => index % 2 !== 0).map((e)=>e * 2)
//     let res = oddArr.reverse().join(' ')
//     console.log(res);;
//     // NB the _ in filter((_,i)) - common denotion of unused parameter, which is in this case the element, but you need index
// }

// processOdd([10, 15, 20, 25]);

// some() tests wheater AT LEAST ONE element in the array passes the test implemented by a function


// function biggest(arr){
//     let biggest = -1000000;
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr[i].length; j++){
//             if (arr[i][j] > biggest){
//                 biggest = arr[i][j];
//             }
//         }
//     }
//     console.log(biggest);
// }

// biggest([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]
//    );


// .reduce()
// .reduce( reducingFunc , accumulator ) accumulator is like sum = 0;
// accumulator is just inital value

// const myArr = [10, 20, 30, 40];

// const result = myArr.reduce(reducingFunc, 10);

// console.log(result);
// // 0 is accumulator and value is first element in an array
// function reducingFunc(accumulator, value){
//     return accumulator+value;
// }


// matrix is a nested array 
// jagged matrix is one that doesnt form a square when visualised Ex. 3 row 3 columns

// const matrix = [
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]
// ];
// for (let row of matrix ){
//     console.log(row);
// }



// function diag(arr){
//     let fDiagSum = 0;
//     let sDiagSum = 0;
//     for(let i = 0; i < arr.length; i++){
//         let j = i;
//         fDiagSum+=arr[i][j]
//         sDiagSum+=arr[((arr.length - 1)-i)][j]
//     }
//     console.log(fDiagSum, + ' ' + sDiagSum);
// }

// diag(
// [[3, 5, 17],
//  [-1, 7, 14],
//  [1, -8, 89]]
// );