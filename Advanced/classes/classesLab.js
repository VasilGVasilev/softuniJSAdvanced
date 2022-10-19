// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHi(){
//         console.log(`${this.name} says hello!`);
//     }
// }

// const guy1 = new Person('Azis', 40);
// const guy2 = new Person('Vanko', 40);
// const guy3 = {
//     name: 'May',
//     age: 23,
//     sayHi(){
//         console.log(`${this.name} says hello!`);
//     }
// }

// console.log(guy1); //Person { name: 'Azis', age: 40 }
// console.log(guy3); //{ name: 'May', age: 23, sayHi: [Function: sayHi] }

// class objects do not store the function within themselves, 
// only the class stores the method, the objects share a reference to it
// console.log(guy1.sayHi === guy2.sayHi); -> true



// class Person{
//     constructor(firstName, lastName, age, email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }
//     toString(){
//         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
//     }
// }
// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// console.log(person.toString());

// PRIVATE ATTRIBUTE
// there is a way to make properties private #
// class Person {
// #firstName
// constructor(firstName, lastName, age, email){
//     this.#firstName = firstName;
// }
// }

// console.log(person.fristname); reach outside of class Person is impossoble due to #firstName

// BEWARE WHERE YOU EXPECT CALCULATIONS OF AUTOUPDATE:
// class Circle {
//     constructor(radius){
//         this.radius = radius;
//         this.diameter = radius * 2;
//     }
// }
// const c = new Circle(5);
// console.log(c.diameter); >> 10
// c.radius = 6;
// console.log(c.diameter); >> 12
// Thus, the diameter doesnt reflect automatically on the changes of radius so that when radius is updated, this.diameter is also updated;
// !!!!!!!!!!!!!!!diameter is calculated at the moment of creation

// class Circle {
//     constructor(radius){
//         this.radius = radius;
//     }
//     getDiameter{
//         return this.radius * 2;
//     }
// }
// const c = new Circle(5);
// console.log(c.diameter); >> 10
// c.radius = 6;
// console.log(c.diameter); >> 12
// !!!!!!!!!!!!!!!diameter is calculated at the moment of parsing


// STRICT MODE CLASS 
// body of class defined object is in strict mode

// static METHOD - give functionality to classes, they dont usually have one, they are a template whose instances have functionality
// only on instance of object (class Person, not on guy1, guy2), 
// thus, cannot be called like this: guy1.printType() // strict printType()
// only like this: Person.printType()


// class Circle {
//     constructor(r){
//         this.r = r;
//     }
//     get radius(){
//         return this.r;
//     }
//     get diameter(){
//         return this.r * 2;
//     }
//     set diameter(value){
//         this.r = value / 2;
//     }
//     get area(){
//         return this.r ** 2 * Math.PI;
//     }
// }

// let c = new Circle(2);
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`); //get diameter()
// console.log(`Area: ${c.area}`);
// c.diameter = 1.6; //set diameter()
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);

// SET and GET - Accessories
// set and get as a means to treat class-based objects' methods as properties
// set - WRITE ON
// get - READ ONLY


// >>>>>>>>>>>>>>   NOTE A POSSIBLE BUG this.radius && get radius()
// class Circle {
//     constructor(radius){
//         this.radius = radius;
//     }
//     get radius(){
//         return this.radius;
//     }
//     get diameter(){
//         return this.radius * 2;
//     }
// }
// const c = new Circle(5);
// c.radius
// what does c.radius call ?
// since we have written GET RADIUS accessor that has the same name (radius)
// as the property RADIUS IN CONSTRUCTOR, the GET RADIUS accessor actually
// overwrites the RADIUS IN CONSTRUCTOR, so when call c.radius 
// the program goes to GET RADIUS property and return this.radius which searches
// for this radius but since the RADIUS IN CONSTRUCTOR is overwritten
// it returns the very same GET RADIUS accessor

// NB return var should not be the same name as the get/set acessor name 


// BETTER industry practice: {the property that holds data //in constructor// needs _ in front of name}
// class Circle {
//     constructor(radius){
//         this._radius = radius; <----------
//     }
//     get radius(){
//         return this._radius; <-----------
//     }
//     get diameter(){
//         return this._radius * 2;
//     }
// }




// class Point {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     static distance(p1, p2){
//         return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
//     }
// }

// const point1 = new Point(1,1);
// const point2 = new Point(4,5);
// 95/100
//  function getPersons(){
//     class Person{
//         constructor(firstName, lastName, age, email){
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.age = age;
//             this.email = email;
//         }
//         static toString(){
//             return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
//         }
//     }
//     return [
//         new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
//         new Person('SoftUni'),
//         new Person('Stephan', 'Johnson', 25),
//         new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
//     ]
//  }

// const myMap = new Map();

// myMap.set('first', 5);
// myMap.set('second', 6);

// console.log(myMap.entries[0]); >> undefined because entries returns an iterator not an array


// let set = new Set([1, 2, {'key': 'value'},{'key': 'value'}, 2]) >> every object is unique
// console.log(set);


// modal with DOM class:

// class Modal{
//     constructor(message){
//         this.message = message;
//         this.element = this._init();
//     }
//     _init(){
//         const overlay = document.createElement('div');
//         overlay.className = 'overlay';
//         overlay.innerHTML = '<div class="modal"><p>${this.message}</p><button>OK</button></div>'
//         return overlay; 
//     }

// }
// function create() {
//     const modal = new Modal('this is a message');

//     document.body.appendChild(modal.element);
// }

