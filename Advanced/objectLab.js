// function cityO(name, population, treasury){
//     let city = {
//         name: name,
//         population: population,
//         treasury: treasury
//     }
//     console.log(city);
// }
// cityO('Tortuga',
// 7000,
// 15000)

// function townPop(arr){
//     let obj = {};
//     arr.forEach(element => {
//         let data = element.split(' <-> ');
//         let city = data.shift();
//         let km = Number(data.shift());
//         if (!obj.hasOwnProperty(city)){
//             obj[city] = km;
//         } else {
//             obj[city] += km; 
//         }
//     });
//     for (let key in obj){
//         console.log(`${key} : ${obj[key]}`);
//     }
// }
// townPop(['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']
// )

// Const vs Let 
// you cannot change the reference of const, but the ingredient of this reference is changable
// const arr = [1, 2, 3];
//     arr.pop()
//     console.log(arr);
//     >> [1, 2]
// BUT 
// const arr = [1, 2, 3];
//     arr = [2, 3, 4]
//     console.log(arr);
//     >> error
// so changing the elements of the array is legal, but the whole array is constant


// DECONSTRUCTING objects necessitates the same names used in the obj
// it uses the keys as reference to find them
//     let city = {
//         name: name,
//         population: population,
//         treasury: treasury
//     }
//     const {name, treasury} = city;


// two variables can be equal only if they point to the same reference
// in the case of objects
// const fruit = {name:apple}
// const fruitbear = {name:apple}

// fruit == fruitbare >> false
// fruit === fruitbare >> false

// true only if:
// const fruitbare = fruit

// Associative Arrays vs Objects 
// associative arrrays hold instances that have meaning on their own
// objects hold properties of entity that do not have meaning on their own
// object travers for large objects is slower due to being based on hash table
// associative arrays has a locality of data, process cache, all the indexes ar in one place and easier to to map through

// tuples - array of two elements
// object entries logic 


// object better than switch
// INSTEAD OF
// let count = 5;
// switch (command){
//     case 'increment':
//         count++;
//         break;
//     case 'decrement':
//         count--;
//         break;
// }
// DO
// let count = 5;
// const parser = {
//     increment() {count++;},
//     decrement() {count--;}
// }
// parser[command]();

// THIS keyword refers to the same execution context which
// is similar to current instance in OOP, but not always (.self in Python )
// so if we extract the fullName function out of the person object
// namely, her execution context, this will not work as reference to fName/lName
// and it will return undefined because it will refer to the global execution context which doesnt have property name
// in the current case this.fName is like person.fName

// const person = {
//     fName: 'Peter',
//     lName: 'Jackson'
//     fullName() {
//         return this.fName + ' ' + this.lName;
//     }
// }


// function sayHi(){
//     console.log(`${this.name} says hi!`);
// }

// const person = {
//     name: 'Peter',
//     age: 23,
//     sayHi
// };

// const person = {
//     name: 'Peter',
//     age: 23,
//     sayHi(){
//         console.log(`${this.name} says hi!`);
//     }
// };
// console.log(person);

// >> both have { name: 'Peter', age: 23, sayHi: [Function: sayHi] }



// function cityTax (name, population, treasury){
//     const result = {
//         name,
//         population,
//         treasury,
//         taxRate: 10,
//         collectTaxes() {
//             this.treasury += Math.floor(this.population * this.taxRate);
//         },
//         // the (percent) is a parameter that is realised when result.appluGrowth(10) is executed
//         applyGrowth(percent) {
//             this.population += Math.floor(this.population * percent / 100);
//         },
//         applyRecession(percent) {
//             this.treasury -= Math.floor(this.treasury * percent / 100);
//         }
//     }
//     return result;
// }

// combining simple object into more complex ones
// Object composition is superior to OOP inheritance
// due to OOP describes what objects are, not what they do
// in real life better what they are
// in coding better what they do

// in OOP languages if you need a class Device and instances as Printer and Scanner
// and then you realise you also need a Copier that inherits both Printer and Scanner fucntionality
// you cannot do it, except for Python which can on the basis it's a script langauge
// in JS -> you define the print scan functions that you then add to the relevant objects
// this in OOP is only local to class instance and linker works anyway, with JS it can be part of GEC so undefined behaviour

// factory function encapuslates the object so the methods are in the same execution context as the obj, namely, the factory function execution context 
// when using factory functions, every call on it will create new object 
// and with it comes new method so you dont need this keyword
// because you wont have different execution contexts
// but you also lose functionlaity exactly due to not being able to have different execution contexts



