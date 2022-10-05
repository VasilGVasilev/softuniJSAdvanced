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


// STRICT MODE CLASS 
// body of class defined object is in strict mode

// static METHOD - give functionality to classes, they dont usually have one, the are a template whose instances have functionality
// only on instance of object (class Person, not on guy1, guy2), 
// thus, cannot be called like this: guy1.printType() // strict printType()
// onlu like this: Person.printType()


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
// get READ ONLY





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
// When you use the same name for the getter -> radius in constructor 
// get overwritten but the return of the getter function refers to 
// a this.radius which automatically refers to the name of the getter function
// and you enter into an infinite loop

// class Circle {
//     constructor(radiusValue){
//         this.radiusKey = radiusValue;
//     }
//     get r(){
//         return this.radiusKey;
//     }
// }

// const point = new Circle(2);

// console.log(point.r);

// point.r goes to get r()
// get r searches for this.radiusKey
// get r finds this.radiusKey in constructor
// this.radiusKey is Circle { radiusKey: radiusValue}

// industry practice:
// class Circle {
//     constructor(radius){
//         this._radius = radius;
//     }
//     get radius(){
//         return this._radius;
//     }
//     get diameter(){
//         return this._radius * 2;
//     }
// }

// namely:
// create variable _radius to be key in Circle through this._radius similar to Circle._radius
// when get radius() is triggered it returns that very variable _radius
// if you aet it with the same name as the function 'radius'
// the radius() function will return itseld -> infinite loop,
// instead industry practice makes it go above and search in constructor


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

