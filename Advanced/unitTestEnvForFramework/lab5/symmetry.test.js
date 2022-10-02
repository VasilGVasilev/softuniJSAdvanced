const {expect, assert} = require('chai');
const {isSymmetric} = require('./symmetry');

describe('summetry checker', () => {
    it('works with symmetric numeric array', () => {
        // expect(isSymmetric([1, 2, 2, 1])).to.be.true;
        assert.equal(isSymmetric([1, 2, 2, 1]), true, 'message')
    });
    it('returns false for non-symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 2])).to.be.false;
    });
    it('returns false for non-array', () => {
        expect(isSymmetric(1)).to.be.false;
    });
    it('works with symmetric odd-lenght numeric array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('works with symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });
    it('returns false for string param', () => {
        expect(isSymmetric('a')).to.be.false;
    });
    it('returns false for type mismatched elemens', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});