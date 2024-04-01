// 1
function squareNumber(input) {
  try {
      if (isNaN(input)) {
          throw "Ошибка: Введите числовое значение";
      } else {
          return input * input;
      }
  } catch (error) {
      return error;
  }
}

console.log(squareNumber(5)); 
console.log(squareNumber('abc')); 


// 2
function parseToNumber(str) {
  try {
      const parsedNumber = parseFloat(str);
      if (isNaN(parsedNumber)) {
          throw "Ошибка: Невозможно преобразовать строку в число";
      } else {
          return parsedNumber;
      }
  } catch (error) {
      return error;
  }
}

console.log(parseToNumber("123")); 
console.log(parseToNumber("abc")); 

// 3
function divideNumbers(dividend, divisor) {
  try {
      if (divisor === 0) {
          throw "Ошибка: Деление на ноль невозможно";
      } else {
          return dividend / divisor;
      }
  } catch (error) {
      return error;
  }
}

console.log(divideNumbers(10, 2)); 
console.log(divideNumbers(10, 0)); 

// 4
function sumArray(numbers) {
  try {
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
          if (isNaN(numbers[i])) {
              throw "Ошибка: Массив содержит нечисловые значения";
          } else {
              total += numbers[i];
          }
      }
      return total;
  } catch (error) {
      return error;
  }
}

console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([1, 2, 'a', 4, 5]));

// 5
function reverseString(str) {
  try {
      if (typeof str !== 'string') {
          throw "Ошибка: Переданное значение не является строкой";
      } else {
          return str.split('').reverse().join('');
      }
  } catch (error) {
      return error;
  }
}

console.log(reverseString("hello")); 
console.log(reverseString(123)); 
// 6
function multiplyNumbers(num1, num2) {
  try {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
          throw "Ошибка: Одно из значений не является числом";
      } else {
          return num1 * num2;
      }
  } catch (error) {
      return error;
  }
}

console.log(multiplyNumbers(5, 10)); 
console.log(multiplyNumbers("abc", 10)); 
