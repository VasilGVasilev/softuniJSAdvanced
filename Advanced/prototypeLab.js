// every object has 4 internal properties:
// 'use strict'; use this to show the error when you define
// obj as non-writable but try to overwrite it

// obj = {
//     name: 'peter',
//     age: 23
// }

// console.log(Object.getOwnPropertyDescriptors(obj));
// >>
// {
//     name: {
//       value: 'peter',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 23, writable: true, enumerable: true, configurable: true }
// }

// Change one of them:

// Object.defineProperty(obj, 'age', {
//     writbale:false 
// })
// obj.age = 25;

// !!!! BUT if you change it, JSON.stringify will not catch the changed property

// writbale:false -> make it immutable
// enumerable.false -> doesnt show on obj console.log
// configurable.false -> cannot change other property flag's values Ex. if enumarable: false, cannot re-define enumerable: true;
// value -> use it to create a new property, but also set other properties to true


// The Object.seal() method seals an object. Sealing an object prevents 
// extensions and makes existing properties non-configurable (defining new objects with value or setting properties enumarble, wirtable, configurable) 
// Values of existing properties can still be changed as long as they are writable.
// const object1 = {
//     property1: 42
//   };
  
//   Object.seal(object1);
//   object1.property1 = 33;
//   console.log(object1.property1);
//   // expected output: 33
  
//   delete object1.property1; // cannot delete when sealed
//   console.log(object1.property1);
//   // expected output: 33


// The Object.freeze() method freezes an object. Freezing an object 
// prevents extensions and makes existing properties non-writable 
// and non-configurable. The object's prototype cannot be re-assigned.
// const obj = {
//     prop: 42
//   };
  
//   Object.freeze(obj);
  
//   obj.prop = 33;
//   // Throws an error in strict mode
  
//   console.log(obj.prop);
//   // expected output: 42





// interesting point with getter 

// Object.defineProperty(obk, 'lastName', {
//     get: ()=> 'jackson',
//     enumarble: true,
//     configurable: true
// })

// console.log(obj.lastname);
// >>jackson
// obj.lastname = 'johnson'
// >> error cannot set property


// why use these 4 properties in practice?
// to delete and set new data altogether
// the world prefers statelessness so data is made immutable
// thus the only way to update is to delete and create new 
// -> redux works like that, as a state managment framework
// objects are reference types so you can use comparison
// to check that there is a new object and not that the old one is updated
// Observable collection

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName(){
//         return this.firstName + ' ' + this.lastName;
//     }
//     set fullName(value){
//         [this.firstName, this.lastName] = value.split(' ');
//     }


// the above is syntax sugar, but get and set are done by the engine with a 
// factory fucntion to set the const obj = {name, lastname}
// and Object.defineProperty(person, 'fullname', {get(), set()})

// }
// let person = new Person("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla




//                           Prototype

// Prototype chain
// problem: extend One obj to another obj 
// solution: both have the same prototype -> Object 

// -----------COMPOSITION

// function personAndTeacher() {
//     function Person(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     function Teacher(name, email, subject){
//         Person.call(this, name, email);
//         this.subject = subject;
//     }

//     Teacher.prototype = Object.create(Person.prototype)
//     Teacher.prototype.constructor = Teacher// necessary to set it

//     console.log(Object.getPrototypeOf(Teacher));//{} Object
//     console.log(Object.getPrototypeOf(Teacher) === Object.getPrototypeOf(Person)); //true
    
//     let p = new Teacher('bobi', 'email', 'history')
//     console.log(p);
// }

// personAndTeacher();


// -------------INHERITANCE

// function personAndTeacher() {
//     class Person {
//         constructor(name, email){
//             this.name = name;
//             this.email = email;
//         }
//     }

//     class Teacher extends Person {
//         constructor(name, email, subject){
//             super(name, email);
//             this.subject = subject;
//         }
//     }

//     return {
//         Person,
//         Teacher
//     }
// }

//          INHERITANCE VS COMPOSITION

// INSTEAD OF:
//     Person.call(this, name, email);
//     Teacher.prototype = Object.create(Person.prototype)
//     Teacher.prototype.constructor = Teacher// necessary to set it
// DO THIS:
//     class Teacher extends Person {
//     super(name, email);







// function extendPrototype(classDef){
//     classDef.prototype.species = 'Human';
//     classDef.prototype.toSpeciesString = function(){
//         return `I am a ${this.species}. ${this.toString()}`
//     }
// }
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.toString = function(){
//     return `To string method from prototype of ${this.name}`;
// }

// extendPrototype(Person);


// function toStringExtension() {
//     class Person {
//         constructor(name, email){
//             this.name = name;
//             this.email = email;
//         }
//         toString(){
//             return `Person (name: ${this.name}, email: ${this.email})`
//         }
//     }
//     class Student extends Person{
//         constructor(name, email, course){
//             super(name, email)
//             this.course = course;
//         }
//         toString(){
//             return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
//         }
//     }
//     class Teacher extends Person{
//         constructor(name, email, subject){
//             super(name, email)
//             this.subject = subject;
//         }
//         toString(){
//             return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
//         }
//     }
//     return {
//         Person,
//         Teacher,
//         Student
//     }
// }
// toStringExtension()





// you can also override methods by using the word #super#
// if you use the same name of method 

// function toStringExtension() {
//     class Person {
//         constructor(name, email){
//             this.name = name;
//             this.email = email;
//         }
//         toString(){
//             return `Person (name: ${this.name}, email: ${this.email}).`
//         }
//     }
//     class Student extends Person{
//         constructor(name, email, course){
//             super(name, email)
//             this.course = course;
//         }
//         toString(){
//             return super.toString() + `Their course: ${this.course})`
//         }
//     }
//     let t = new Student('Ivan', 'ivan@ivan', 'Graphics')
//     console.log(t);
//     return {
//         Person,
//         Student
//     }
// }

// toStringExtension()