// tradeoff
// factory function several heap memory allocations
// object compostion with this keyword -> same heap memory allocation that is reused

// function createRect(width, height){
//     const rect = {width, heaight};
//     rect.getArea = () => {
//         return rect.width * rect.heigth;
//     }
//     return rect;
// }

// one line solution
// map through the orders to attach to an empty object every name of printer and a parts that is about methods 
// return list.map(order => Object.assign({}, order.template, Object.fromEntries(order.parts.map(p=>[p, lib[p]]))));

// function objectFactory(lib, list){
//     const result = [];
//     for (let order of list){
//         const object = {};
//         for (let prop in order.template){
//             object[prop] = order.template[prop];
//         }
// Instead of the above 5 lines
//         const object = Object.assign({}, order.template)

//         for (let part of order.parts){
//              object[part] = lib[part]
//         }

//         result.push(object);
//     }
//     return result;
// }

// const library = {
//     print: function () {
//       console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//       console.log(`${this.name} is scanning a document`);
//     },
//     play: function (artist, track) {
//       console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
//   };
// const orders = [
//     {
//       template: { name: 'ACME Printer'},
//       parts: ['print']      
//     },
//     {
//       template: { name: 'Initech Scanner'},
//       parts: ['scan']      
//     },
//     {
//       template: { name: 'ComTron Copier'},
//       parts: ['scan', 'print']      
//     },
//     {
//       template: { name: 'BoomBox Stereo'},
//       parts: ['play']      
//     }
//   ];
//   const products = objectFactory(library, orders);
//   console.log(products);




// decorator function:
// you make an object and add it to a function that is specially desigend
// for the object to be put in and to add a method to it only (reference is embedded so no need for this keyword)

// function canPrint(device){
//     device.print = () => {
//         console.log(`${device.name} is printing a page`);
//     }
// }
// const printer = { name: 'ACME Printer'};
// canPrint(printer);
// printer.print()

// basically, CLOSURE:
// A closure is the combination of a function bundled together 
// (enclosed) with references to its surrounding state (the lexical 
// environment). In other words, a closure gives you access to an 
// outer function's scope from an inner function. 
// here, print has access to canPrint's device prop through scope


// JSON is just for data, methods cannot get serialised 

// function JSONtoHTML(str){
//     let arr = JSON.parse(str);
 
//     let outputArr = ['<table>'];
//     outputArr.push(makeKeyRow(arr));
//     arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
//     outputArr.push('</table>');
 
//     console.log(outputArr.join('\n'));
 
//     function makeKeyRow(arr) {
//         let result = '  <tr>';
//         Object.keys(arr[0]).forEach(key => {
//             result += `<th>${escapeHtml(key)}</th>`;
//         });
//         result += '</tr>';
//         return result;
//     }
 
//     function makeValueRow(obj) {
//         let result =  '  <tr>';
//         Object.values(obj).forEach(value => {
//             result += `<td>${escapeHtml(value)}</td>`;
//         });
//         result += '</tr>';
//         return result;
//     }
 
//     function escapeHtml(value) {
//         return value
//             .toString()
//             .replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#39;');
//     }
// }
// JSONtoHTML(`[{"Name":"Stamat",
//     "Score":5.5},
//    {"Name":"Rumen",
//     "Score":6}]`
// )



// function createAssemblyLine() {

//     return {
//       hasClima: (car) => {
//         car.temp = 21;
//         car.tempSettings = 21;
//         car.adjustTemp = () => {
//           if (car.temp < car.tempSettings) {
//             car.temp++;
//           } else if (car.temp > car.tempSettings) {
//             car.temp--;
//           }
  
//         };
//       },
//       hasAudio: (car) => {
//         car.currentTrack = {'name': '', 'artist': ''};
//         car.nowPlaying = () => {
//           if (car.currentTrack !== null) {
//             console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
//           }
//         };
//       },
//       hasParktronic: (car) => {
//         car.checkDistance = (distance) => {
//           if (distance < 0.1) {
//             console.log('Beep! Beep! Beep!');
//           } else if (distance >= 0.1 && distance < 0.25) {
//             console.log('Beep! Beep!');
//           } else if (distance >= 0.25 && distance < 0.5) {
//             console.log('Beep!');
//           } else {
//             console.log('');
//           }
//         };
//       }
//     };
//   }