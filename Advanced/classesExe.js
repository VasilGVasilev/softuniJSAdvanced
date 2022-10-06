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

class List{
    constructor(){
        this.arr = [];
        this.size = this.arr.length;
    }
    add(value) {
        this.arr.push(value);
        this.arr = this.arr.sort((a,b) => a - b)
        this.size = this.arr.length
    }
    remove(index){
        this.arr = this.arr.sort((a,b) => a- b)
        if (index >= this.arr.length || index < 0){
            throw new Error('invalid index')
        } else {
            return this.arr.splice(index, 1);
        }
        
    }
    get(index){
        this.arr = this.arr.sort((a,b) => a- b)
        if (index >= this.arr.length || index < 0){
            throw new Error('invalid index')
        } else {
            return this.arr[index];
        }
    }
}




let list = new List();


list.add(5);
list.add(3);
console.log(list.get(0));
list.remove(0);
console.log(list);

