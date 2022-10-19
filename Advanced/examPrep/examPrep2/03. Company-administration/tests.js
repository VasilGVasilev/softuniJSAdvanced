const {companyAdministration} = require('./companyAdministration');
const {expect} = require('chai');
describe('Tests', function(){
    describe('hiringEmployee', function(){
        it('Programmer 3', ()=>{
            expect(()=>companyAdministration.hiringEmployee('stoyqn', 'Engineer', 1)).to.be.throw(`We are not looking for workers for this position.`);
            expect(companyAdministration.hiringEmployee('stoyqn', 'Programmer', 3)).to.be.equal(`stoyqn was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('stoyqn', 'Programmer', 4)).to.be.equal(`stoyqn was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('stoyqn', 'Programmer', 2)).to.be.equal(`stoyqn is not approved for this position.`);
        })
    })
    describe('calculateSalary', function(){
        it('salary', ()=>{
            expect(()=>companyAdministration.calculateSalary(-10)).to.be.throw("Invalid hours");
            expect(()=>companyAdministration.calculateSalary('csdc')).to.be.throw("Invalid hours");
            expect(()=>companyAdministration.calculateSalary([])).to.be.throw("Invalid hours");
            expect(()=>companyAdministration.calculateSalary(null)).to.be.throw("Invalid hours");
            expect(companyAdministration.calculateSalary(10)).to.be.equal(150);
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
        })
    })
    describe('firedEmployee', function(){
        it('fire', () =>{
            expect(()=>companyAdministration.firedEmployee('dsf', 'sd')).to.throw("Invalid input");
            expect(()=>companyAdministration.firedEmployee('dsf', -10)).to.throw("Invalid input");
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 10)).to.throw("Invalid input");
            expect(()=>companyAdministration.firedEmployee({}, {})).to.throw("Invalid input");
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"], null)).to.throw("Invalid input");
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw("Invalid input");
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.be.equal("Petar, George");
        })

    })
})