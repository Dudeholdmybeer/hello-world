// ! Модуль 2: Функции и массивы

// ! Лекция 2-1

/*
 * Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.
 */

// const numbers = [2, 17, 94, 1, 23, -37, 0, -5, -125];

// function getSmallestNumber() {
//   return Math.min(...numbers);
// }
// console.log("smallestNumber:", getSmallestNumber());

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }

//   return `Пользователь ${loginToFind} не найден.`;
// };

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// ! Лекция 2-2

// * Мутирование исходного массива - изменение массива в ячейке его памяти

// function fun(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);
//     array[i] *= 2;
//   }
//   console.log(array);
// }

// const numbers = [1, 2, 3, 4, 5];
// fun(numbers);
// console.log(numbers);

// * 1 - Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в килограммах на квадрат высоты человека в метрах. * Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая. Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));

//   const index = numericWeight / Math.pow(numericHeight, 2);

//   return index.toFixed(1);
// }

// const bmi = calcBMI("88,3", "1,75");
// console.log("Индекс массы тела =", bmi);

// * 2 - Меньшее из чисел. Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//   if (a > b) {
//     return b;
//   }
//   if (a < b) {
//     return a;
//   }
//   if (a === b) {
//     return "Число а равно числу b";
//   }
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// * 3 - Площадь прямоугольника. Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const rectSides = dimensions.split(" ");
//   const rectArea = Number(rectSides[0]) * Number(rectSides[1]);
//   return rectArea;
// }

// console.log(getRectArea("8 11"));

// * 4 - Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1. Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   let message;
//   for (let i = 0; i < items.length; i += 1) {
//     message = `${[i + 1]} - ${items[i]}`;
//     console.log(message);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// * 5 - Логирование контактов. Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое

// function printContactsInfo(names, phones) {
//   const arrayNames = names.split(",");
//   const arrayPhones = phones.split(",");

//   let message;
//   for (let i = 0; i < arrayNames.length; i += 1) {
//     message = `${[i + 1]}: ${arrayNames[i]} - ${arrayPhones[i]}`;
//     console.log(message);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// * 7 - Среднее значение. Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аргументы будут только числами.

// function calAverage() {
//   let sumOfNumbers = 0;
//   let average;

//   for (const argument of arguments) {
//     sumOfNumbers += argument;
//   }

//   average = sumOfNumbers / arguments.length;

//   return average;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// * 8 - Форматирование времени. Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   minutes = minutes % 60;

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);

//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// * 9 - Коллекция курсов (includes, indexOf, push и т. д.). Напишите функции для работы с коллекцией обучающих курсов courses: * addCourse(name) - добавляет курс в конец коллекции * removeCourse(name) - удаляет курс из коллекции * updateCourse(oldName, newName) - изменяет имя на новое

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(course) {
//   if (courses.includes(course)) {
//     return "У вас уже есть такой курс";
//   }
//   const additionalCourse = courses.push(course);
//   return courses;
// }

// console.log(addCourse("Express"));
// console.log(addCourse("CSS"));

// function removeCourse(course) {
//   if (courses.includes(course)) {
//     const coursePosition = courses.indexOf(course);
//     courses.splice(coursePosition, 1);
//     return courses;
//   }
//   return "Курс с таким именем не найден";
// }

// console.log(removeCourse("React"));
// console.log(removeCourse("Vue"));

// function updateCourse(oldCourse, newCourse) {
//   if (courses.includes(oldCourse)) {
//     const coursePosition = courses.indexOf(oldCourse);
//     courses.splice(coursePosition, 1, newCourse);
//     return courses;
//   }
//   return "Курс с таким именем не найден";
// }

// console.log(updateCourse("React", "NestJS"));

// ! Автопроверки

// * 1. Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(19));

// * 2. Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// * удали переменную message
// * удали else
// * код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
// }

// console.log(checkPassword("jqueryismyjam"));

// * 3. Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// * available - доступное количество товаров на складе
// * ordered - количество единиц товара в заказе
// * Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     console.log("Your order is empty!");
//     return;
//   }

//   if (ordered > available) {
//     console.log("Your order is too large, not enough goods in stock!");
//     return;
//   }
//   console.log("The order is accepted, our manager will contact you");
// }

// checkStorage(5, 1);

// * Второй вариант (правильный для автопроверки)

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(5, 40));

// * 4. Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// * 5. Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement, secondElement, lastElement);

// * 6. Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// * 7. Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana", "orange"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// * 8. Объяви две переменные: lastElementIndex - Индекс последнего элемента масcива fruits через длина_массива - 1. lastElement - Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana", "orange"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// * 9. Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// * Вариант 1
// function getExtremeElements(...array) {
//   const firstAndLastElements = [array[0], array[array.length - 1]];
//   console.log(firstAndLastElements);
// }

// getExtremeElements("apple", "peach", "pear", "banana", "orange");
// getExtremeElements(1, 2, 3, 4, 5, 6, 7);

// * Вариант 2
// function getExtremeElements(array) {
//   const firstAndLastElements = [array[0], array[array.length - 1]];
//   return firstAndLastElements;
// }

// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// * 10. Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// * 11. Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово. Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord). Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   let totalPrice = message.split(" ").length * pricePerWord;
//   return totalPrice;
// }

// console.log(calculateEngravingPrice("Web-development is creative work", 40));

// * 12. Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }

// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));

// * 13. Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки. Значением параметра title будут строки, слова которых разделены только пробелами. Все символы slug должны быть в нижнем регистре. Все слова slug должна быть разделены тире

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// }

// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// * 14. Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits. firstTwoEls - массив из первых двух элементов, nonExtremeEls - массив из всех элементов кроме первого и последнего, lastThreeEls - массив из трёх последних элементов

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// * 15. Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// * 16. Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива. Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }

//   return newArray;
// }

// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

// * 17. Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// * 18. Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(24));

// * 19. Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// * 20. Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// * 21. Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const array = string.split(" ");
//   let word;
//   let wordlength = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > wordlength) {
//       word = array[i];
//       wordlength = array[i].length;
//     }
//   }
//   return word;
// }

// console.log(
//   "The longest word:",
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// );
// console.log("The longest word:", findLongestWord("Google do a roll"));

// * Найти самое большое число в массиве

// const numbers = [51, 18, 13, 24, 7, 85, 19, 100];
// let biggestNumber = numbers[0];
// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log("biggestNumber:", biggestNumber);

// * 22. Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));

// * 23. Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// * 24. Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits. Дополни код функции так, что если: фрукт есть в массиве, то функция возвращает true; фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }

// console.log(checkFruit("plum"));

// * 25. Общими элементами массивов называют те элементы, которые присутствуют во всех массивах. Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов. Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// * 26. Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const item of order) {
//     total += item;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// * 27. Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     const num = number;

//     if (num > value) {
//       filteredNumbers.push(num);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 38));

// * 28. Дополни выражения остатка от деления так, чтобы код проходил тесты. Объявлена переменная a Значение переменной a это число 0 Объявлена переменная b Значение переменной b это число 1 Объявлена переменная c Значение переменной c это число 3 Объявлена переменная d Значение переменной d это число 5 Объявлена переменная e Значение переменной e это число 2

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// * 29. Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   const newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
// }

// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(6, 12));

// * 30. Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// * 31. Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она: возвращала первое число от start до end, которое делится на divisor без остатка не использовала оператор break не использовала переменную number

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }
// }

// console.log(findNumber(8, 17, 3));

// * 32. Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае. При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
