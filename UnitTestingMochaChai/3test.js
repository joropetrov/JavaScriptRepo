let  mathEnforcer = require('./3.MathEnforcer');
let assert = require('chai').assert;

describe('mathEnforcer Testing', () =>{

    let actualResult;
    let expectedResult;
beforeEach (()=> {
     actualResult = null;
     expectedResult = null;
});

describe('addFive', () => {
    it('with invalid arg', () => {
        actualResult = mathEnforcer.addFive([1 ,2 , 3, 5]);
        expectedResult = undefined;
    
        assert.equal(actualResult, expectedResult, '')
    })
    
    it('with valid arg', () => {
        actualResult = mathEnforcer.addFive(9);
        expectedResult = 14;
    
        assert.equal(actualResult, expectedResult, 'answ shld be 14')
    })
    
    it('with negative arg', () => {
        actualResult = mathEnforcer.addFive(-9);
        expectedResult = -4;
    
        assert.equal(actualResult, expectedResult, 'answ shld be -4')
    })
    
    it('with floatingPoint num', () => {
        actualResult = mathEnforcer.addFive(3.5);
        expectedResult = 8.5;
        assert.equal(actualResult, expectedResult, '8.5')
    })
    
    it('with negative floatingPoint num', () => {
        actualResult = mathEnforcer.addFive(-5.5);
        expectedResult = -0.5;
        assert.equal(actualResult, expectedResult, '-0.5')
    })
})

describe('subtractTen', () => {
    it('with invalid arg', () => {
        actualResult = mathEnforcer.subtractTen([1 ,2 , 3, 5]);
        expectedResult = undefined;
    
        assert.equal(actualResult, expectedResult, '')
    })
    
    it('with valid arg', () => {
        actualResult = mathEnforcer.subtractTen(9);
        expectedResult = -1;
    
        assert.equal(actualResult, expectedResult, '')
    })
    
    it('with negative arg', () => {
        actualResult = mathEnforcer.subtractTen(-9);
        expectedResult = -19;
    
        assert.equal(actualResult, expectedResult, '')
    })
    
    it('with floatingPoint num', () => {
        actualResult = mathEnforcer.subtractTen(3.5);
        expectedResult = -6.5;
        assert.equal(actualResult, expectedResult, '')
    })
    
    it('with negative floatingPoint num', () => {
        actualResult = mathEnforcer.subtractTen(-5.5);
        expectedResult = -15.5;
        assert.equal(actualResult, expectedResult, '-4.5')
    })
})

describe('sumTest', () =>{

    it('checkFirstArg', () => {
        actualResult = mathEnforcer.sum('sdf', 34);
        expectedResult = undefined;
        assert.equal(actualResult, expectedResult, '')
    })

    it('checkSecArg', () => {
        actualResult = mathEnforcer.sum( 34, {});
        expectedResult = undefined;
        assert.equal(actualResult, expectedResult, '')
    })

    it('check positive result', () => {
        actualResult = mathEnforcer.sum(5, 8);
        expectedResult = 13;
        assert.equal(actualResult, expectedResult, '');
    
    })

    it('check negative result', () => {
        actualResult = mathEnforcer.sum(-5, 4);
        expectedResult = -1;
        assert.equal(actualResult, expectedResult, '');
    
    })

    it('check with floatingPoint num', () => {
        actualResult = mathEnforcer.sum(10.5, -4.9);
        expectedResult = 5.6;
        assert.equal(actualResult, expectedResult, '');
    
    })
})

});
    