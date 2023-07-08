class Person{
    constructor(name, age, gender, nationality){
        this.name = name;
        this.age = age;
        this. gender = gender;
        this.nationality = nationality;
    }

    introduce(){
        return `Hi my name is ${this.name}! I am a ${this.age} years old ${this.gender}. My nationality is ${this.nationality}! `
    }
}

let john = new Person('john', 25, 'male', 'american');
let jane = new Person('jane', 30, 'female', 'canadian');
let bob = new Person('bob', 22, 'male', 'australian');

console.log(john.introduce());
console.log(jane.introduce());
console.log(bob.introduce());

class Student extends Person{
    constructor(name, age, gender, nationality, subject){
        super(name, age, gender, nationality, subject);
        this.subject = subject;
    }

    study(){
        return `I am studying ${this.subject}!`
    }
}

const sarah = new Student('sarah', 18, 'female', 'british', 'Computer Science')

console.log(`${sarah.introduce()}${sarah.study()}`)