const {chooseYourCar} = require('./chooseYourCar');
const {expect} = require('chai');
describe('Tests', function(){
    describe('choosingType', function(){
        it('choosingType', ()=>{
            expect(()=>chooseYourCar.choosingType('Sedan', 'blue', 1800)).to.be.throw(`Invalid Year!`);
            expect(()=>chooseYourCar.choosingType('Sedan', 'blue', 2222)).to.be.throw(`Invalid Year!`);
            expect(()=>chooseYourCar.choosingType('SUV', 'blue', 1989)).to.be.throw(`This type of car is not what you are looking for.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2011)).to.be.equal(`This blue Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.be.equal(`This blue Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2008)).to.be.equal(`This Sedan is too old for you, especially with that blue color.`);
        })
    })
    describe('brandName', function(){
        it('brandName', ()=>{
            expect(()=>chooseYourCar.brandName(0, 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName('csdc', 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName({}, 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(null, 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName({}, {})).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName('csdc', 'sdf')).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 'sdf')).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(10, ["BMW", "Toyota", "Peugeot"])).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(null, ["BMW", "Toyota", "Peugeot"])).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], null)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 100)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw("Invalid Information!");
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.be.equal("BMW, Peugeot");
        })
    })
    describe('carFuelConsumption', function(){
        it('carFuelConsumption', () =>{
            expect(()=>chooseYourCar.carFuelConsumption('dsf', 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption([], 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(null, 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption({}, 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(10, 'dsf')).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(10, [])).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(10, null)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(10, {})).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(10, 0)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(0, 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(-10, 10)).to.throw("Invalid Information!");
            expect(()=>chooseYourCar.carFuelConsumption(10, -10)).to.throw("Invalid Information!");
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.be.equal("The car is efficient enough, it burns 5.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.be.equal("The car burns too much fuel - 10.00 liters!");
        })

    })
})