// Structure your code as an IIFE.

// (function arrayExtension(){
//     Array.prototype.last = function(){
//         return this[this.length - 1];
//     }
//     Array.prototype.skip = function(n){
//         let newArr = [];
//         for (let i = n; i < this.length; i++){
//             newArr.push(this[i]);
//         }
//         return newArr;
//     }
//     Array.prototype.take = function(n){
//         let newArr = [];
//         for (let i = 0; i < n; i++){
//             newArr.push(this[i]);
//         }
//         return newArr;
//     }
//     Array.prototype.sum = function(){
//         let sum = 0;
//         for (let i = 0; i < this.length; i++){
//             sum+=this[i];
//         }
//         return sum;
//     }
//  //or instead of sum -> let sum = this.reduce((a,b)=> a +b, 0)
//     Array.prototype.average = function(){
//         return this.sum() / this.length
//     }
// })()

// (function StringExtension(){
//     String.prototype.ensureStart = function(str){
//         if (this.startsWith(str)){
//             return this;
//         } else {
//             return str + this.toString(); //toString() will return new String because it is a requirement
//         }
//     }
//     String.prototype.ensureEnd = function(str){
//         if (this.endsWith(str)){
//             return this;
//         } else {
//             return this.toString() + str;
//         }
//     }
//     String.prototype.isEmpty = function(){
//         return this.length === 0;
//     }
//     String.prototype.truncate = function(n){
//         if  (n <= 3){
//             return '.'.repeat(n);
//         }
//         if (this.toString().length <= n){
//             return this.toString();
//         } else {
//             let lastIndex = this.substring(0, n - 2).lastIndexOf(' ');
//             if (lastIndex !== -1){
//                 return this.substring(0, lastIndex) + '...'
//             } else {
//                 return this.substring(0, n - 3) + '...'
//             }
//         }
//     }
    
//     String.format = function(str, ...params){
//         params.forEach((p,i)=>{
//             str = str.replace(`{${i}}`, p)
//         })
//         return str;
//     }
// })()


// let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');


// function solve() {
//     const proto = {};
    // const inst = Object.create(proto); // inst's prototype is proto
  
    // inst.extend = function (templates) {
    //   Object.entries(templates).forEach(([key, value]) => {
    //     if (typeof value === "function") {
    //       proto[key] = value;
    //     } else {
    //       inst[key] = value;
    //     }
    //   });
    // };
  
    // return inst;
//     console.log(inst.prototype)
// }
// solve()

// function solve(){
//     class Balloon {
//       constructor(color, hasWeight) {
//         this.color = color;
//         this.hasWeight = hasWeight;
//       }
//     }
  
//     class PartyBalloon extends Balloon {
//       constructor(color, hasWeight, ribbonColor, ribbonLenght) {
//             super(color, hasWeight);
//             this.ribbonColor = ribbonColor;
//             this.ribbonLenght = ribbonLenght;
//             this._ribbon = { color: ribbonColor, length: ribbonLenght} 
//         }
  
//       get ribbon() {
//         return this._ribbon;
//       }
//     }
  
//     class BirthdayBalloon extends PartyBalloon {
//       constructor(color, hasWeight, ribbonColor, ribbonLenght, text) {
//         super(color, hasWeight, ribbonColor, ribbonLenght)
//         this._text = text;
//       }
  
//       get text() {
//         return this._text;
//       }
//     }
  
//     return {
//       Balloon,
//       PartyBalloon,
//       BirthdayBalloon,
//     }
// }




// function people(){
//     class Employee {
//         constructor(name, age){
//             if(new.target == Employee){
//                 throw new Error('Cannot make instance of abstract class EMployee.')
//             } //is new object/instance of class Employee -> let m = new Employee
//             this.name = name;
//             this.age = age;
//             this.salary = 0;
//             this.tasks = [];
//         }
//         work(){
//             let currentTask = this.tasks.shift();
//             console.log(this.name + ' ' + currentTask);
//             this.tasks.push(currentTask);
//         }
//         getSalary(){
//             return this.salary;
//         }
//         collectSalary(){
//             console.log(`${this.name} received ${this.getSalary()} this month.`)
//         }
//     }
//     class Junior extends Employee{
//         constructor(name, age){
//             super(name, age)
//             this.tasks.push('is working on a simple task.')
//         }
//     }

//     class Senior extends Employee{
//         constructor(name, age){
//             super(name, age);
//             this.tasks.push('is working on a complicated task.')
//             this.tasks.push('is taking time off work.')
//             this.tasks.push('is supervising junior workers.')
//         }
//     }
//     class Manager extends Employee{
//         constructor(name, age){
//             super(name, age);
//             this.tasks.push("scheduled a meeting.");
//             this.tasks.push("is preparing a quarterly report.");
//             this.dividend = 0;
//         }
//         getSalary(){
//             return super.getSalary() + this.dividend;
//         }
//     }
//     return {
//         Employee,
//         Junior,
//         Senior,
//         Manager
//     }
// }



