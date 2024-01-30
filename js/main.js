/* let price = parseInt(prompt("Введите количество денег"));
let range = prompt("Введите период");
let rangeTranslation;

if (range === "day") {
  rangeTranslation = "день";
} else if (range === "month") {
  rangeTranslation = "месяц";
} else if (range === "week") {
  rangeTranslation = "неделю";
} else {
  rangeTranslation = "период";
}

let result = `${price} Р в ${rangeTranslation}`;
alert(result); // Вывод результата в консоль */

/* 
let temp = parseInt(prompt("Введите температуру:")); 
let weather = prompt("Введите погоду:"); 
let activity;

if (temp >= 25 && weather === "clear") {
  activity = "golf";
} else if ((temp >= 10 && temp <= 24) || weather === "cloudy") {
  activity = "bowling";
} else {
  activity = "hiking";
}

alert(activity);  */


/* let a = parseFloat(prompt("Введите значение переменной a:")); // Получение значения a через prompt
let b = parseFloat(prompt("Введите значение переменной b:")); // Получение значения b через prompt
let sign = prompt("Введите математический оператор (+, -, /, *):"); // Получение значения sign через prompt
let result;

if (sign === "+") {
  result = a + b;
} else if (sign === "-") {
  result = a - b;
} else if (sign === "*") {
  result = a * b;
} else if (sign === "/") {
  if (b !== 0) {
    result = a / b;
  } else {
    alert("Делить на 0 нельзя!");
  }
} else {
  alert("Некорректный математический оператор");
}

if (result !== undefined) {
  alert(result);
} */


/* let word = prompt("Введите строку:");
let wordLength = word.length;
let result;

if (Number.isInteger(Math.sqrt(wordLength))) {
  result = 1;
} else {
  result = 0;
}

alert(result); */