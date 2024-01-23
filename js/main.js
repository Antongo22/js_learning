/* let x = parseInt(prompt("Введите число:"));

let result = x % 2 === 0 ? "Четное число" : "Нечетное число";

alert(result); */

/* let a = parseFloat(prompt("Введите число a:"));
let b = parseFloat(prompt("Введите число b:"));

let result = a < b ? a : b;

alert("Меньшее из чисел a и b: " + result); */

/* let number = parseFloat(prompt("Введите число:"));

let result = number > 0 ? "Число положительное" : number < 0 ? "Число отрицательное" : "Число равно нулю";

alert(result); */

/* let age = parseInt(prompt("Введите ваш возраст:"));

let result = age >= 18 ? "Взрослый" : "Не взрослый";

alert("Ваш статус: " + result); */

/* 
let currentHour = new Date().getHours();

let timeOfDay =
  currentHour >= 6 && currentHour < 12 ? "утро" :
  currentHour >= 12 && currentHour < 18 ? "день" :
  currentHour >= 18 && currentHour < 24 ? "вечер" :
  "ночь";

alert("Сейчас " + timeOfDay); */


/* let number = parseInt(prompt("Введите число:"));

let result = number % 5 === 0 ? "Число делится на 5 без остатка" : "Число не делится на 5 без остатка";

alert(result); */


/* let word = prompt("Введите слово:");

let result = word.length < 5 ? "короткое" : "длинное";

alert("Это слово - " + result); */


/* let a = parseFloat(prompt("Введите число a:"));
let b = parseFloat(prompt("Введите число b:"));

let result = a === b ? "равны" : "разные";

alert("Числа a и b " + result); */


let number = parseInt(prompt("Введите число:"));
let isPrime = true;

if (number === 1) {
  isPrime = false;
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

let result = isPrime ? "простое" : "составное";
alert("Число " + number + " - " + result);


