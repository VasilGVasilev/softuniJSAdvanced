const {isOddOrEven} = require('./evenOrOdd');
const {expect} = require('chai');

describe('test even or odd', () => {
    it('not a string', ()=>{
        expect(isOddOrEven(1)).to.be.undefined
        expect(isOddOrEven([])).to.be.undefined
        expect(isOddOrEven({})).to.be.undefined
    })
    it('return even', ()=>{
        expect(isOddOrEven('aa')).to.be.equal('even')
    })
    it('return odd', ()=>{
        expect(isOddOrEven('a')).to.be.equal('odd')
    })
    it('a valid string', ()=>{
        expect(isOddOrEven('dsadsad')).to.be.equal('odd');
        expect(isOddOrEven('sadsad')).to.be.equal('even');
        expect(isOddOrEven('ddsjbsd')).to.be.equal('odd');
    })
})