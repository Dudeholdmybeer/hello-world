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

class Hero {
  static description = 'Это статическое свойства класса Hero';

  static logInfo() {
    return 'Это статический метод класса Hero';
  }

  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const ajax = new Berserk({
  name: 'ajax',
  xp: 500,
  weapon: 'axe',
  warcry: 'waaaaaaaah',
});

// * Hero - базовый класс
// Hero имеет статическое свойство (description) и статический метод (logInfo):
// static description = 'Это статическое свойства класса Hero';
// static logInfo() {
//     return 'Это статический метод класса Hero';
//   }
// * Warrior extends Hero
// * Berserk extends Warrior
// * ajax - экземпляр от класса Berserk

console.log(Hero.description);
console.log(Hero.logInfo());
console.log(Warrior.description);
console.log(Warrior.logInfo());
console.log(Berserk.description);
console.log(Berserk.logInfo());
console.log(ajax.description);
console.log(ajax.logInfo);

// ! Расширение класса - наследует статические свойства и методы, а экземпляр - нет.
