// ! Практика с ментором - 2

// * 1 - Напиши фукцию function (positivesum), которая принимает массив чисел и возвращает сумму только положительных чисел в массиве

// Первый вариант решения:
// const positivesum = array =>
//   array
//     .filter(element => element > 0)
//     .reduce((total, element) => total + element, 0);

// Второй вариант решения:
// const positivesum = array =>
//   array.reduce((total, element) => {
//     if (element > 0) {
//       total += element;
//     }
//     return total;
//   }, 0);

// Третий вариант решения:
// const positivesum = array =>
//   array.reduce((total, element) => (element > 0 ? total + element : total), 0);

// console.log(positivesum([2, 4, 6, 8, -5, -10, 2]));
// console.log(positivesum([2, 4, 6, 8]));
// console.log(positivesum([0, -3, 5, 7]));

// * 2 - Напиши фукцию function (letterCount), которая принимает 2 аргумента (строки) и определяет сколько символов второго аргумента находится в строке первого аргумента:

// Первый вариант решения:
// const letterCount = (string, letter) =>
//   string
//     .toLowerCase()
//     .split('')
//     .reduce(
//       (counter, element) =>
//         element.includes(letter.toLowerCase()) ? counter + 1 : counter,
//       0
//     );

// Второй вариант решения:
// const letterCount = (string, letter) =>
//   [...string.toLowerCase()].filter(element => element === letter.toLowerCase())
//     .length;

// console.log(letterCount('Maggy', 'g'));
// console.log(letterCount('Barry', 'b'));
// console.log(letterCount('abc', 'z'));

// * 3 - Напиши фукцию function (countPoints), которая принимает аргумент в виде массива строк с результатами матчей "x:y" и определяет количество заработанных очков:

// Первый вариант решения:

// const countPoints = results =>
//   results.reduce((totalScore, match) => {
//     let matchResult = 0;
//     const matchArray = match.split('');
//     if (
//       Number(matchArray[0]) >= 0 &&
//       Number(matchArray[2]) >= 0 &&
//       Number(matchArray[0]) > Number(matchArray[2])
//     ) {
//       matchResult = 3;
//     }
//     if (
//       Number(matchArray[0]) >= 0 &&
//       Number(matchArray[2]) >= 0 &&
//       Number(matchArray[0]) === Number(matchArray[2])
//     ) {
//       matchResult = 1;
//     }
//     if (
//       Number(matchArray[0]) >= 0 &&
//       Number(matchArray[2]) >= 0 &&
//       Number(matchArray[0]) < Number(matchArray[2])
//     ) {
//       matchResult = 0;
//     }
//     totalScore += matchResult;
//     return totalScore;
//   }, 0);

// Второй вариант решения:
// const countPoints = results =>
//   results.reduce(
//     (totalScore, match) =>
//       Number(match[0]) >= 0 &&
//       Number(match[2]) >= 0 &&
//       Number(match[0]) > Number(match[2])
//         ? totalScore + 3
//         : Number(match[0]) >= 0 &&
//           Number(match[2]) >= 0 &&
//           Number(match[0]) === Number(match[2])
//         ? totalScore + 1
//         : totalScore,
//     0
//   );

// Третий вариант решения:
// const countPoints = results =>
//   results.filter(element => Number(element[0]) > Number(element[2])).length *
//     3 +
//   results.filter(element => Number(element[0]) === Number(element[2])).length;

console.log('Сумма очков:', countPoints(['3:1', '1:2', '1:1', '2:1']));
console.log(countPoints(['3:1', '0:0', '1:2']));

// * 4 - Составить обьект и поместить в каждое свойство массив данных каждого пользователя:

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// Вариант в виде костыля:
// const newObject = {};

// newObject.name = users.map(user => user.name);
// newObject.email = users.map(user => user.email);
// newObject.eyeColor = users.map(user => user.eyeColor);
// newObject.friends = users.map(user => user.friends);
// newObject.isActive = users.map(user => user.isActive);
// newObject.balance = users.map(user => user.balance);
// newObject.gender = users.map(user => user.gender);
// newObject.age = users.map(user => user.age);

// console.log(newObject);

// Нормальный вариант в виде функции:
// const newObject = object => {
//   const objectKeys = Object.keys(object[0]);

//   const newObject = {};

//   for (const key of objectKeys) {
//     newObject[key] = object
//       .flatMap(user => user[key])
//       .filter((element, index, array) => array.indexOf(element) === index);
//   }

//   return newObject;
// };

// console.log(newObject(users));
