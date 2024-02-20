//1
sum = (a, b) => a + b;

// 2
greet = (name) => "Hello " + name + "!";


// 3
evenNumbers = (numbers) =>numbers.filter(number => number % 2 === 0);

// 4
multiply = (num1, num2) => num1 * num2;


// 5
addTwo = (numbers) => numbers.map(number => number + 2);


// 6
reverseWords = (str) => {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  };
  

// 7
square = (num) => num * num;

// 8
sumArray = (array) => array.reduce((acc, curr) => acc + curr, 0);


// 9
evenNumbers = (numbers) => numbers.filter(number => number % 2 === 0);

// 10   
multipliedNumbers = (numbers) => numbers.map(number => number * 5);

// 11
gcd = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

// 12
const findUnique = (array) => {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};
