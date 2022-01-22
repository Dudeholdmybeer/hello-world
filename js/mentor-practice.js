// ! Практика с ментором

// * Задача - 1: Подсчет чаевых для ресторана

// const checkNumber = prompt('Введите сумму в чеке (грн):');
// console.log(checkNumber);
// const checkTips = prompt('Введите процент чаевых (%):');
// console.log(checkTips);

// // Идем от обратного - отмена prompt пользователем
// if (checkTips === null || checkNumber === null) {
//   alert('Canceled');
// } else {
//   const parseCheckNumber = Number.parseFloat(checkNumber);
//   const parseCheckTips = Number.parseFloat(checkTips);

//   // Идем от обратного - сначала прописываем все условия для "Invalid input data"
//   if (
//     Number.isNaN(parseCheckNumber) ||
//     Number.isNaN(parseCheckTips) ||
//     parseCheckNumber < 0 ||
//     parseCheckTips <= 0 ||
//     parseCheckTips > 100
//   ) {
//     alert('Invalid input data');
//   } else {
//     const tipsAmount = ((parseCheckNumber * parseCheckTips) / 100).toFixed(2);
//     const totalSum = Number(parseCheckNumber) + Number(tipsAmount);
//     alert(
//       `Сумма в чеке: ${parseCheckNumber} грн,\nПроцент чаевых: ${parseCheckTips} %,\nСумма чаевых: ${tipsAmount} грн,\nОбщая сумма: ${totalSum} грн.`
//     );
//   }
// }

// * Задача - 2: Поиск средней буквы в слове

// const word = prompt('Введите слово:');

// if (word === null) {
//   alert('Canceled!');
// } else if (word.trim() === '') {
//   alert('Invalid value!');
// } else {
//   const wordArray = word.trim().split('');
//   const arrayLength = wordArray.length;
//   if (arrayLength % 2 === 0) {
//     const message = `${wordArray[arrayLength / 2 - 1]}${
//       wordArray[arrayLength / 2]
//     }`;
//     alert(message);
//   } else {
//     const message = `${wordArray[Math.round(arrayLength / 2) - 1]}`;
//     alert(message);
//   }
// }

// * Задача - 3: Получить результирующий массив

// result = ['a', 'b', 'c', 0, 1, 2, 3]

// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;

// const result = a.concat(c, b[0], b[1]);

// console.log(result);

// * Задача - 4: Получить результирующий массив

// result = [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.splice(5, 3, 0, 0, 0);
// a.fill(0, 5, 8);
// console.log(a);

// * Задача - 5: Получить результирующий массив

// result = ['a', 'b', 'c', 'a', 'b', 'c', 'g', 'h'];

// const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// a.splice(3, 3, 'a', 'b', 'c');
// a.copyWithin(3, 0, 3);
// console.log(a);

// * Задача - 6: Получить результирующий массив

// result = [1, 2, 3, 4, 5, 6, 7, 8];

// const a = [1, 2, [3, 4, [1, 2]], [5, 6], 7, 8];
// let result = [];

// for (const item of a) {
//   if (Array.isArray(item) === false) {
//     result.push(item);
//   } else {
//     result.push(...item);
//   }
// }

// console.log(result);

// const result = a.flat(2);
// console.log(result);

// * Задача - 7: Под каким индексом буква 'n' встречается последний раз

// const a = ['a', 'b', 'c', 'n', 'n', 'f', 'n', 'g', 's'];

// let index = 0;

// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] === 'n') {
//     index = i;
//   }
// }

// const index = a.lastIndexOf('n');

// console.log(index);

// * Задача - 8: Получить результирующий массив
// result = [7, 6, 5, 4, 3, 2, 1];

// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = [];

// for (let i = a.length - 1; i >= 0; i -= 1) {
//   result.push(a[i]);
// }

// const result = a.reverse();

// console.log(result);
