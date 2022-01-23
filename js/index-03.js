// ! 3-1 - Обьекты

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смешного человека',
//     author: 'Федор Достоевский',
//     rating: 7.75,
//   },
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// * - Как отличить объект от области видимости

// * 1
// const x = {};

// * 2
// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// * 3
// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

//  <input name="color" value="tomato" >

//  * Вычисляемые свойства

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// * Работа с коллекцией (массивом объектов)

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// console.table(friends);

// * Задача 1 - Ищем друга по имени

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.name);

//     if (friend.name === friendName) {
//       return 'НАШЛИ!!!';
//     }
//   }

//   return 'НЕ НАШЛИ :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// * Задача 2 - Создать массив из имен

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// * Задача 3 - Получить обьекты друзей которые онлайн

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// * Задача 4 - создать 2 массива онлайн и офлайн: если тру - в первый, если нет - во второй

// const getFriendsByStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }

//     friendsByStatus.offline.push(friend);
//   }

///   return friendsByStatus;
// };

// console.log(getFriendsByStatus(friends));

// *  Задача 5 - Напиши скрипт, который, для объекта user, последовательно: * добавляет поле mood со значением 'happy' * заменяет значение hobby на 'skydiving' * заменяет значение premium на false * выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'John',
//   age: 21,
//   hobby: 'css',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// delete user.premium;

// const keys = Object.keys(user);
// let message = '';

// for (const key of keys) {
//   message = `${key} : ${user[key]}`;
//   console.log(message);
// }

// console.table(user);

// * Задача 6 - У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function salaryCalculation(object) {
//   const salaryValues = Object.values(object);
//   let totalSalary = 0;

//   for (const salaryValue of salaryValues) {
//     totalSalary += salaryValue;
//   }

//   return totalSalary;
// }

// console.log(salaryCalculation(salaries));

// * Задача 6 - Напишите ф-цию calcTotalPrice(array, stoneName), которая принимает массив объектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(array, stoneName) {
//   let message = 'Камень не найден в базе';
//   let totalPrice;
//   for (const item of array) {
//     if (item.name === stoneName) {
//       totalPrice = item.price * item.quantity;
//       message = `Общая стоимость камней ${stoneName} составляет ${totalPrice}`;
//     }
//   }
//   return message;
// }

// console.log(calcTotalPrice(stones, 'Бриллиант'));

//  * Задача 7 - Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзакций всего две.
 * Можно положить либо снять деньги со счета.
 */

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

/*
 * Метод создает и возвращает объект транзакции.
 * Принимает сумму и тип транзакции.
 */
// createTransaction(amount, type) {
//   return {
//     id: this.transactions.length + 1,
//     amount,
//     type,
//   };
// },

/*
 * Метод отвечающий за добавление суммы к балансу.
 * Принимает сумму транзакции.
 * Вызывает createTransaction для создания объекта транзакции
 * после чего добавляет его в историю транзакций
 */
// deposit(amount) {
//   this.balance += amount;

//   const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

//   this.transactions.push(newTransaction);

//   return `Пополнение прошло успешно на сумму ${amount}$.`;
// },

/*
 * Метод отвечающий за снятие суммы с баланса.
 * Принимает сумму транзакции.
 * Вызывает createTransaction для создания объекта транзакции
 * после чего добавляет его в историю транзакций.
 *
 * Если amount больше чем текущий баланс, выводи сообщение
 * о том, что снятие такой суммы не возможно, недостаточно средств.
 */
// withdraw(amount) {
//   if (amount > this.balance) {
//     return 'Недостаточно средств на счету!';
//   }

//   this.balance -= amount;

//   const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);

//   this.transactions.push(newTransaction);

//   return `Операция прошла успешно на сумму ${amount}$.`;
// },

/*
 * Метод возвращает текущий баланс
 */
// getBalance() {
//   return this.balance;
// },

/*
 * Метод ищет и возвращает объект транзакции по id
 */
// getTransactionDetails(id) {
//   for (const object of this.transactions) {
//     if (object.id === id) {
//       return object;
//     }
//   }
//   return 'такой операции нет';
// },

/*
 * Метод возвращает количество средств
 * определенного типа транзакции из всей истории транзакций
 */
//   getTransactionTotal(type) {
//     let total = 0;

//     for (const object of this.transactions) {
//       if (object.type === type) {
//         total += object.amount;
//       }
//     }

//     return `Сумма транзакций ${type} - ${total}`;
//   },
// };

// console.log(account.deposit(500));
// console.log(account.deposit(100));
// console.log(account.deposit(50));

// console.log(account.withdraw(150));
// console.log(account.withdraw(50));
// console.log(account.withdraw(500));

// console.log(account.transactions);

// console.table(account.getTransactionDetails(10));

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// console.log(account.getBalance());

// ! 3-1 Деструктуризация

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// * Найти самое большое число в массиве

// const numbers = [1, 2, 300, 45, 5, 699, 7, 80, 9];

// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// * Пример с копирование примитивов (распыление):

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);
// console.log(arr1 === arr2);

// * Задача 1 - перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function calcBMI({ weight, height }) {
// const { weight, height } = params;

//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

// * Задача 2 - перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
// const { names, phones } = params;

//   const arrayNames = names.split(',');
//   const arrayPhones = phones.split(',');

//   let message;
//   for (let i = 0; i < arrayNames.length; i += 1) {
//     message = `${[i + 1]}: ${arrayNames[i]} - ${arrayPhones[i]}`;
//     console.log(message);
//   }
// }

// Было
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// * Задача 3 - Глубокая деструктуризация - Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function getBotReport({ companyName, stock }) {
//   let total = 0;

//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} elements in stock`;
// }

// Было
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// );

// console.log(
//   getBotReport({
//     companyName: 'Babushka',
//     stock: {
//       tomato: 150,
//       eggs: 50,
//       meat: 200,
//     },
//   })
// );

// * Задача 4 - дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.

// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// Нагугленный генератор рандомных чисел
// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// * Задача 5 - Напиши функцию transformId(user) так, чтобы она возвращала новый объект со свойством fullName, вместо firstName и lastName.

// Мой неправильный наркоманский варик 😭, но рабочий 😂

// function transformId(user) {
//   const fullName = user['firstName'] + ' ' + user['lastName'];
//   delete user.firstName;
//   delete user.lastName;
//   return {
//     fullName,
//     ...user,
//   };
// }

// Нормальный вариант здорового человека

// function transformId({ firstName, lastName, ...otherParams }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherParams,
//   };
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );
