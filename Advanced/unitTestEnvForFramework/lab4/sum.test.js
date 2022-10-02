const {sum} = require('./sum');
const {expect} = require('chai');

describe('sum check', ()=>{
    it('returns array of nums', () => {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it('returns false if array of non-nums', () => {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it('returns sum of all array elements', () => {
        expect(sum([1, 2, 3, 4])).to.be.equal(10);
    })
})