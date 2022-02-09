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

// const calAverage = (...args) => {
//   let sumOfNumbers = 0;

//   args.forEach(element => {
//     sumOfNumbers += element;
//   });

//   const average = sumOfNumbers / args.length;

//   return average;
// };

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// ! Модуль 4: Занятие 8 - Переберающие методы массива:

// * 1 - Метод map(): Поэлементно перебирает оригинальный массив. Не изменяет оригинальный массив. Результат работы коллбек-функции записывается в новый массив. Возвращает новый массив такой же длины.

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// * Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив значений свойства из всех объектов. Есть массив студентов, а нужно получить отдельный массив их имён.

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const studentsNames = students.map(student => student.name);
// console.log(studentsNames);

// * 2 - Метод flatMap(): аналогичен методу map(), но применяется в случаях когда результат это многомерный массив который необходимо «разгладить». Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность).

// В массиве students хранится список студентов со списком предметов которые посещает студент в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов которые посещает эта группа студентов, пока даже повторяющихся.

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];
// const studentsCoueses = students.flatMap(student => student.courses);

// console.log(studentsCoueses);

// * 3 - Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию. Не изменяет оригинальный массив. Поэлементно перебирает оригинальный массив. Возвращает новый массив. Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции. Если коллбек вернул true элемент добавляется в возвращаемый массив. Если коллбек вернул false элемент не добавляется в возвращаемый массив. Если ни один элемент не удовлетворил условию, возвращает пустой массив

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// * Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов.

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

// * 4 - Метод find() - Если метод filter(cabllack) используется для поиска всех элементов удовлетворяющим условию, то метод find(callback) позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается. То есть он ищет до первого совпадения. Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства.

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(colorPickerOptions.find(option => option.label === 'blue')); // { label: 'blue', color: '#2196F3' }
// console.log(colorPickerOptions.find(option => option.label === 'white')); // undefined

// * 5 - Метод findIndex(callback) это современная замена методу indexOf(). Позволяет выполнять поиск по более сложным условиям чем просто равенство. Используется как для поиска в массиве примитивов, так и в массиве обьектов.

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(colorPickerOptions.findIndex(option => option.label === 'blue'));
// console.log(colorPickerOptions.findIndex(option => option.label === 'white'));

// * 6.1 - Метод every() - Проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// * 6.2 - Метод some() - Проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// * 7 - Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор.

// const total = [2, 7, 3, 14, 6, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// });

// console.log(total); // 32

// // Массив обьектов

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// // Пример из конспекта:

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// * 7 - Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// const scores = [61, 19, 74, 3, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

//  ! Репета 4-2:

// * Метод reduce - Собираем все теги из твитов

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((alllTags, tweet) => {
//   alllTags.push(...tweet.tags);
//   return alllTags;
// }, []);

// Тоже самое, но чтобы линтеры не ругались, и запись в одну строку...

// const allTags = tweets.reduce(
//   (alllTags, tweet) => [...alllTags, ...tweet.tags],
//   []
// );

// console.log(allTags);

// * Тоже самое но с методом flatMap:

// const allTags = tweets.flatMap(tweet => tweet.tags);
// console.log(allTags);

// * Ведём статистику тегов: если свойство с ключом tag есть - увеличить его значение на 1, если свойствоства нет с таким ключом что в tag, сделать и записать 1

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// Тоже самое, но чтобы линтеры не ругались, и запись в одну строку...

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(tagsStats);

// * Метод sort - примитивы:

// const numbers = [1, 19, 11, 6, 5, 65, 14, 2, 3];

// numbers.sort((a, b) => {
//   return b - a;
// });

// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

// * Метод sort - сложные типы:

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const bestPlayer = [...players].sort((firstPlayer, secondPlayer) => {
//   return firstPlayer.timePlayed - secondPlayer.timePlayed;
// });

// console.table(bestPlayer);

// * Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу:

// console.log('a'.charCodeAt(0));

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

console.table(cars);

// * Задача 1 - Метод map - Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = cars => cars.map(car => car.model);

// Ну можно еще и так c деструктуризацией:
// const getModels = cars => cars.map(({ model }) => model);

// console.log(getModels(cars));

// * Задача 2 - Метод map - Пусть функция makeCarsWithDiscount возвращает новый массив объектов с именным значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(car => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.1));
// console.table(makeCarsWithDiscount(cars, 0.4));

// * Задача 3 - Метод filter - Пусть функция filterByPrice возвращает массив автомобилей, цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(car => car.price < threshold);
// //   cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// * Задача 4 - Метод filter - Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// console.table(getCarsWithDiscount(cars));

// * Задача 5 - Метод filter - Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// * Задача 6 - Метод find - Пусть функция getCarByModel возвращает автомобиль, параметр  которого удовлетворяет параметру поиска.

// const getCarByModel = (cars, searchParam) =>
//   cars.find(({ model }) => model === searchParam);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// * Задача 7 - Метод sort - Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возрастанию значения свойства amount.

// const sortByAscendingAmount = cars =>
//   [...cars].sort((firstCarModel, secondCarModel) => {
//     return firstCarModel.amount - secondCarModel.amount;
//   });

// console.table(sortByAscendingAmount(cars));

// * Задача 8 - Метод sort - Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = cars =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

// * Задача 9 - Метод sort - Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в зависимости от значения параметра order.

// const sortByModel = (cars, order) => {
//   if (order === 'asc') {
//     return [...cars].sort((a, b) => a.model.localeCompare(b.model));
//   }
//   if (order === 'desc') {
//     return [...cars].sort((a, b) => b.model.localeCompare(a.model));
//   }
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// * Задача 10 - Метод reduce - Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

// * Задача 11 - Цепочки методов - Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// const getAvailableCarNames = cars =>
//   cars.filter(car => car.onSale).map(car => car.model);

// console.table(getAvailableCarNames(cars));

// * Задача 12 - Цепочки методов - Пусть функция getSortedCarsOnSale возвращает массив моделей на распродаже свойство (onSale), отсортированных по возростанию цены.

const getSortedCarsOnSale = cars =>
  cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);

console.table(getSortedCarsOnSale(cars));
console.table(cars);
