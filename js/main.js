class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    getDetails() {
      console.log(`Название: ${this.title}, Автор: ${this.author}`);
    }
  }
  
  const myBook = new Book("1984", "Джордж Оруэлл");
  myBook.getDetails();
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    study() {
      console.log("Студент учится.");
    }
  }
  
  const student = new Student("Антон", 17, "12345");
  student.greet(); 
  student.study(); 
  