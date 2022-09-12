// function calorie(input){
//     let obj = {};
//     for (let i = 0; i < input.length; i++){
//         if(i % 2 == 0){
//             obj[input[i]];
//         } else {
//             obj[input[i - 1]] = Number(input[i]);
//         }
//     }
//     console.log(obj);
// }
// calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// BETTER algorithmic than if else so
// function calorie(input){
//     let obj = {};
//     for (let i = 0; i < input.length; i=i+2){
//         let product = arr[i];
//         let calo = Number(arr[i+1]);
//         obj[product] = calo
//     }
//     console.log(obj);
// }


// function constructionCrew(worker){
//     if (worker.dizziness){
//         let reqAmount = worker.weight * 0.1 * worker.experience
//         worker.levelOfHydrated += reqAmount
//         worker.dizziness = false;
//     }
//     return worker;
// }
// constructionCrew({ 'weight': 80,
//     'experience': 1,
//     'levelOfHydrated': 0,
//     'dizziness': true }
//   )




// function carFactory(input){
//     const resultObj = {};
//     // model
//     resultObj['model'] = input.model;

//     // engine
//     const engine = {
//         smallEngine: { power: 90, volume: 1800 },
//         normalEngine: { power: 120, volume: 2400 },
//         monsterEngine: { power: 200, volume: 3500 }
//     }
//     let engineInfo;
//     engineInfo = input.power;
//     // if (typeof engineInfo === 'undefined'){
//     //     engineInfo === input.volume;
//     // }
//     if (engineInfo < 105){
//         resultObj['engine'] = engine.smallEngine
//     } else if (engineInfo > 105 && engineInfo < 160){
//         resultObj['engine'] = engine.normalEngine
//     } else if (engineInfo >= 200){
//         resultObj['engine'] = engine.monsterEngine
//     }

//     // carriage
//     let wantedCariage = input.carriage;
//     let wantedColor = input.color;
//     const carriage = {
//         hatchback: { type: 'hatchback', color: wantedColor },
//         coupe: { type: 'coupe', color: wantedColor }
//     }

//     if (wantedCariage === 'hatchback'){
//         resultObj['carriage'] = carriage.hatchback
//     } else if (wantedCariage === 'coupe'){
//         resultObj['carriage'] = carriage.coupe
//     }

//     // wheelsize
//     let wheelS = input.wheelsize;
//     if (wheelS % 2 === 0){
//         wheelS--;
//     }
//     let arrOfWheels = [1, 1, 1, 1];
//     resultObj['wheels'] = arrOfWheels.fill(wheelS)

//     resultObj['engine'];
//     return resultObj;
// }
// CLEANER code solution
// function carFactory(input){
//     let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
//     let carriage = [{ type: 'hatchback', color: input.color}, { type: 'coupe', color: input.color}];
//     let wheelsize = input.wheelsize % 2 === 0 ?  input.wheelsize - 1 : input.wheelsize;

//     return {
//         model: input.model,
//         // [0] due to filter returning an array
//         engine: engines.filter( e => e.power >= input.power)[0],
//         carriage: carriage.filter( e => e.type === input.carriage)[0]
//         wheelsize: [wheelsize, wheelsize, wheelsize, wheelsize]
//     }
// }
// carFactory({
//     model: 'Ferrari',
//     power: 200,
//     color: 'red',
//     carriage: 'coupe',
//     wheelsize: 21
// }
// );





// function heroicInvent(arr){
//     let newArr = [];
//     arr.forEach(hero => {
//         let [name, level, items] = hero.split(' / ');
//         level = Number(level);
//         items = items ? items.split(', ') : [];
//         // if(items){
//         //     items = items.split(', ')
//         // } else {
//         //     items = [];
//         // }
//         newArr.push({name, level, items})
//     });
//     console.log(JSON.stringify(newArr));
// }
// heroicInvent(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// )

// note difference between the idea to make
// obj = {}
// obj[town] = price;
// resultObj[product]  = obj;

// which logs out:

// {
//     'Sample Product': { '1000': 'New York' },
//     Orange: { '2': 'Sofia' },
//     Peach: { '1': 'Sofia' },
//     Burger: { '10': 'New York' }
// }

// and resultObj[product] = {price, town}

// which logs out:

// {
//     'Sample Product': { town: 'Sample Town', price: 1000 },
//     Orange: { town: 'Sample Town', price: 2 },
//     Peach: { town: 'Sample Town', price: 1 },
//     Burger: { town: 'New York', price: 10 }
// }

function lowestPrices(input){
    let resultObj = {};
    for (let i = 0; i < input.length; i++){
        let [town, product, price] = input[i].split(' | ');
        price = Number(price)
    
        if(!resultObj.hasOwnProperty(product)){
            resultObj[product] = {town, price};
            console.log(resultObj[product][price]);
        } 
    }
  
    // for (let key in resultObj){
    //     for (let [pric, tow] of Object.entries(resultObj[key])){
    //         console.log(`${key} -> ${pric} (${tow})`);
    //     }
        
    // }
 
}
lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);