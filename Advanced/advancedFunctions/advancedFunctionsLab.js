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



// EXTREMELY HELPFUL OPTIMISATION USING CLOSURE
// INSTEAD OF COLLECTING DATA FROM DOM TREE VIA
// NESTED LOOPS => BIG O QUAD N

// function solve() {
//     const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
//     const [input, output] = Array.from(document.querySelectorAll('textarea'));
//     const tbody = document.querySelector('tbody');

//     generateBtn.addEventListener('click', generate);
//     buyBtn.addEventListener('click', buy);

//     const items = [];

//     // parse input JSON and create table
//     // -- find input textarea
//     // -- parse JSON
//     // -- for every item
//     // ---- create row
//     // ---- append row to table body
//     function generate() {
//         const data = JSON.parse(input.value);

//         for (let item of data) {
//             const row = document.createElement('tr');

//             row.appendChild(createColumn('img', item.img));         // Image column
//             row.appendChild(createColumn('p', item.name));          // Name column
//             row.appendChild(createColumn('p', item.price));         // Price column
//             row.appendChild(createColumn('p', item.decFactor));     // Decoration column

//             // Input column
//             const c5 = document.createElement('td');
//             const checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             c5.appendChild(checkbox);
//             row.appendChild(c5);

//             tbody.appendChild(row);

//             items.push({
//                 ...item,
//                 isChecked
//             });

//             function isChecked() {
//                 return checkbox.checked;
//             }
//         }
//     }

//     // find user choices and summarize purchase
//     // -- find all checked boxes
//     // -- for every box
//     // ---- read data from parent row
//     // ---- append to result
//     // -- output result to textarea
//     function buy() {
//         let list = [];
//         let total = 0;
//         let decoration = 0;

//         const bought = items.filter(i => i.isChecked());

//         for (let item of bought) {
//             list.push(item.name);
//             total += Number(item.price);
//             decoration += Number(item.decFactor);
//         }
//         decoration /= bought.length;

//         output.value = [
//             `Bought furniture: ${list.join(', ')}`,
//             `Total price: ${total.toFixed(2)}`,
//             `Average decoration factor: ${decoration}`
//         ].join('\n');
//     }

//     function createColumn(type, content) {
//         const result = document.createElement('td');
//         let inner;
//         if (type == 'img') {
//             inner = document.createElement('img');
//             inner.src = content;
//         } else {
//             inner = document.createElement('p');
//             inner.textContent = content;
//         }
//         result.appendChild(inner);

//         return result;
//     }
// }


// function solution(first){
//     let number = first;
//     let total = 0;
//     function f(second){
//         total = first + second;
//         return total
//     }
//     return f;
// }

// let add7 = solution(7);
// console.log(add7(2));
// console.log(add7(3));




// Partial Application


// function createFormatter(separator, symbol, symbolFirst, formatter){
//     return (value) => formatter(separator, symbol, symbolFirst, value)
// }

// function currencyFormatter(separator, symbol, symbolFirst, value) {
//     let result = Math.trunc(value) + separator;
//     result += value.toFixed(2).substr(-2,2);
//     if (symbolFirst) return symbol + ' ' + result;
//     else return result + ' ' + symbol;
// }

// let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
// console.log(dollarFormatter(5345));   // $ 5345,00
// console.log(dollarFormatter(3.1429)); // $ 3,14
// console.log(dollarFormatter(2.709));  // $ 2,71










// function filterEmp(input, criteria){
//     let arr = JSON.parse(input);
//     let actualCriteria = criteria.split('-');
//     actualCriteria.shift();
//     actualCriteria = actualCriteria.toString();

//     let newArr = [];

//     if (criteria == 'all'){
//         printing(arr);
//     } else {
//         fillingTheArray();
//         printing(newArr);
//     }

//     function fillingTheArray(){
//         arr.forEach(element => {
//             let valueOfObj = Object.values(element);
//             if(valueOfObj.includes(actualCriteria)){
//                 newArr.push(element)
//             }
            
//         });
//     }
//     function printing(tmpArr){
//         let counter = 0;
//         for (let el of tmpArr){
//             console.log(`${counter++}. ${el["first_name"]} ${el["last_name"]} - ${el["email"]}`);
//         }
//     }

// }

// filterEmp(`[{
//     "id": "1",
//     "first_name": "Kaylee",
//     "last_name": "Johnson",
//     "email": "k0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Johnson",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   }, {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }, {
//     "id": "4",
//     "first_name": "Evanne",
//     "last_name": "Johnson",
//     "email": "ev2@hostgator.com",
//     "gender": "Male"
//   }]`,
//  'all')


// function listPro(arr){
//     // let state = [];
//     // arr.forEach(element => {
//     //     if (element === 'print'){
//     //         console.log(state.join(','));
//     //     } else {
//     //         let data = element.split(' ');
//     //         let command = data.shift();
//     //         let text = data.shift();
//     //         if (command === 'add'){
//     //             state.push(text);
//     //         } else if (command === 'remove'){
//     //             state = state.filter(e => e !== text)
//     //         }
//     //     }
//     // });
//     let state = [];
//     function closureExm(){
        
//         function add(text){
//             state.push(text);
//         }
//         function remove(text){
//             state = state.filter(e => e !== text);
//         }
//         return {
//             add,
//             remove
//         }
//     }

//     for (let el of arr){
//         if (el === 'print'){
//             console.log(state.join(','));
//         } else {
//             let data = el.split(' ');
//             let command = data.shift();
//             let text = data.shift();
//             let closureVar = closureExm();
//             closureVar[command](text);
//         }
//     }
// }
// listPro(['add hello', 'add again', 'remove hello', 'add again', 'print'])



// function cars(input){
//     input.forEach(element => {
//         let element = input.split(' ');
//         let closerVar = closureTmp();
//         closureTmp

//         function closureTmp(){
//             function create(){

//             }
//             function inherit(){

//             }
//             function set(){

//             }
//             function print(){

//             }
//             return {
//                 create,
//                 inherit,
//                 set,
//                 print
//             }
//         }
//     });
    
// }
// cars(['create c1',
// 'create c2 inherit c1',
// 'set c1 color red',
// 'set c2 model new',
// 'print c1',
// 'print c2'])