// 1 
/* let word = prompt("Введите слово:");
let newWord = '';

for (let i = 0; i < word.length; i++) {
    let currentChar = word[i].toLowerCase();
    if (currentChar !== 'а' && currentChar !== 'о') {
        newWord += word[i];
    }
}

alert(newWord);

 */
// 2
/* let num = parseInt(prompt("Введите число:"));
let result = '';

for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
        result += i + "\n";
    }
} */

alert(result);


// 3
/* let num = parseInt(prompt("Введите число:"));
let result = '';

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        result += j;
    }
    result += "\n";
}

alert(result);
 */

// 4
/* let num = parseInt(prompt("Введите число:"));
let sum = 0;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
    sum += factorial;
}

alert(sum); */


// 5 
/* let word = prompt("Введите слово:").toLowerCase();
let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

if (word === reversedWord) {
    alert("YES");
} else {
    alert("NO");
}
  */