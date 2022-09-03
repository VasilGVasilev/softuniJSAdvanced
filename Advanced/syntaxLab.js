// function echo(s){
//     console.log(s.length);
//     console.log(s);
// }
// echo('sadasd');

// function strLen(f, s, t){
//     let sumLen = f.length + s.length + t.length;
//     let avg = (sumLen / 3);
//     console.log(sumLen);
//     console.log(Math.floor(avg));
// }
// strLen('chocolate', 'ice cream', 'cake');

// function largestNum(f, s, t){
//     let lnum;
//     if(f > s && f > t){
//         lnum = f;
//     } else if(s > f && s > t){
//         lnum = s;
//     } else if(t > f && t > s){
//         lnum = t;
//     }
//     console.log(`The largest number is ${lnum}.`);
// }
// largestNum(5, -3, 16);


// function circleArea(input){
//     let inputType = typeof(input);
//     if(typeof input === 'number'){
//         let result = Math.pow(input, 2) * Math.PI;
//         console.log(result.toFixed(2));
//     } else {
//         console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
//     } 
// }
// circleArea('sd');

// function mathOp(f, s, operator){
//     let result;
//     switch (operator) {
//         case '+':
//           result = f + s;
//           break;
//         case '-':
//             result = f - s;
//             break;
//         case '/':
//             result = f / s;
//             break;
//         case '*':
//             result = f * s;
//             break;
//         case '%':
//             result = f % s;
//             break;
//         case '**':
//             result = f ** s;
//             break;
//       }    
//       console.log(result);  
// }
// mathOp(5, 6, '+');



// function sumOFNumNM(n, m){
//     let start = Number(n);
//     let end = Number(m);
//     let sum = 0;
//     for (let i = start; i <= end; i++){
//         sum+=i;
//     }
//     return sum;
// }
// sumOFNumNM('1', '5')



// function daysOfWeek(input){
//     switch (input) {
//         case 'Monday': return 1;
//         case 'Tuesday': return 2;
//         case 'Wednesday': return 3;
//         case 'Thursday': return 4;
//         case 'Friday': return 5;
//         case 'Saturday': return 6;
//         case 'Sunday':  return 7;
//         default: console.log('error');
//     }
// }
// daysOfWeek('Sunday')


// function daysInMonth(month, year){
//     let date = new Date(year, month, 0).getDate();
//     console.log(date);
// }
// daysInMonth(3, 2012);

// function stars(stars){
//     let output = '';
//     if(stars == null){
//         for (let i = 0; i < 5; i++){
//             for (let j = 0; j < 5; j++){
//                 output+= '* '
//             }
//             console.log(output);
//             output = '';
//         }
//     } else if(stars > 0){
//         for (let i = 0; i < stars; i++){
//             for (let j = 0; j < stars; j++){
//                 output+= '* '
//             }
//             console.log(output);
//             output = '';
//         }
//     }
// }
// stars(4);



// function aggregateE(arr){
//     let sum = 0;
//     let sumInv = 0;
//     let conca = '';

//     arr.forEach(element => {
//         sum+=element;
//     });
//     console.log(sum);

//     arr.forEach(element => {
//         let inversed = 1 / element;
//         sumInv+=inversed;
//     });
//     console.log(sumInv);

//     arr.forEach(element => {
//         conca+=element;
//     });
//     console.log(conca);

// }
// aggregateE([2, 4, 8, 16]);