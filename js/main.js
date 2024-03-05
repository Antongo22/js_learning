// Создать массив чисел и вывести на экран их сумму
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма чисел:", sum);

// Создать массив строк и вывести на экран их длины
const strings = ["apple", "banana", "orange"];
const lengths = strings.map(str => str.length);
console.log("Длины строк:", lengths);

// Создать массив из чисел и найти среднее значение
const numArray = [10, 20, 30, 40, 50];
const average = numArray.reduce((acc, curr) => acc + curr, 0) / numArray.length;
console.log("Среднее значение чисел:", average);

// Создать массив объектов с информацией о студентах и вывести их на экран
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
];
console.log("Информация о студентах:", students);

// Создать массив и перевернуть его
const arrayToReverse = [1, 2, 3, 4, 5];
const reversedArray = arrayToReverse.reverse();
console.log("Перевернутый массив:", reversedArray);

// Создайте пустой массив с переменной myArray
let myArray = [];

// Добавьте элемент apple в конец массива
myArray.push("apple");

// Добавьте элемент banana в начало массива
myArray.unshift("banana");

// Добавьте элемент orange во вторую позицию массива
myArray.splice(1, 0, "orange");

// Удалите первый элемент массива
myArray.shift();

// Измените banana на pear
const bananaIndex = myArray.indexOf("banana");
if (bananaIndex !== -1) {
    myArray[bananaIndex] = "pear";
}

// Выведите в консоль длину массива и его содержимое
console.log("Длина массива:", myArray.length);
console.log("Содержимое массива:", myArray);
