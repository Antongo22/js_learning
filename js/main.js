// 1
/* let obj = { 
  price1: 100, 
  price2: 150, 
  price3: 200, 
  price4: 100,
  price5: 150, 
};

let sum = 0;
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
      sum += obj[key];
  }
}

console.log(sum); 
 */

// 2
/* let array = [ 
  {id: 1, name: 'apple'}, 
  {id: 2, name: 'watermelon'}, 
  {id: 3, name: 'qiwi'}, 
  {id: 4, name: 'lemon'} 
];

let newArray = array.map(obj => Object.values(obj));

console.log(newArray); */

// 3
/* function logString(...args) {
  console.log(args.join(' ') + ' ');
}

logString("Hello", "my", "world!"); */

// 4
/* function checkObj(obj) {
  return obj.hasOwnProperty('particle');
}

console.log(checkObj({id: 1, particle: 10}));
console.log(checkObj({id: 2, name: "tag"}));
 */

// 5
/* function generateArray(array) {
  for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'object' && !Array.isArray(array[i])) {
          array[i] = Object.values(array[i]);
      }
  }
  return array;
}

let array = [[1], {id: 40}, [100], [300], {part: 10}];
console.log(generateArray(array));
 */

// 6
/* let users = [
  {id: 1, name: 'Anton', lastname: 'Aleynichenko', age: 17},
  {id: 2, name: 'Artemiy', lastname: 'Aleynichenko', age: 11} 
];

function addUser(name, lastname, age) {
  const id = users.length + 1;
  users.push({id, name, lastname, age});
}

function updateUser(id, name, lastname, age) {
  for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
          users[i] = {id, name, lastname, age};
          break;
      }
  }
}

function deleteUser(id) {
  users = users.filter(user => user.id !== id);
}

addUser('Amelia', 'Aleynichenko', 9);
console.log(users);

updateUser(2, 'Gosha', 'Zapevalov', 17);
console.log(users);

deleteUser(1);
console.log(users); */

// 7
/* let products = [
  {
      id: 1,
      title: 'велосипед',
      price: 45000,
      count: 3, // количество на складе
      marks: [4, 3, 5, 3] // оценки товара от 4х покупателей
  },
  {
      id: 2,
      title: 'ролики',
      price: 25000,
      count: 5,
      marks: [4, 3, 5, 5]
  },
  {
      id: 3,
      title: 'арбалет',
      price: 1700,
      count: 9,
      marks: [3, 3, 4, 5]
  },
  {
      id: 4,
      title: 'коньки',
      price: 4500,
      count: 3,
      marks: [4, 3, 4, 3]
  },
  {
      id: 5,
      title: 'ракетки',
      price: 900,
      count: 15,
      marks: [5, 3, 5, 3]
  },
  {
      id: 6,
      title: 'штанги',
      price: 14000,
      count: 5,
      marks: [3, 3, 3, 2]
  },
  {
      id: 7,
      title: 'стрелы',
      price: 1200,
      count: 55,
      marks: [3, 2, 4, 5]
  },
  {
      id: 8,
      title: 'мячи',
      price: 500,
      count: 49,
      marks: [5, 4, 4, 4]
  },
  {
      id: 9,
      title: 'сетка',
      price: 5000,
      count: 6,
      marks: [4, 5, 2, 5]
  },
  {
      id: 10,
      title: 'гантели',
      price: 3400,
      count: 12,
      marks: [3, 2, 4, 2]
  },
  {
      id: 11,
      title: 'маты',
      price: 16500,
      count: 7,
      marks: [4, 4, 4, 5]
  }
]

const productsMoreThan10 = products.filter(product => product.count > 10);
console.log("Товары с количеством больше 10:", productsMoreThan10);

const productInRange = products.find(product => product.price >= 800 && product.price <= 900);
console.log("Товар с ценой от 800 до 900:", productInRange);

const sortedByPrice = products.slice().sort((a, b) => b.price - a.price);
console.log("Товары отсортированные по цене (по убыванию):", sortedByPrice);

const totalPrice = products.reduce((total, product) => total + (product.price * product.count), 0);
console.log("Итоговая стоимость всех товаров:", totalPrice);

const transformedProducts = products.map(product => {
    const marksTotal = product.marks.reduce((total, mark) => total + mark, 0);
    return {...product, marks_total: marksTotal};
});
console.log("Товары с добавленным свойством marks_total:", transformedProducts);

const sortedByMarksTotal = transformedProducts.sort((a, b) => b.marks_total - a.marks_total);
console.log("Товары отсортированные по marks_total:", sortedByMarksTotal);
 */

// 8
class Email {
  constructor(email) {
      this.email = email;
  }

  get isValid() {
      const [login, domain] = this.email.split('@');
      const forbiddenChars = ['*', '#', '$', '%', '^'];
      const zone = domain.split('.')[1];
      
      if (forbiddenChars.some(char => login.includes(char))) {
          return false;
      }
      if (zone.length > 3) {
          return false;
      }
      return true;
  }

  setEmail(emailArray) {
      const [login, domain, zone] = emailArray;
      this.email = `${login}@${domain}.${zone}`;
  }
}

const email1 = new Email('example@gmail.com');
console.log(email1.isValid); 

const email2 = new Email('example@live.com');
email2.setEmail(['newEmail', 'gmail', 'com']);
console.log(email2.email);
console.log(email2.isValid); 


// 9
class Contact extends Email {
  constructor(email, phone) {
      super(email);
      this.phone = phone;
  }

  get phoneType() {
      if (!this.phone.startsWith('+')) {
        return "Неизвестный";
      }
      
      const phoneLength = this.phone.replace('+', '').length;
      if (phoneLength === 12) {
          return "Мобильный";
      } else if (phoneLength === 18) {
          return "Городской";
      } else {
          return "Неизвестный";
      }
  }
}

const contact1 = new Contact('example@gmail.com', '+123456789012');
console.log(contact1.phoneType);

const contact2 = new Contact('example@live.com', '+123456789012345678');
console.log(contact2.phoneType); 
