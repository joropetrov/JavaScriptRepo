function solve() {

    let clearButton = document.getElementsByClassName('clear')[0];
    let outputField = document.querySelector('#expressionOutput');
    let resultField = document.querySelector('#resultOutput');
    let buttonsClick = document.getElementsByClassName('keys')[0];
    let delimiter = RegExp(/\+|-|x|\//gm);
    let endResult;

    buttonsClick.addEventListener('click', function () {
        let currentButton = event.target.innerText;

        if (currentButton === '=') {

            let result = outputField.innerText.split(delimiter);
            let firstNum = Number(result[0]);
            let secondNum = result[1] === "" ? undefined :  Number(result[1]);
            let delimiterVal = outputField.innerText.match(delimiter);
            let strval = delimiterVal[0].toString();

            endResult = calculate(strval, firstNum, secondNum);
            resultField.innerText = endResult;

        } else {
            outputField.innerText += currentButton;
        }
    })

    clearButton.addEventListener('click', clearEverything);

    function calculate(delimiterValue, firstNum, secondNum) {
        let returnResult;

        if (secondNum === undefined) {
            return 'NaN';
        }

        switch (delimiterValue) {
            case 'x':
                returnResult=  firstNum * secondNum;
                break;

            case '-':
                returnResult=  firstNum - secondNum;
                break;

            case '+':
                returnResult=  firstNum + secondNum;
                break;

            case '/':
                returnResult=  firstNum / secondNum;
                break;

            default:
                returnResult =  'NaN';
                break;
        }
        return returnResult;
    }
        
    function clearEverything(e) {
        outputField.innerText = '';
        resultField.innerText = '';
    }
}
