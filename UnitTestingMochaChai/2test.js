let lookupChar = require('./2.CharLookup');
let assert = require('chai').assert;

describe('lookupCharTesting', () => {

    let actualResult;
    let expectedResult;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
    })

    it('FirstArg !string', () => {
        actualResult = lookupChar(7, 1)
        expectedResult = undefined;
        assert.equal(actualResult, expectedResult, 'First arg must be string!')

    })

    it('secArg !Integer', () => {
        actualResult = lookupChar('safdsd', 1.6)
        expectedResult = undefined;
        assert.equal(actualResult, expectedResult, 'secArg must be integer!')

    })

    it('secArg !Integer', () => {
        actualResult = lookupChar('safdsd', 1.6)
        expectedResult = undefined;
        assert.equal(actualResult, expectedResult, 'secArg must be integer!')

    })

    it('firstArg lenght smaller Than secArg', () => {
        actualResult = lookupChar('safdsd', 99)
        expectedResult = 'Incorrect index';
        assert.equal(actualResult, expectedResult)

    })

    it(' secArg negative int', () => {
        actualResult = lookupChar('safdsd', -2)
        expectedResult = 'Incorrect index';
        assert.equal(actualResult, expectedResult, 'int should be bigger than 0')

    })

    it('Testing with valid args', () => {
        actualResult = lookupChar('damaPika', 2);
        expectedResult = 'm';
        assert.equal(actualResult, expectedResult, 'the expecter res should be m')
    })

})