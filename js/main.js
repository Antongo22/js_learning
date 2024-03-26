// 1
let person = {
  name: "Anton", 
  sayHi: function() {
    console.log("Привет, меня зовут " + this.name + "!");
  }
};

person.sayHi(); 


// 2
function showGlobalThis() {
  console.log(this);
}

showGlobalThis();


// 3
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    console.log("Марка автомобиля: " + this.brand);
  }
}

let myCar = new Car("Toyota");

myCar.showBrand(); 

// 4
function Car1(brand) {
  this.brand = brand;
}

function showBrand() {
  console.log("Марка автомобиля: " + this.brand);
}

let myCar1 = new Car1("Toyota");
showBrand.call(myCar1); 


// 5
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if (b === 0) {
      return "Деление на ноль невозможно";
    }
    return a / b;
  }
};

console.log("Сумма:", calculator.add(5, 3));   
console.log("Разность:", calculator.subtract(8, 2)); 
console.log("Произведение:", calculator.multiply(4, 6)); 
console.log("Частное:", calculator.divide(10, 2)); 
console.log("Деление на ноль:", calculator.divide(10, 0)); 

// 6
const user = {
  name: "John",
  changeName: function(newName) {
    this.name = newName;
  }
};

console.log("Изначальное имя:", user.name); 

user.changeName("Alice");

console.log("Новое имя:", user.name); 

// 7 
const person1 = {
  name: "John",
  introduce: function() {
    console.log("Привет, меня зовут " + this.name + "!");
  }
};

person1.introduce(); 

// 8
const timer = {
  start: function(callback, time) {
    setTimeout(callback, time);
  }
};

function callbackFunction() {
  console.log("Таймер сработал!");
}

console.log("Запускаем таймер...");
timer.start(callbackFunction, 3000); 



