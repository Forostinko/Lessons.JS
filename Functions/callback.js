//===========================  CALLBACK  =========================================
//Это функция которая передается как аргумент в другую функцию для выполнения какого-то действия


// const printMessage = function (param) {
//     console.log(`You just entered ${param}`);
// }
// //printMessage("hello");
// //console.log(typeof printMessage);

// const newMessage = printMessage;
// console.log(typeof newMessage);       //это функция

// printMessage("hello");
// newMessage("Hello");


// function sum(num1, num2) {
//     return function() {
//       return num1 + num2;
//     }
// }
// const newSum = sum(10, 20);

// console.log(newSum);     //здесь анонимная функция
// console.log(newSum());

//обычный вариант
// const calculator = function(num1, num2, operator) {
//     if (operator.toLowerCase() == "add") {
//         return num1 + num2;
//     }
//     if (operator.toLowerCase() == "sub") {
//         return num1 - num2;
//     }
// }
// console.log(calculator(1,5,"Add"));

//callback - через const, let
// const calculator = function(num1, num2, callback) {
//     return callback(num1, num2);
// }

// const add = function(num1, num2) {
//     return num1 + num2;
// }

// const sub = function(num1, num2) {
//     return num - num2
// }

// console.log(calculator(2, 6, add));  //если захотим вычитание то меняем на sub


//callback - через function
// function calculator(num1, num2, callback) {
//     return callback(num1, num2);
// }

// let add = function(num1, num2) {
//     return num1 + num2;
// }

// let sub = function(num1, num2) {
//     return num1 - num2
// }

// console.log(calculator(2, 6, sub));


//мы можем с60-61 внести в с68  вместо sub и это будет полный callback
// function calculator(num1, num2, callback) {
//     return callback(num1, num2);
// }

// let sub = function(num1, num2) {
//     return num1 - num2
// }

// console.log(calculator(2, 6, function(num1, num2) {
//     return num1 + num2;
// }));

//на тестах callback будет применяться как безымянная функция ()=>{}



// const arr = [-1, -8, -9, -2, 0, -5]
// const changeSign = el => console.log(-el)
// //arr.forEach(changeSign)                  //это именная функция 

// //проще сделать безымянную, она удобнее и это и сеть callback function
// arr.forEach(el => console.log(-el))

//в процессе мы можем проверить индекс четности(просто добавлять в процессе) и добавляем () - 
//потому что уже 2 элемента (el, i), ? (вместо если) : (то)
//arr.forEach((el, i) => i % 2 == 0 ? console.log(-el) : console.log(" "))


//вывести в кубе
//arr.forEach(el => console.log(el ** 3))


//возвести нечетные числа в квадрат и узнать длину массива
//самый последний : console.log(" ") - это для вывода наглядности пробелов
// const arr = [-1, -8, -9, -2, 0, -5]  
// const changeSign = el => console.log(-el)
// arr.forEach((el, i, newArr) => i % 2 != 0 ? console.log((el ** 2) + arr.length) : console.log(" "))