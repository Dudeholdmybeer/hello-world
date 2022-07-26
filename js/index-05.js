// ! - Модуль 5 - Занятие 9 - Ключевое слово this

//  * 1 - Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const findElement = this.stones.find(element => element.name === stoneName);

//     if (!findElement) {
//       return console.log('Введите правильное название камня');
//     }
//     return findElement.price * findElement.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Rubyfdfs')); // 1600

// * 2 - Телефонная книг - Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);

//     return this.contacts;
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// * Задача 3 - Создайте объект calculator с тремя методами: read(a, b)- принимает два значения и сохраняет их как свойства объекта. add() - возвращает сумму сохранённых значений. mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   x: 0,
//   y: 0,

//   read(firstValue, secondValue) {
//     this.x = firstValue;
//     this.y = secondValue;
//   },

//   add() {
//     return this.x + this.y;
//   },

//   mult() {
//     return this.x * this.y;
//   },
// };

// calculator.read(5, 10);
// console.log(calculator.add());

// calculator.read(50, 90);
// console.log(calculator.add());
// console.log(calculator.mult());

// ! 5-2 Прототипное наследование и классы

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()

// class Hero {
//   static description = 'Это статическое свойства класса Hero';

//   static logInfo() {
//     return 'Это статический метод класса Hero';
//   }

//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps);

