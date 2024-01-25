// do while провера на полиндром
/* 
let word = prompt('Введите слово:');
let reversedWord = '';
let i = word.length - 1;

do {
  reversedWord += word[i];
  i--;
} while (i >= 0);

let result = word.toLowerCase() === reversedWord.toLowerCase() ? 'является полиндромом' : 'не является полиндромом';

alert(`Слово "${word}" ${result}`);
 */

// do while проверка 

let input = prompt('Введите числа через запятую:');
let numbers = input.split(',').map(num => parseInt(num.trim()));

let sum = 0;
let i = 0;

do {
  sum += numbers[i];
  i++;
} while (i < numbers.length);

alert(`Сумма введенных чисел: ${sum}`);