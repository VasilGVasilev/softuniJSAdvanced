// function subSum(arr, start, end){
//     if(Array.isArray(arr) == false) {
//         return NaN;
//     }
//     if(start < 0){//clamp
//         start = 0;
//     }
//     if(end > arr.length - 1){
//         end = arr.length - 1;
//     }

//     let sum = 0;
//     for (let i = start; i <= end; i++){
//         sum += Number(arr[i]);
//     }
//     return sum;
// }


// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));



// try catch can catch the error, print it and continue execution of programm

// function demo (){
//     console.log(1);
//     console.log(1);
//     console.log(1);
//     try {
// usually there is a function that has an if statement that sets this error:
//         throw new Error('stop');
// which later is used by the try to check for errors and if present -> catch is executed

//     } catch (err){
//         console.log(err);
//     }
//     console.log(4);
//     console.log(5);
//     console.log(6);
// }

// function start(){
//     console.log('a');
//     console.log('b');
//     demo();
//     console.log('c');
//     console.log('d');
//     console.log('e');
// }

// demo();


// 1
// 1
// 1
// Error: stop
//     at demo (C:\Users\vasko\OneDrive\Desktop\Cod3\softuni-JS-Advanced\advanced\unitTestAndErrorLab.js:31:15)
//     at Object.<anonymous> (C:\Users\vasko\OneDrive\Desktop\Cod3\softuni-JS-Advanced\advanced\unitTestAndErrorLab.js:49:1)
//     at Module._compile (node:internal/modules/cjs/loader:1105:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)    
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47
// 4
// 5
// 6

// factory function is like a constructor function in the sense it returns an Object
// but its different in the no need for new or other syntax, its merely a function

function deck(cards){
    let result = [];
    for (let cardAsString of cards){
        let face = cardAsString.slice(0, -1);
        let suit = cardAsString.slice(-1);

        try {
            let card = createCard(face, suit);
            result.push(card);
        } catch(err){
            result = ['Invalid card: ' + cardAsString]
        }
       
        
    }
    console.log(result.join(' '));
    function createCard(face, suit){
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        let suits = {
            S: '\u2660 ',
            H: '\u2665 ',
            D: '\u2666 ',
            C: '\u2663 ',
        }
        if (faces.indexOf(face) === - 1){
            throw new Error('Invalid face: ' + face + suit);
        }
        if (suits[suit] === undefined){
            throw new Error('Invalid suit: ' + face + suit);
        }
        
        let card = {
            face,
            suits: suits[suit],
            toString(){
                return this.face + this.suits;
            }
        }
        return card
    }
}

deck(['5S', '3D', 'QD', '1C'])