function sum(a, b) {
    return a + b;
}


function stringLength(str) {
    return str.length;
}


function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function isEven(number) {
    return number % 2 === 0;
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function stringLengths(arrayOfStrings) {
    return arrayOfStrings.map(str => str.length);
}


function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10; 
        number = Math.floor(number / 10); 
    }
    return sum;
}


function getPositiveNumbers(numbers) {
    return numbers.filter(number => number > 0);
}



function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}


function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}


function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}


function replaceVowelsWithAsterisks(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += '*';
        } else {
            result += str[i];
        }
    }

    return result;
}

function filterStringsByLength(strings) {
    return strings.filter(str => str.length > 5);
}

function mergeUniqueArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    return Array.from(new Set(mergedArray));
}
