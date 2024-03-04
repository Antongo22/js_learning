// 1. Создайте объект person с полями name, age, city и выведите информацию о нем в консоль
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log("Person:", person);
  
  // 2. Добавьте метод greet объекту person который будет выводить приветствие с именем человека
  person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  person.greet();
  
  // 3. Создать несколько объектов book1, book2, book3 с полями title, author, year и вывести их информацию в консоль
  const book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };
  
  const book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };
  
  const book3 = {
    title: "1984",
    author: "George Orwell",
    year: 1949
  };
  
  console.log("Books:", book1, book2, book3);

  // 4. Создайте объект car с полями brand, model, year и напишите функцию getCarInfo которая возвращает строку с информацией о машине
  const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  function getCarInfo(car) {
    return `${car.brand} ${car.model} (${car.year})`;
  }
  
  console.log("Car:", getCarInfo(car));
  
  // 5. Создайте объект student с полями name, age, grades, где grades это массив оценок студента. Напишите метод getAverageGrade который возвращает среднюю оценку студента
  const student = {
    name: "Alice",
    age: 20,
    grades: [90, 85, 95, 88, 92, 100, 70, 65, 82, 78]
  };
  
  student.getAverageGrade = function() {
    const total = this.grades.reduce((acc, curr) => acc + curr, 0);
    return total / this.grades.length;
  };
  
  console.log("Average Grade:", student.getAverageGrade());
  
  // 6. Создайте объект rectangle с полями width и height и добавьте метод getArea который вернет площадь прямоугольника
  const rectangle = {
    width: 5,
    height: 10,
    getArea: function() {
      return this.width * this.height;
    }
  };
  
  console.log("Rectangle Area:", rectangle.getArea());
  
  // 7. Создайте объект circle с полем radius и методом getCircumference для расчета площади круга
  const circle = {
    radius: 5,
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  console.log("Circle Circumference:", circle.getCircumference());
  