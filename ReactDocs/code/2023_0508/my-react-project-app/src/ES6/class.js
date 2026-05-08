// Class constructor 建構式
class Animal {
    constructor(){
        console.log('Animal Create!');
        this.age = 17;
    }
}

const animal = new Animal();
console.log(animal.age);

console.log('----------------------------');

class Dog extends Animal{
    constructor(){
        super();
        console.log('Dog Create!');
    }

    bark = ({name}) => {
        console.log(`woof ${name} ${this.age}`);
    }
}

/*
類別實體化 instance 操作
透過 new 建立類別實體化，並透過物件操作方法
父類別先建立再子類別建立實體
*/
const dog = new Dog();
dog.age = 18;
dog.bark( {name:"Snoppy"} );