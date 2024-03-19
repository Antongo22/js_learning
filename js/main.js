function fillArray(value, length) {
  const newArray = [];
  for (let i = 0; i < length; i++) {
    newArray.push(value);
  }
  return newArray;
}

console.log(fillArray('a', 3)); 


function reverseArray(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5])); 


function compact(array) {
  return array.filter((item) => item !== false && item !== undefined && item !== '' && item !== 0 && item !== null);
}

console.log(compact([0, 1, false, 2, '', 3, null, undefined])); 
