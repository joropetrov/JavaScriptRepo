function result() {

    class Balloon{

        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon{

        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {color: ribbonColor,length: ribbonLength};
            }
            
        get ribbon(){
            return this._ribbon;
        }

    }

    class BirthdayBalloon extends PartyBalloon {

        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
     Balloon, 
     PartyBalloon, 
     BirthdayBalloon
    }

     //revealing model pattern - expouse vame samo referenciq, a ina4e moje6e i 3te obekta da vurnem..baloon : class Baloon {copy everything}

}

let classes = result();
let bdParty = new classes.BirthdayBalloon('dark', 300, 'red', 4000, 'afddfsg');
console.log(bdParty)


let classes1 = result();

let test = new classes1.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, 'sdafsadf');
console.log(test)

