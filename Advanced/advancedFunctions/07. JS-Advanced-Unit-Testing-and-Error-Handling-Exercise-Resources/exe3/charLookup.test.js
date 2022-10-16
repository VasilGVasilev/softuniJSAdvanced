const {lookupChar} = require('./charLookup');
const {expect} = require('chai');

describe('Test char lookup', () => {
    it('invalid input two nums', () => {
        expect(lookupChar(4, 4)).to.equal(undefined);
    })
    it('invalid input two strings', () => {
        expect(lookupChar('aasd', 'aasd')).to.equal(undefined);
    })
    it('invalid input non-numeric', () => {
        expect(lookupChar('adsa', 4.2)).to.equal(undefined);
    })
    it('incorrect index bigger', () => {
        expect(lookupChar('aa', 4)).to.equal('Incorrect index');
    })
    it('incorrect index negative', () => {
        expect(lookupChar('aa', -123)).to.equal('Incorrect index');
    })
    it('valid input', () => {
        expect(lookupChar('hello', 1)).to.equal('e');
    })
})