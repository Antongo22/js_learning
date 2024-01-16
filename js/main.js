 
//1
/* alert("Добрый день!"); */

//2
/* let name = prompt("Введите своё имя:");
alert("Привет, " + name + "! Добро пожаловать   !");
 */
//3
/* 
let isAgeConfirmed = confirm("Вам есть 18 лет?");
if(isAgeConfirmed){
    alert("Пользователь подтвердил свой возраст" );
}
else{
    alert("Пользователь не подтвердил свой возраст");
}

  */

//4
/* let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let sum = number1 + number2;
alert("Сумма двух чисел: " + sum);
 */
//5
/* let variable1 = "1";
let variable2 = "2";

alert("Первая переменная: " + variable1 + "\nВторая переменная: " + variable2);

let temp = variable1;
variable1 = variable2;
variable2 = temp;

alert("Первая переменная: " + variable1 + "\nВторая переменная: " + variable2);  
 */
//6
/* let length = parseFloat(prompt("Введите длину прямоугольника:"));
let width = parseFloat(prompt("Введите ширину прямоугольника:"));

let area = length * width;
alert("Площадь прямоугольника: " + area);
 */

//7

/* let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));

let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;

alert("Сумма: " + sum + "\nРазница: " + difference + "\nПроизведение: " + product + "\nЧастное: " + quotient); */

//8 
/* let number = parseInt(prompt("Введите число:"));

if (number % 2 === 0) {
  alert(number + " - четное число");
} else {
  alert(number + " - нечетное число");
} */

//9
/* let age = parseInt(prompt("Введите ваш возраст:"));

if (age >= 18) {
  alert("Вы можете принять участие в акции со скидкой!");
} else {
  alert("К сожалению, вы не можете принять участие в акции со скидкой.");
} */

// 10
/* let length = parseInt(prompt("Введите длину пароля:"));

let password = generatePassword(length);
alert("Сгенерированный пароль: " + password);

function generatePassword(length) {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
} */

// 11
/* let number1 = parseInt(prompt("Введите первое число:"));
let number2 = parseInt(prompt("Введите второе число:"));

function findGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}

let gcd = findGCD(number1, number2);
alert("Наибольший общий делитель: " + gcd); */

//12

let string = prompt("Введите строку:");

let processedString = string.replace(/\s/g, "").toLowerCase();

let reversedString = processedString.split("").reverse().join("");

if (processedString === reversedString) {
  alert("Введенная строка является палиндромом");
} else {
  alert("Введенная строка не является палиндромом");
}