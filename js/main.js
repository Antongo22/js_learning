// 1
let phones = [ 
  '590.423.4568', 
  '650.124.7234', 
  '650.507.9879', 
  '011.44.1343.529268', 
  '011.44.1344.478968', 
  '011.44.1644.429267', 
  '11.44.1343.52', 
  '11.44.1643.52'
];

let maskedPhones = phones.map(phone => {
  let lastDotIndex = phone.lastIndexOf('.');
  
  let beforeLastDot = phone.slice(0, lastDotIndex + 2); 
  let afterLastDot = phone.slice(lastDotIndex + 2);
  
  let maskedAfterLastDot = afterLastDot.replace(/\d.*/, '****');
  
  return beforeLastDot + maskedAfterLastDot;
});

console.log(maskedPhones);

// 2
let cards = [ 
  '4000 0012 0056 9499', 
  '4000 0013 5456 7379', 
  '4000 0014 1456 9869', 
  '4000 0015 3466 7859', 
  '4000 0016 3556 6899', 
  '4000 0017 4456 4699'
];

let maskedCards = cards.map(card => {
  let sanitizedCard = card.replace(/\s+/g, '');
  
  let maskedCard = sanitizedCard.slice(0, 4) + '*****' + sanitizedCard.slice(-4);
  
  return maskedCard;
});

console.log(maskedCards);

// 3
function getInfo(prices) {
  let countStartsWithPrice = 0;
  let countEndsWithDollar = 0;

  prices.forEach(price => {
      if (price.startsWith('Цена')) {
          countStartsWithPrice++;
      }
      if (price.endsWith('$')) {
          countEndsWithDollar++;
      }
  });

  return [countStartsWithPrice, countEndsWithDollar];
}

let prices = [ 
  'Цена товара - 1200$', 
  'Стоимость - 500$', 
  'Цена не определена', 
  '9999',
  'Ценовая категория - больше 300$', 
  'Цена за услугу 500 EUR', 
  '150$',
];

console.log(getInfo(prices));

// 4
function kingSayd(str) {
  const prefix = "Король сказал:";
  
  if (str.startsWith(prefix)) {
      console.log(str);
  } else {
      console.log(`${prefix} ${str}`);
  }
}

kingSayd("сегодня хорошая погода"); 



// 5
function isItFridayToday() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); 

  if (currentDay === 5) {
      console.log('Сегодня пятница!');
  } else if (currentDay === 4) {
      console.log('Пятница была вчера');
  } else if (currentDay === 6) {
      console.log('Завтра пятница!');
  } else {
      const daysUntilFriday = currentDay < 5 ? 5 - currentDay : 6; 
      const pluralDays = daysUntilFriday === 1 ? 'день' : 'дней';
      console.log(`Пятница будет через ${daysUntilFriday} ${pluralDays}`);
  }
}

isItFridayToday();
