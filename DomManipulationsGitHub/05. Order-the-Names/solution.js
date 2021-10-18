function solve() {

    let lettersObject = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    let lettersObjLenght = Object.keys(lettersObject).length;
    let olElement = document.querySelector('ol');
    let button = document.getElementsByTagName('button')[0];
    
    createLettersList();
    clearText();

    function createLettersList(){

        for (let index = 0; index < lettersObjLenght; index++) {

            let checkLetter = Object.keys(lettersObject)[index];
            let liElement = document.createElement('li');
            liElement.id=`${checkLetter}`;
            let p = document.createElement('p');
            p.id = `${checkLetter}`;
            p.classList="thin-red-border";
            p.innerText = "Clear Text";
            olElement.appendChild(liElement);
            olElement.appendChild(p);
        }
    }
    
    function clearText() {
        for (let a = 0; a < lettersObjLenght; a++) {
            let currentParagrapfEl = document.querySelector(`p[id="${Object.keys(lettersObject)[a]}"]`);
            let currentLiEl = document.querySelector(`li[id="${Object.keys(lettersObject)[a]}"]`);

            currentParagrapfEl.addEventListener('click', () => {
                currentLiEl.innerText = '';
            })

            currentParagrapfEl
        }
    }

    button.addEventListener('click', insertNameInTable);

    function insertNameInTable(){

        let name = document.getElementsByTagName('input')[0].value;
        
        if (name !== undefined) {
            let  correctIndexOfLiElement = lettersObject[`${name[0]}`] - 1;
            if (isNaN(correctIndexOfLiElement)) {
                return;
            }
    
            let correctLiEl = document.getElementById(`${name[0]}`);
    
            if (correctLiEl.innerText !== '') {
                correctLiEl.innerText += `, ${name}`;
            } else{
                correctLiEl.innerText += name;
            }
        }
        document.getElementsByTagName('input')[0].value ='';
        return;
    }
}