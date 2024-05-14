function countCharacters(str) {
  return str.length;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function countSpecificCharacter(str, char) {
  const regex = new RegExp(char, 'g');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}

// Пример
const inputString = "teset   teset";
const charToCount = "e";

console.log("Количество символов в строке:", countCharacters(inputString));
console.log("Строка в обратном порядке:", reverseString(inputString));
console.log("Является ли строка палиндромом:", isPalindrome(inputString));
console.log("Количество символов \"" + charToCount + "\" в строке:", countSpecificCharacter(inputString, charToCount));
console.log("Строка с удаленными лишними пробелами:", removeExtraSpaces(inputString));
