let StringBuilder = require('./4.StringBuilder');
let assert = require('chai').assert;

describe('sbClassTest', () => {

    let actualResult ;
    let expectedResult;
    let sb;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        sb = new StringBuilder();
    })

    describe('ctor() check', () => {
        
        it('without param', () => {
            actualResult = new StringBuilder();
            expectedResult = [];

            
            assert.deepEqual(actualResult._stringArray, []);
            //assert.equal(JSON.stringify(actualResult._stringArray), "[]")
        })

        it('with param', () => {
            actualResult = new StringBuilder('some');
            expectedResult = ['s', 'o','m','e'];

            assert.deepEqual(actualResult._stringArray, expectedResult);
        })

        it('with param different than str', () => {
            actualResult = () => new StringBuilder(true);
            expectedResult = 'Argument must be string';

            assert.throw(actualResult, expectedResult);
        })

        it('with param num', () => {
            actualResult = () => new StringBuilder(199.5);
            expectedResult = 'Argument must be string';

            assert.throw(actualResult, expectedResult);
        })

        it('', () => {
            
        })


    })

    describe('append()', () => {
        
        it('append with valid str', () => {
         sb.append('123');
         actualResult = sb._stringArray;
         expectedResult = ['1', '2', '3'];

         assert.deepEqual(actualResult, expectedResult);
        })
    
        it('append with invalid arg', () => {
            
            actualResult = () => sb.append(false);
            expectedResult = 'Argument must be string';

            assert.throw(actualResult, expectedResult);


        })

        it('', () => {

        })
    })

    describe('remove()', () => {

        it('splice 0 to 3', () => {
            sb = new StringBuilder('1234567');
            sb.remove(0, 3);
            actualResult = sb._stringArray;
            expectedResult = ['4','5','6','7'];

            assert.deepEqual(actualResult, expectedResult);
        })
    })

    describe('prepend()', () => {
        it('with valid sty', () => {
            sb = new StringBuilder('as');
            sb.prepend('dd');
            actualResult = sb._stringArray;
            expectedResult = ['d','d', 'a', 's']

            assert.deepEqual(actualResult, expectedResult);

        })

        it('with invalid data(arr)', () => {
            actualResult = () => sb.prepend([]);
            expectedResult = 'Argument must be string'

            assert.throw(actualResult ,expectedResult);

        })

        it('', () => {

        })
    })


    describe('insertAt()', () => {
        //tezi 2ta ne davat to4ki v judje, izli6ni sa za zada4ata;
        it('with valid data', () => {
            sb = new StringBuilder('asd')
            sb.insertAt('9', 1);
            actualResult = sb._stringArray;
            expectedResult = ['a','9','s','d'];

            assert.deepEqual(actualResult. expectedResult);
        })

        it('with invalid data', () => {
            actualResult = () => sb.insertAt(false);
            expectedResult = 'Argument must be string';
            assert.throw(actualResult, expectedResult);
        })
    })

    describe('toString()', ()=>{

        it('with empty arr',()=>{
            //bez to4ki v judje
            actualResult = sb.toString()
            expectedResult = "";

            assert.equal(actualResult, expectedResult);

        })

        it('with non empty arr',()=>{
            //tova e 1 test
            sb = new StringBuilder('1234')
            sb.remove(0, 2)
            actualResult = sb.toString()
            expectedResult = "34";

            assert.equal(actualResult, expectedResult);
        })
    })

})