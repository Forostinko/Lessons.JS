// ========================= Урок от 10/12 (Stan P.)

// const obj = {}
// Обьект - это какой то контейнер для набора свойств 
// Свойства - это связка - состоит из ключа и значения (key and value)

// ==== Обьявлять можем как array через литералы {}
// const obj = {a: 'a', b: 123, c: true, d: {1, 2, 3}}

// ==== Другой вариант через конструктор обьектов
// const newObj = new Object()

// const obj = {a: 'a', b: 123, c: true, d: {1, 2, 3}}
// let newObj = new Object()
// newObj = obj
// obj.a = "Test"
// console.log(obj)
// console.log(obj.a)
// console.log(newObj)
// console.log(obj == newObj)

// ============   Статический метод, assign - для копирования =========================
// с22 testObj - обьект назначения - куда будут получаться данные
// с22 - obj - то что мы собираемся копировать
// с 24 - куда складывается
// const obj = {a: 'a', b: 123, c: true, d: {1, 2, 3}}
// const newObj = {a: 'ab', bd: 123, cd: true, db: {1, 2, 3}}

// const testObj = {}
// Object.assign(testObj, obj)

// console.log(testObj)
// console.log(obj == testObj)


// 3 метода:
// 1). Object.keys()  - получает массив ключей
// 2). Object.values() - получает массив значений
// 3). Object.entries() - получает массив ключей и значений

//1). ======  object.keys()
// const subjects = {js: "JavaScript", j: "Java", sql: "SQL", eng: "English" }
// console.log(Object.keys(subjects));

// 2). =====  Object.values()
// const subjects = {js: "JavaScript", j: "Java", sql: "SQL", eng: "English" }
// console.log(Object.values(subjects));

// если хотим отсортировать  - sort() - будет по алфавитному порядку или по увелич. если цифры
// const subjects = {js: "JavaScript", j: "Java", sql: "SQL", eng: "English" }
// console.log(Object.values(subjects).sort());

// указываем стрелочную ф-ю чтобы был правильный порядок сортировки (a, b) => a - b)
// если от большево к меньшему то (a, b) => b - a)
// const subjects = {"1": "JavaScript", 2: "Java", 5: "SQL", 100: "English" }
// console.log(Object.keys(subjects).sort((a, b) => a - b));

//3). =====  Object.entries() 
// const subjects = {js: "JavaScript", j: "Java", sql: "SQL", eng: "English" }
// console.log(Object.entries(subjects))



// Примеры:

// const lastPrice = 5
// const newDiff = 3
// const fruits = {"apple":lastPrice + newDiff, "banana": 6, "orange": 7, "plum": 9}
// console.log(fruits)

// //увеличим  цены на 20%
// //1. вытаскиваем ключ и значение

// const arr = Object.entries(fruits)
// console.log(arr)

// //2. теперь увеличиваем цены
// // map - пробегается по всему массиву
// // в обычных случаях мы бы сделали для увеличения цены на 20% так arr.map(el => el * 1.2)
// // мы делаем ([key, value]) => el * 1.2)
// // Math.trunc этот метод отсекает дробную часть
// // либо toFixed(2) - в конце 2 - чтобы усечь до 2х знаков

// const newArr = arr.map(([key, value]) => [key, (value * 1.2).toFixed(2)]) //этот вариант будет с 0 на конце
// //const newArr = arr.map(([key, value]) => [key, +(value * 1.2).toFixed(2)]) //этот вариант будет без 0 с (+)

// console.log(newArr)

// // этот метод переводит массив в обьект
// const finalFruits = Object.fromEntries(newArr)
// console.log(finalFruits)



// arr = [1, 2, 4]
// a = arr[0]
// b = arr[1]
// c = arr[2]
//тоже самое можно сделать по другому
//можно создать массив из нужных мне переменных и присвоить им наш имеющийся массив
// [a, b, c] = [1, 2, 4]
// a получит 1
// b получит 2
// c получит 4
// и потом я могу, если мне нужно использовать:
// d = a + b   // 1 + 2 = 3  // d = 3


// //Посчитать кол-во символов
// // метод for of - используется для обработки массивов
// const str = "Hello world!"

// const obj = {}                //созали обьект

// for (let letter of str) {    //пойдем по символам(буквам)
//     if (letter in obj) {     //если буква это обьект и она есть там
//         obj[letter]++        //делаем обьект по ключу letter
//     } else {                 //если такой буквы нету
//         obj[letter] = 1      //то в наш обьект с ключом letter добавить букву и присвоить значение 1
//     }
// }

// console.log(obj)

