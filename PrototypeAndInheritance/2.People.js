function solve() {

    class Employee {
        constructor(name, age) {
            if(new.target === Employee){ //abstract class
                throw new Error("Canot instantiate directly");

            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let task = this.tasks.shift();
            console.log(this.name + task);
            this.tasks.push(task);
        }

        collectSalary() {
           console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                " is working on a simple task."
            ]
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                " is working on a complicated task.",

                " is taking time off work.",

                " is supervising junior workers."
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                " scheduled a meeting.",
                " is preparing a quarterly report." 
            ];
        }

        getSalary(){
            return this.salary + this.dividend;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

    }

    return {
        Employee, Manager, Senior, Junior
    }
     //revealing model pattern - expouse vame samo referenciq, a ina4e moje6e i 3te obekta da vurnem..baloon : class Baloon {copy everything}
     //  abstracten klas pravim taka =>
    //   if(new.target === Employee){
    //     throw new Error("Canot instantiate directly");

    // }
}


let classes = solve();
let m = new classes.Manager('PETER',33);
console.log(m.collectSalary())
 
