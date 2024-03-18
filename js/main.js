// 1. Преобразовать массив чисел в массив квадратов этих чисел - map
function squareArray(arr) {
    return arr.map(num => num * num);
  }

  
  // 2. Отсортировать массив чисел по возрастанию - sort
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  

  // 3. Перевернуть массив чисел - reverse
function reverseArray(arr) {
    return arr.reverse();
  }
  
  
  // 4. Разделить строку по пробелам и сохранить каждое слово как элемент массива - split / join
function splitAndJoinString(str) {
    return str.split(' ');
  }
  
  
  // 5. Найти сумму элементов в массиве чисел - reduce / reduceRight
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  
  // 6. Напишите функцию camelize(str), которая преобразует строки вида my-short-string в myShortString
function camelize(str) {
    return str.split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  }

  // 7. Функция filterRange
function filterRange(arr, a, b) {
    return arr.filter(num => num >= a && num <= b);
  }
  

  
  // 8. Функция filterRangeInPlace
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        i--; 
      }
    }
  }
  

// 9. Сортировка в порядке убывания
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  

  