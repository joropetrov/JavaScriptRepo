let isOddOrEven = require('./1.EvenOrOdd');
let assert = require('chai').assert;

describe('isOddOrEven func test', () => {

    it('test the input', () => {

        let actualResult = isOddOrEven(5);
        let expectedResult = undefined;

        assert.equal(actualResult, expectedResult,'sdf');

    });

    it('test Even', () => {

        let actualResult = isOddOrEven('sadf');
        let expectedResult = 'even';

        assert.equal(actualResult, expectedResult,'should be even');

    });

    it('test Odd', () => {

        let actualResult = isOddOrEven('0');
        let expectedResult = 'odd';

        assert.equal(actualResult, expectedResult,'should be odd');

    });
});