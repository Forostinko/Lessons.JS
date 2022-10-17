//Функция - это блок кода, который можно выхывать не один раз!
//JS берет последнее определение функции и работает с ним. Неважно где оно было сделано. 
//Там где вы переопределили функцию - она будет истиной в последней инстанции а не предыдущая. И будет 
//работать именно эта функция а не предыдущая.
//Н-р: Если мы randomInt(); с 43 перенесем на с5 

// function testfunction() {
//     const x = 5;
//     const y = 10;
//     console.log(x + y);

// }

// function hello() {
//     console.log("Hello");
// }
// hello();                  //можем вызвать функцию в любом месте
// testfunction();

// //функция внутри функции
// function testfunction2() {                 
//     function t3() {
//         console.log('t3 function')
//     }
//     t3();
//     console.log('test function 2');
// }
// testfunction2();


// function unixTime() {
//     let time = Math.floor(new Date().getTime());
//     console.log(time);
// }
// unixTime();


// function randomInt() {
//     const min = 100;
//     const max = 200;
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(rand)
// }
// randomInt();

// console.log(randomInt);


// //======================    ПЕРЕМЕННАЯ И ФУНКЦИИ    ===================================================

// let min = 300;
// let max = 400;
// function rand() {
   
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(rand)
// }
// rand();

// min = 5;
// max = 15;
// rand();


// //При запуске функции 71/72/73 - каждый раз будет 10 это происходит потому что:
// //выполняется блок кода (блок тела функции) с 69 по 70 и каждый раз создается новая переменная 9,
// //увеличивается на 1, выводится. 
// //Когда запускается 2й раз опять создается новая переменная 9 и т.д.
// //Запускается каждый раз заново
// // function count() {
// //     let c = 9;
// //     c++;
// //     console.log (c);
// // }
// // count();
// // count();
// // count();

// //Если мы вынесесем переменную за пределы функции, то в этом случае, при запуске функции будет искаться
// //переменная с (с83) и поскольку она не определена внутри, то будет искаться снаружи с 81 ->
// //будет увеличена на 1 и выведена 
// //2й раз, поскольку она уже была увеличина на 1 -> увеличится еще на 1 и т.д.
// //Каждый раз переменна будет увеличиваться на 1
// let c = 9;
// function count() {
//     c++;
//     console.log (c);
// }
// count();
// count();
// count();
// count();





// document.querySelector('.out-1').addEventListener('mousemove, blockWidth');
// let w = 100;

// function blockWidt() {
//     w++;
//     document.querySelector('.out-1').style.width = w = 'px'; 
// }




//========================   АРГУМЕНТЫ ФУНКЦИИ   ===============================================

//Формальные аргументы - (a, b)
//Мне необходимо подставить реальные/фактические аргументы - с 116
//Также это мне дает гибкость - я могу вносить дополнительно с 119-120, и также дописать с 114
//sum3(1000, 2000);
// function sum3(a, b) {
//     console.log(a + b);
// }
// sum3(44, 11);
// sum3(100, 200);
// let z = 77;
// sum3(z, 10);
// sum3(z, z*2);
// sum3(6);               // будет NaN (потому что задали меньше аргументов чем положено. у нас их 2 a и b)

//Если выведем параменты по умолчанию на с 115 (a = 0, b = 0) то результат sum3(6);   будет 6 с123


//Rest параметры
//Получаем массив переданных данных
// function F1(x, y) {
//     console.log(x + y); 
// }
// f1(4, 5, 6);
// f1(4, 45, 67);


//============================   CALLBACK  =========================================================

//Можем передать функцию в качесте аргумента - функция как аргумент
// function showAll(res) {
//     document.querySelector('.out-1').innerHTML = `<br>${res}<br>`;
// }

// function showSumAll3(drawFunction, ...num) {
//     drawFunction(num);
// }
// showSumAll3(showAll, 88, 44, 100)





//============================== ОПЕРАТОР  RETURN   =========================================================

// function f1(x, y) {
//     return x + y;
// }
// f1(4, 5);
// f1(4, 45);


// function f2() {
//     console.log(2); 
//     return 5;
// }
// f2();
// console.log(5 + f2());
// console.log(f1(6, 7) + f1(4, 5));


// //Вывести случайное число
// function randInt(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// let r = randInt(222, 333);
// console.log(r);
// console.log(222, 333);

// //выводить куда угодно
// console.log(f1(100, 200));
// alert(f1(3,4))

// // использовать в выражениях
// console.log(100 * f1(3,4));

// // Прерывание функции
// function t4() {
//     console.log(1);
//     return;
//     console.log(2);
//     console.log(3);
// }
// t4();

// // Эмулируем работу метода indexOf
// // Как работает  indexOf -> проверяет массив на совпадения со значениями, если нашел совпадения 
// // то возвращает индекс элемента совпавшего, если нет выводит -1
// // запускаю цикл по массиву с 201
// // проверяю с 203 - если у меня текущий элемент массива arr[i] совпал === с числом которое я ввела num
// // то return i; остановит цикл и функцию на этом моменте [22, 33, 44 - он найдет соападения и остановит
// // мне не нужно до конца крутить массив
// // если же цикл if прокрутился до конца и ни разу не совпал то у меня выведется  с 208  return -1;
// function indexOfEmu(arr, num) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === num) return i;
//     }
//     return -1;
// }
// let result = indexOfEmu([22, 33, 44, 55], 44);
// console.log(result);


// // ex 5 Сумма
// // Вывести сумму массивов
// console.group('example 5');
// const arr5 = [ [3,4,5], [6,7,10]];
// function t5() {
//     let s = 0;
//     for (let i = 0; i < arr5.length; i++) {
//         s += sum += (arr5[i]);
//     }
//    return s;
// }

// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(t5());
// console.groupEnd();

// //Перенос осуществляется только с () для больших выражений c 240-242
// function t6() {
//     let a = 88;
//     return (
//         a
//     );
// }
// console.log(t6());


// //найти сумму элементов массива и : 2
// //=== 0    - это понимаем четное или нет
// console.group('example 7');
// const arr7 = [[3,4,5], [6,7,10], [7, 7, 1], [2, 2]];

// const evenArr7 = arr7.filter(function(item) {
//     return (sum(item) % 2 === 0);
// });

// console.log(evenArr7);

// console.group();



// //ex 8 return функции
// function t8() {
//     return sum; 
// }

// let s = t8();
// console.log(s ([10,20,30]));