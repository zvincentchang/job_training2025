class Animal {
    constructor(){
        console.log('Animal Create!');
        this.age = 17;
    }
}

class Dog extends Animal {
    /*
    constructor() {
        super();
    }
    */
   
    constructor() {
        super(); // super()不可省略
        console.log('Dog Create!');
    }

    bark = ({ name }) => {
        console.log(`woof ${name} ${this.age}`);
    }
}

const spot = new Dog();
spot.bark( {name:"Snoppy"} );