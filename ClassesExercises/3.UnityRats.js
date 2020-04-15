class Rat {
    rats = [];
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name + this.rats.map(rat => `\n##${rat.name}`).join("");
    }

    unite(maybeRat) {
        if (maybeRat instanceof Rat) {
            this.rats.push(maybeRat);

           // this.maybeRat.rats.push(this); tova ne go slagame v judje
        }
    }

    getRats() {
        return [...this.rats];
    }
}