export class Person { // membuat export class
    constructor (name) {
        this.name = name;
    };

    sayHello(name) {
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}