//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} атакует используя ${this.weapon}`);
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warcry, ...restProps } = {}) {
//     super(restProps);

//     this.warcry = warcry;
//   }

//   babyRage() {
//     console.log(this.warcry);
//   }
// }

// const ajax = new Berserk({
//   name: 'ajax',
//   xp: 500,
//   weapon: 'axe',
//   warcry: 'waaaaaaaah',
// });

// * Hero - базовый класс
// Hero имеет статическое свойство (description) и статический метод (logInfo):
// static description = 'Это статическое свойства класса Hero';
// static logInfo() {
//     return 'Это статический метод класса Hero';
//   }
// Warrior extends Hero
// Berserk extends Warrior
// ajax - экземпляр от класса Berserk

// console.log(Hero.description);
// console.log(Hero.logInfo());
// console.log(Warrior.description);
// console.log(Warrior.logInfo());
// console.log(Berserk.description);
// console.log(Berserk.logInfo());
// console.log(ajax.description);
// console.log(ajax.logInfo);

// ! Расширение класса - наследует статические свойства и методы, а экземпляр - нет.

//! - JS-05-02-Денис

/* Задача 1:
 * Напиши класс Blogger для создания объекта блогера со следующим свойствами:
 * email - почта, строка
 * age - возраст, число
 * numberOfPosts - кол-во постов, число
 * topics - массив тем на которых специализируется блоггер
 * Класс ожидает один параметр - объект настроек с одноимёнными свойствами.
 * Добавь метод getInfo(), который возвращает строку:
 * Blogger ${почта} is ${возраст} years old and has ${кол-во постов} posts.
 * Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.
 */

// class Blogger {
//   constructor({ name = 'noname', age = 0, numberOfPosts = 0, topics = [] }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     return (this.numberOfPosts += value);
//   }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log('Console log: mango', mango);

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// const poly = new Blogger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log('Console log: poly', poly);

// console.log(poly.getInfo());
// poly.updatePostCount(4);
// console.log(poly.getInfo());

/* Задача 2:
 * Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
 * Добавь методы класса:
 * getItems() - возвращает массив товаров.
 * addItem(item) - получает новый товар и добавляет его к текущим.
 * removeItem(item) - получает товар и, если он есть, удаляет его из текущих.
 */

// class Storage {
//   constructor(array = []) {
//     this.items = array;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(itemName) {
//     this.items = this.items.filter(element => element !== itemName);
//   }
// }
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// storage.addItem('🍌');
// storage.addItem('🍌');
// console.table(items);

// // console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍌');
// console.table(items);
// console.log(storage.getItems());
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

/* Задача 2:
/*
 * Напиши класс User который создаёт объект со свойствами login и email. Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.
 */

// ! 5-2 Репета

// const objC = {
//   z: 5,
//   message: 'Это собственное свойство',
// };

// const objB = Object.create(objC);

// objB.q = 5;
// // objB.z = 10;

// const objA = Object.create(objB);
// console.log(objC.message);

// console.log(objA);
// console.log(objA.z);
// console.log(objB);
// console.log(objC);

// console.log(objC.hasOwnProperty('z'));
// console.log(objB.hasOwnProperty('q'));
// console.log(objC.q);

// Функция конструктор (класс) - макет для будующих обьектов.

// const Car = function ({ price, engine, colour, consumption, equipment } = {}) {
//   // Деструктуризировали свойства обьекта прямо в параметре. Но можно и так как ниже.
//   // const { price, engine, colour, consumption, equipment } = config;
//   this.wheels = 4;
//   this.price = price;
//   this.engine = engine;
//   this.colour = colour;
//   this.consumption = consumption;
//   this.equipment = equipment;
// };

// // Екземпляр класса, вызывается через new

// const mondeoCar = new Car({
//   price: 30000,
//   engine: 2,
//   colour: 'white',
//   consumption: 8,
//   equipment: 'sel',
// });
// console.log('mondeoCar:', mondeoCar);

// const fiestaCar = new Car({
//   price: 15000,
//   engine: 1,
//   colour: 'red',
//   consumption: 5,
//   equipment: 's',
// });
// console.log('fiestaCar:', fiestaCar);

// const mustangCar = new Car({
//   price: 40000,
//   engine: 5,
//   colour: 'yellow',
//   consumption: 15,
//   equipment: 'rs',
// });

// console.log('mustangCar:', mustangCar);

// const conceptCar = new Car();
// console.log('conceptCar:', conceptCar);

// ! Функция - Конструктор

// const Drink = function ({ name, colour, volume, price, bottle } = {}) {
//   // const { colour, volume, price } = properties;
//   this.name = name;
//   this.colour = colour;
//   this.volume = volume;
//   this.price = price;
//   this.bottle = bottle;
//   this.age = 18;
// };

// // Статические методы

// Drink.message =
//   'Я статическое свойство и доступно только на конструкторе и не доступно на прототипах';

// // console.dir(Drink);

// Drink.logInfo = function (object) {
//   console.log(object);
// };

// // Методы на прототипе

// Drink.prototype.sayName = function () {
//   console.log(this.name);
// };

// Drink.prototype.sayPrice = function () {
//   console.log(this.price);
// };

// Drink.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
//   console.log(`New price of ${this.name} is ${this.price} UAH`);
// };

// Drink.prototype.sayVolume = function () {
//   console.log(
//     `!!! Volume of alcohol in a ${this.name} is ${this.volume} % !!!`
//   );
// };

// Drink.prototype.changeColour = function (newColour) {
//   this.colour = newColour;
//   console.log(`New colour of ${this.name} is ${this.colour}`);
// };

// // Экземпляры

// const beerDrink = new Drink({
//   name: 'beer',
//   colour: 'brown',
//   volume: 5,
//   price: 20,
//   bottle: 'aluminium',
// });

// console.log(beerDrink);

// beerDrink.sayPrice();

// Пример использования статических методов на конструкторе

// Drink.logInfo(beerDrink);
// console.log(Object.keys(beerDrink));
// console.log(Object.values(beerDrink));

// console.log('beerDrink', beerDrink);
// beerDrink.sayName();
// beerDrink.changePrice(100);
// console.log('beerDrink', beerDrink);

// const wineDrink = new Drink({
//   name: 'wine',
//   colour: 'red',
//   volume: 15,
//   price: 200,
//   bottle: 'glass',
// });

// console.log('wineDrink', wineDrink);
// wineDrink.sayName();
// wineDrink.sayPrice();
// wineDrink.sayVolume();
// wineDrink.changePrice(500);

// const whiskeyDrink = new Drink({
//   colour: 'brown',
//   volume: 40,
// });

// console.log('whiskeyDrink', whiskeyDrink);
// whiskeyDrink.changePrice(200);
// console.log('whiskeyDrink', whiskeyDrink);
// whiskeyDrink.changeColour('dark-brown');
// console.log('whiskeyDrink', whiskeyDrink);

// ! Классы - Реперта 5-2-2
// Просто более современный синтаксис для создания функции конструктора. Единственный плюс это то что все храниться в одном месте

class Inverter {
  // Статические свойства и методы обьявляются в самом начале. Они нужны для того чтобы хранить константы и методы которые не нужны на экземпляре

  static manufacturerName = 'fronius';
  static logInfo(inverterModel) {
    console.log(`logInfo ---> ${inverterModel.model}`, inverterModel);
  }

  #test = 'это приватное свойство';

  constructor({
    nominalPower,
    price,
    numberOfPhases,
    stockBalance,
    model,
  } = {}) {
    this.country = 'austria';
    this.nominalPower = nominalPower;
    this.model = model;
    this._price = price;
    this.numberOfPhases = numberOfPhases;
    this.stockBalance = stockBalance;
  }

  // Методы прототипа находятся в самом классе

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  updateStockBalance(newStockBalance) {
    this.stockBalance = newStockBalance;
  }
}

console.log(Inverter.manufacturerName);

const symo10Inverter = new Inverter({
  model: 'symo10',
  nominalPower: 10000,
  price: 2000,
  numberOfPhases: 3,
  stockBalance: 500,
});

Inverter.logInfo(symo10Inverter);

const primo5Inverter = new Inverter({
  model: 'primo5',
  nominalPower: 5000,
  price: 1000,
  numberOfPhases: 1,
  stockBalance: 200,
});

primo5Inverter.updateStockBalance(300);
Inverter.logInfo(primo5Inverter);

// Гетеры и сетеры

console.log(primo5Inverter.model);
primo5Inverter.price = 999;
primo5Inverter.model = 'primo5.0';
console.log(primo5Inverter.model);
console.log(primo5Inverter.price);
