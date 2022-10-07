// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     calcArea(){
//         return this.height * this.width;
//     }
// }


// let rect = new Rectangle(4, 5, 'Red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());


// class Request{
//     constructor(method, uri, version, message){
//         this.method = method;
//         this.uri = uri;
//         this.version = version;
//         this.message = message;
//         this.response = undefined;
//         this.fulfilled = false;
//     }

// }



// function tickets(arr, order){
//     let arrOfObj = [];
//     class Tickets{
//         constructor(destination, price, status){
//             this.destination = destination;
//             this.price = price;
//             this.status = status;
//         }
//     }
//     for (let instanceOfClass of arr){
//         let [destination, price, status] = instanceOfClass.split('|');
//         price = Number(price);
//         const p = new Tickets(destination, price, status);
//         arrOfObj.push(p);
//     }
//     if (order === 'destination' || order === 'status'){
//         let orderOfArr = arrOfObj.sort((a,b)=> a[order].localeCompare(b[order]));
//         return orderOfArr;
//     } else {
//         let orderOfArr = arrOfObj.sort((a,b)=> a[order] - b[order]);
//         return orderOfArr;
//     }
    
// }

// tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status'
// )
// in the constructor:
//  this.size saves a primitive // number
// this.arr saves a reference // obj
// methods affect the this.arr and the arr direclty
// those effects do not correspond automatically on the
// this.size, arr.length, it needs to be set to a new number manually
// class List{
//     constructor(){
//         this.arr = [];
//         this.size = this.arr.length;
//     }
//     add(value) {
//         this.arr.push(value);
//         this.arr = this.arr.sort((a,b) => a - b)
//         this.size = this.arr.length
//     }
//     remove(index){
//         if (index >= this.arr.length || index < 0){
//             throw new Error('invalid index')
//         } else {
//             this.arr.splice(index, 1);
//             this.size = this.arr.length
//         }
//     }
//     get(index){
//         if (index >= this.arr.length || index < 0){
//             throw new Error('invalid index')
//         } else {
//             return this.arr[index];
//         }
//     }
// }




// let list = new List();
// list.add(5);
// console.log(list.get(0)); 
// list.add(3);
// list.remove(0);
// console.log(list.get(0));
// console.log(list.size);



// class Stringer{
//     constructor(str, length){
//         this.innerString = str;
//         this.innerLength = length;
//     }
//     increase(length){
//         this.innerLength += length;
//     }
//     decrease(length){
//         this.innerLength -= length;
//         if (this.innerLength < 0){
//             this.innerLength = 0;
//         }
//     }
//     toString(){
//         if (this.innerString.length > this.innerLength){
//             return this.innerString.substring(0, this.innerLength) + '...';
//         } else {
//             return this.innerString;
//         }
//     }

// }

// let test = new Stringer("Test", 2);
// console.log(test.toString()); // Test

// class Company{
//     departments = {};
//     addEmployee(name, salary, position, department){
//         if (arguments === undefined || arguments === null || arguments === ''){
//             throw new Error('Invalid input!');
//         }
//         if (salary < 0){
//             throw new Error('Invalid input!');
//         }
//         if (!this.departments.hasOwnProperty(department)){
//             this.departments[department] = [[name],[salary], [position]];
//         } else {
//             this.departments[department][0].push(name)
//             this.departments[department][1].push(salary)
//             this.departments[department][2].push(position)
//         }
//     }

//     bestDepartment(){
//         for (let [dep, arrInDep] of Object.entries(this.departments)){
//             let avg = 0;
//             arrInDep[1].map(e=>{
//                 avg+=e;
//             });
//             arrInDep[1] = [avg];
            
//         }
//         this.departments.sort((a,b)=>a[1] - b[1]);
//         console.log(this.departments);
//     }
    
// }

// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());


// class Hex {
//     constructor(x){
//         this.param = x;
//     }
//     valueOf(){
//         return this.param;
//     }
//     plus(obj){
//         let result = this.param + Number(obj.valueOf());
//         return new Hex(result);
//     }
//     minus(obj){
//         let result = this.param - Number(obj.valueOf());
//         return new Hex(result);
//     }
//     toString(){
//         return '0x' + this.param.toString(16).toUpperCase();
//     }
//     parse(str){
//         return parseInt(str, 16)
//     }
// }

// let FF = new Hex(255);
// console.log(FF.toString());
// FF.valueOf() + 1 == 256;
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString()==='0xF');
// console.log(FF.parse('AAA'));

// function juice(arr){
//     let juices = {};
//     let bottles = {};

//     function createBottles(flavour){
//         if(juices[flavour] >= 1000){
//             if(!bottles.hasOwnProperty(flavour)){
//                 bottles[flavour] = 0;
//             }
//             let numberOfBottles = Math.floor(juices[flavour] / 1000);
//             bottles[flavour] += numberOfBottles;
//             let qtyLeft = juices[flavour] - (numberOfBottles * 1000);
//             juices[flavour] = qtyLeft;
//         }
//     }

//     for (let line of arr){
//         let [flavour, qty] = line.split(' => ');
//         if(!juices.hasOwnProperty(flavour)){
//             juices[flavour] = 0;
//         }
//         juices[flavour] += Number(qty);
//         createBottles(flavour);
//     }
    
//     for(let [key, value] of Object.entries(bottles)){
//         console.log(`${key} => ${value}`);
//     }
// }
// juice(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']
// )


// function auto(arr){
//     let objOfCars = {};
//     for(let line of arr){
//         let [brand, model, qty] = line.split(' | ');
//         if(!objOfCars.hasOwnProperty(brand)){
//             objOfCars[brand] = {};
//         }
//         if(!objOfCars[brand].hasOwnProperty(model)){
//             objOfCars[brand][model] = Number(qty);
//         } else {
//             objOfCars[brand][model] += Number(qty);
//         }
//     }
//     for(let brand in objOfCars){
//         console.log(`${brand}`);
//         for(let model in objOfCars[brand]){
//             console.log(`###${model} -> ${objOfCars[brand][model]}`);
//         }
//     }
// }
// auto(['Audi | Q7 | 1000',
// 'Audi | Q6 | 100',
// 'BMW | X5 | 1000',
// 'BMW | X6 | 100',
// 'Citroen | C4 | 123',
// 'Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000',
// 'Lada | Jigula | 1000000',
// 'Citroen | C4 | 22',
// 'Citroen | C5 | 10']
// )