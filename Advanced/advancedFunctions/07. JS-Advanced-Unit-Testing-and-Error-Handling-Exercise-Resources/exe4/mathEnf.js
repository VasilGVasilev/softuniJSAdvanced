const {expect} = require('chai');

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return a correct result with a non-number param', () => {
            expect(mathEnforcer.addFive('a')).to.equal(undefined);
            expect(mathEnforcer.addFive(['a'])).to.equal(undefined);
            expect(mathEnforcer.addFive(4)).to.equal(9);
        });
        it('negative values', () => {
            expect(mathEnforcer.addFive(-7)).to.equal(-2);
        });
        it('floating-point nums', () => {
            expect(mathEnforcer.addFive(5.5)).to.closeTo(10.5, 0.01);
        });
    })
    describe('substractTen', () => {
        it('should return a correct result with a non-number param', () => {
            expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(['a'])).to.equal(undefined);
            expect(mathEnforcer.subtractTen(12)).to.equal(2);
        });
        it('negative values', () => {
            expect(mathEnforcer.subtractTen(-7)).to.equal(-17);
        });
        it('floating-point nums', () => {
            expect(mathEnforcer.subtractTen(20.5)).to.closeTo(10.5, 0.01);
        });
    })
    describe('sum', () => {
        it('should return a correct result with a non-number param', () => {
            expect(mathEnforcer.sum('a', 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, 'a')).to.equal(undefined);
            expect(mathEnforcer.sum(4, 1)).to.equal(5);
        })
        it('negative values', () => {
            expect(mathEnforcer.sum(7, -5)).to.equal(2);
        });
        it('floating-point nums', () => {
            expect(mathEnforcer.sum(7.4, 5.5)).to.closeTo(12.9, 0.01);
        });
    })
})