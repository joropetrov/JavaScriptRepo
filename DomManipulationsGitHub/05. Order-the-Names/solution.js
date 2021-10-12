function solve() {

    let lettersObject = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    let liElements = document.getElementsByTagName('li');
    
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', insertNameInTable);

    function insertNameInTable(){

        let name = document.getElementsByTagName('input')[0].value;
        
        if (name !== undefined) {

            let  correctIndexOfLiElement = lettersObject[`${name[0]}`] - 1 ;
    
            let correctLiEl = liElements[correctIndexOfLiElement];
    
            if (correctLiEl.innerText !== '') {
                correctLiEl.innerText += `, ${name}`;
            } else{
                correctLiEl.innerText += name;
            }
            
        }
        return;
    }
}