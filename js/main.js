// 1
/* function sum(a, b) {
    return a + b;
}

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

let result = sum(num1, num2);

alert("Сумма чисел: " + result); */

// 2
/* function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let userInput = parseFloat(prompt("Введите число:"));

let isEvenNumber = isEven(userInput);

if (isEvenNumber) {
    alert("Введенное число является четным.");
} else {
    alert("Введенное число не является четным.");
} */

// 3
/* 
function filterPositiveNumbers(numbers) {
    let positiveNumbers = numbers.filter(function(number) {
        return number > 0;
    });
    return positiveNumbers;
}

let numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9];
let positiveNumbers = filterPositiveNumbers(numbers);

alert("Исходный массив: " + numbers + "\nМассив с положительными числами: " + positiveNumbers); */

// 4
/* function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputString = prompt("Введите строку:");
let reversedString = reverseString(inputString);

alert("Исходная строка: " + inputString + "\nСтрока задом наперед: " + reversedString); */


// 5
/* function uniqueValues(arr) {
    let uniqueArr = Array.from(new Set(arr));
    return uniqueArr;
}

let inputArray = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueArray = uniqueValues(inputArray);

alert("Исходный массив: " + inputArray + "\nМассив с уникальными значениями: " + uniqueArray);
 */

// 6 
/* 
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5];
let totalSum = sumArray(numbers);

alert("Сумма всех элементов массива: " + totalSum);
 */

// 7
/* function doubleArray(arr) {
    let doubledArray = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArray.push(arr[i] * 2);
    }
    return doubledArray;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleArray(numbers);

alert("Исходный массив: " + numbers + "\nМассив с удвоенными значениями: " + doubledNumbers); */

// 8
/* function commonElements(arr1, arr2) {
    let common = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            common.push(arr1[i]);
        }
    }
    return common;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
let commonElementsArray = commonElements(array1, array2);

alert("Первый массив: " + array1 + "\nВторой массив: " + array2 + "\nОбщие элементы: " + commonElementsArray);
 */

// 9 
/* function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let number = parseInt(prompt("Введите число для вычисления факториала:"));
let result = factorial(number);

alert("Факториал числа " + number + " равен " + result);
 */