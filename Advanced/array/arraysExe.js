// function givenDelimiter(arr, del){
//     let result = arr.join(del)
//     console.log(result);
// }
// givenDelimiter(['One', 
// 'Two', 
// 'Three', 
// 'Four', 
// 'Five'], 
// '-'
// );


// function everyN(arr, num){
//     return arr.filter((_, index) => index % num == 0);
// }
// everyN(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2
// );



// function addRemove(arr){
//     let newArr = [];
//     let num = 0;
//     for (let i = 0 ; i < arr.length; i++){
//         num++;
//         let command = arr[i];
//         if(command == 'add'){
//             newArr.push(num);
//         } else if (command == 'remove'){
//             newArr.pop();
//         }
//     }
//     if (newArr.length === 0){
//         console.log('Empty');
//     } else {
//         console.log(newArr.join('\n'));
//     }
// }
// addRemove(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']
// );



// function rotate(arr, num){
//     for (let index = 0; index < num; index++) {
//         arr.unshift(arr.pop());
//     }
//     console.log(arr.join(' '));
// }
// rotate(['1', 
// '2', 
// '3', 
// '4'], 
// 2
// );



// function extract(arr){
//     let result = [];
//     let biggest = arr[0];
//     for (let index = 0; index < arr.length; index++) {
//         let currentNum = arr[index];
//         if(currentNum >= biggest){
//             result.push(currentNum);
//             biggest = currentNum;
//         }
//     }
//     return result
// }

// extract([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24])

// reduce
// function extract(arr){
//     let biggest = arr[0];
//     let newArr = [];
//     let sum = arr.reduce(reducer, 0);
//     function reducer(accum, nextVal){
//         if(nextVal >= accum){
//             biggest = nextVal;
//             newArr.push(biggest);
//             return biggest;
//         } else {
//             return accum;
//         }
        
//     }
//     console.log(newArr);
// }

// extract([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24])

// function listN(names){
//     let s = names.sort((a,b)=>a.localeCompare(b));
//     for (let index = 0; index < s.length; index++) {
//         console.log(`${index + 1}.${s[index]}`);
//     }
// }
// listN(["John", "Bob", "Christina", "Ema"]);


// function sortN(arr){
//     let newArr = arr.sort((a,b)=>b-a);
//     let finalArr = [];
//     while (newArr.length !== 0){
//         finalArr.push(newArr.pop());
//         finalArr.push(newArr.shift());
//     }
//     return finalArr;
// }
// sortN([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);



// function sortByTwo(arr){
//     let finalArr = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
//     for (let e of finalArr){
//         console.log(e);
//     }
// }
// sortByTwo(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']

// )


// function magicM(arr){
//     let sumRow = 0;
//     let sumCol = 0; 
//     let sumArrRow = [];
//     let sumArrCol = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sumRow+=arr[i][j];
//         }
//         sumArrRow.push(sumRow);
//         sumRow = 0;
//     }
//     for (let k = 0; k < arr.length; k++) {
//         for (let l = 0; l < arr[k].length; l++) {
//             sumCol+=arr[l][k];
//         }
//         sumArrCol.push(sumCol);
//         sumCol = 0;
//     }
//     const rowF = (currentValue) => currentValue === sumArrRow[0];
//     const colF = (currentValue) => currentValue === sumArrCol[0];
//     let rowB = sumArrRow.every(rowF);
//     let colB = sumArrCol.every(colF)

//     if(rowB && colB){
//         return 'true';
//     } else {
//         return 'false';
//     }

// }
// magicM([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
   
//    );