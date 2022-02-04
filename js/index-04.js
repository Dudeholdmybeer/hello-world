// ! Модуль 4: Занятие 7 - Коллбэки и стрелочные функции

// * Задача 1 :  * createProduct(obj, callback) - принимает объект товара без id, а также коллбек. Функция создаёт объект товара, добавляя ему уникальный идентификатор в свойство id и вызывает коллбек передавая ему созданный объект.   * logProduct(product) - коллбек принимающий объект продукта и логирующий его в консоль   * logTotalPrice(product) - коллбек принимающий объект продукта и логирующий общую стоимость товара в консоль

// Чтобы не мутировать исходный обьект obj - необходимо создать новый (например - product) через операцию ...spread

// const createProduct = (obj, callback) => {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = ({ price, quantity, name }) => {
//   const totalPrice = price * quantity;
//   const message = `Total price of "${name}" = ${totalPrice}`;
//   console.log(message);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);

// createProduct({ name: '🍋', price: 10, quantity: 15 }, logTotalPrice);

// * Задача 2 :  * Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки. * Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае. * Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   balance: 500,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       return onError(
//         `Сумма операции: ${amount}, превышает лимит одной транзакции: ${TRANSACTION_LIMIT}. `
//       );
//     } else if (amount > this.balance) {
//       return onError(
//         `Сумма операции: ${amount}, превышает сумму средств на балансе: ${this.balance}. `
//       );
//     } else {
//       this.balance -= amount;
//       onSuccess(
//         `Операция выполнена успешно, сумма снятия: ${amount}, остаток на счету: ${this.balance}. `
//       );
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       return onError(
//         `Сумма операции: ${amount}, превышает лимит одной транзакции: ${TRANSACTION_LIMIT}. `
//       );
//     } else if (amount <= 0) {
//       return onError(
//         `Сумма операции: ${amount}, значение не может быть меньше, либо равно нулю. `
//       );
//     } else this.balance += amount;
//     onSuccess(
//       `Операция выполнена успешно, сумма пополнения: ${amount}, остаток на счету: ${this.balance}. `
//     );
//   },
// };

// const handleSuccess = message => console.log(`✅ Success! ${message}`);

// const handleError = message => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// * Задача 3 : * Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова колбека.

// const each = (array, callback) => {
//   const newArray = [];

//   for (const element of array) {
//     newArray.push(callback(element));
//   }
//   return newArray;
// };

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// * Задача 4 :  * Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const logItems = items => {
//   console.log(items);
//   items.forEach((item, index) => console.log(`${index + 1} - ${item}`));
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// * Задача 5 :  * Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const printContactsInfo = ({ names, phones }) => {
//   const arrayNames = names.split(',');
//   const arrayPhones = phones.split(',');

//   let message;
//   arrayNames.forEach((element, index) => {
//     message = `${index + 1}: ${element} - ${arrayPhones[index]}`;
//     console.log(message);
//   });
// };

// //
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// * Задача 6 :  * Выполните рефакторинг кода используя метод forEach и стрелочные функции.
