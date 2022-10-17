//                     Урок от 09/28 Стан 

//1й вариант: FUNCTION DECLARATION 

// function print() {
//    console.log("Hello World!");
// }
// print();



//2й вариант: FUNCTION EXPRESSION

// const print = function() {
//     console.log("Hello World!"); 
// }
// print();




// console.log("1");
// printSpace();
// console.log("2");
// printSpace();
// console.log("3");
// printSpace();

// printSpace();

// function printSpace() {
//     console.log("________________");
// }


// function checkEven(num) {
//     //console.log(num % 2 ? "false" : "true");
// }
// checkEven(2);


// function checkEven(num) {
//     console.log(num % 2 == 0 ? true : false);
//     //arr[0] = 2, 2 % 2 = 0, false    - проверка на четность и нечетность. 0 false все остальные true
//     //console.log(num % 2 ? "false" : "true");
// }
// let arr = [2, 4, 5, 7, 10]

// for (let i =0; i < arr.length; i++) {
//     checkEven(arr[i]);
// }
// checkEven(2);


//другой вариант

// function checkEven(num) {
//     return num % 2 == 0 ? 'even' : 'odd';
// }
// let arr = [2, 4, 5, 7, 10]

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]} - ${checkEven(arr[i])}`);
// }



// ====================    ПАРАМЕТРЫ    ========================

// function printMessage() {
//     let name = "Anna";
//     return "Hello " + name;
// }
// console.log(printMessage())


// let name = "Serg"

// function printMessage() {
//     let name = "Anna";
//     return "Hello " + name;
// }
// console.log(printMessage())
// console.log(name);


// let name = "Serg"

// console.log(name);
// console.log(printMessage());
// console.log(name);

// function printMessage() {
//     let name = "Anna";
//     return "Hello, " + name;
// }
// JS пробегает по всему коду и ищет function declaration с 9 эту ф-ю она подтягивает в самый верх(мы
// этого не видим) дальше переходит к выполнению кода ==> находит переменную с 77 затем вниз смотрит
// что вывести ==> с 89 находит переменную которая у нее в памяти name ==> выводит Serg.
// Дальше с 90 printMessage ==> c 93-94-95. происходит конкотинация + ("Hello " + name). И потом прыгает 
// на с 90 и появляется строка Hello, Anna 
// потом идет с 91 и рна выводит Serg. Потому что у нас одна перемпенная с name.


// function count() {
//     let num = 10;
//     num++
//     console.log(num);
// }
// count();
// count();
// count();
// JS на с 109 находит ф=ю с 105 видит переменную с 106 дальше увеличивает с 107 обращается к с 108 console.log
// выводит в аутпут число 11. Ф-я отработалаи мы переходим на с 111 и весь предыдущий код JS уничтожает.
// Идет дальше с 111 опять вызывает ф-ю, JS  опять ищет ф-ю, находит count и создает переменную с 106 и т.д.

// let num = 10;

// function count() {
//     // let num = 10;
//     num++
//     console.log(num);
// }
// count();
// count();
// count();
// Здесь мы переменную вынесли за ф-ю. В этом случае код начинает выполняться присваивается переменная 10 с 117
// дальше у нас ф-я пропускается, она не вызывается т.к задекларирована. Бежит дальше находит с 125 
// возвращается к с 121 - происходит увеличение на 1 на с 122, но при этом в с 122 перептсалась глобальная
// переменная, потому что она единственная в данном случае и она была вызвана из вне. И поэтому она в 117 уже 
// стала 11 после первого вызова. И когда переходит к выполнению 125 мы опять находим ф-ю count обращаемся к 
// 121 num++ и увеличиваем, но num то уже не 10 а 11 и получается при увеличение 12 и  в 122 выодится 12 
// дальше также ....
// это выглядит так: с 141 по 146
// let num = 10;
// function count() {
//     // let num = 10;
//     num++
//     console.log(num);
// }
//     num++
//     console.log(num);
//     num++
//     console.log(num);
//     num++
//     console.log(num);


// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(10, 20) + sum(30, 50));


// function count(num1, num2, operator) {        //когда обьявляем ф-ю в () называют парметрами - param
//     let result;
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;        
//     }
// }
// console.log(count(10, 20, "+"));               //значение параметров называют - аргументами - arg


// function sum(num1 = 0, num2 = 0) {   
//      return num1 + num2;
         
//     }
//     console.log(sum(10));         


// function sum() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++) { //arguments - получает длину и дальше как с массивом
//         sum += arguments[i];
//     }
//     return sum;
// }
// //console.log(sum(10, 20, 30, 49, 56,76));

// let arr = [10, 20, 30,40,50,60];
// let result = sum(...arr); //... это называется оператор спрэт(разверни наш массив в последовательность чисел)
// result += 1000            //можем добавить
// console.log(result);


//======================    СТРЕЛОЧНАЯ ФУНКЦИЯ   ==================================================

//         Мы ее должны обьявить до того как будем ею пользоваться!

// function sum (num1, num2) {
//     return num1 + num2;
// }

// const newSum = (num1, num2) => {   // стрелочная ф-я
//     return num1 + num2;
// }
// console.log(sum(10, 20));
// console.log(newSum(10, 20));


// function sum (num1, num2) {
//     return num1 + num2;
// }

// const newSum = (num1, num2) => num1 + num2; //без скобок только в случае с одним параметром
//     return num1 + num2;

// function getPow (num) {
//     return num ** 2;
// }

// const newGetPow = num => num ** 2;

// console.log(getNow(10));
// console.log(newGetPow(10));