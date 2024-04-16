// Задача 1
class Animal {
  makeSound() {
    console.log("Animal makes a sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("meow");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("woof");
  }
}


// Задача 2
class Shape {
  calculateArea() {
    console.log("Calculating area of a generic shape");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    console.log("Area of the circle:", Math.PI * this.radius ** 2);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  calculateArea() {
    console.log("Area of the square:", this.sideLength ** 2);
  }
}


// Задача 3
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Doctor extends Person {
  greet() {
    console.log(`Hello, I'm Dr. ${this.name}`);
  }
}

class Teacher extends Person {
  greet() {
    console.log(`Hello, I'm Teacher ${this.name}`);
  }
}



// Задача 4
class Vehicle {
  start() {
    console.log("Vehicle is starting");
  }

  stop() {
    console.log("Vehicle is stopping");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car engine is starting");
  }

  stop() {
    console.log("Car engine is stopping");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike is starting pedaling");
  }

  stop() {
    console.log("Bike is stopping pedaling");
  }
}

// 6
class Food {
  constructor(name) {
    this.name = name;
  }

  taste() {
    console.log(`The taste of ${this.name} is not defined`);
  }
}

class Pizza extends Food {
  constructor(name, toppings) {
    super(name);
    this.toppings = toppings;
  }

  taste() {
    console.log(`The taste of ${this.name} pizza with ${this.toppings.join(', ')} toppings is delicious`);
  }

  bake() {
    console.log(`Baking ${this.name} pizza...`);
  }
}

class IceCream extends Food {
  constructor(name, flavor) {
    super(name);
    this.flavor = flavor;
  }

  taste() {
    console.log(`The taste of ${this.name} ice cream with ${this.flavor} flavor is sweet and creamy`);
  }

  scoop() {
    console.log(`Scooping ${this.name} ice cream...`);
  }
}

// 7
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: $${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Department: ${this.department}`);
  }

  scheduleMeeting() {
    console.log(`${this.name} is scheduling a meeting for the ${this.department} department`);
  }
}

class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Programming Language: ${this.programmingLanguage}`);
  }

  writeCode() {
    console.log(`${this.name} is writing code in ${this.programmingLanguage}`);
  }
}
