// function sum(a,b) {
//     return a + b;
// }
// let a = sum(4,5);
// console.log(a);



// //function       =>

// //====================== метод callback  ==============================

// //обычный вариант фукции
// const ar1 = [4,5,6,7,8];

// function pow2(a) {
//     return a **2;                //возведение в степень
// }
// const res2 = ar1.map(pow2);      //map перебирает элементы массива
// console.log(res2);

// const res3 = ar1.map(function(a) {
//     return a**2;
// })
// console.log(res3);

// //стрелочная функция
// const res4 = ar1.map((a) => {    //просто заменили function  на =>
//     return a ** 2;
// });
// console.log(res4);

// //сокращенный синтаксис
// //одна строка- убрать {}  return
// const res5 = ar1.map((a) => a ** 2);
// console.log(res5);

// //один аргумент - то убрать()
// const res6 = ar1.map(a => a ** 2);
// console.log(res6);


// //======================  метод filter  ==============================

// //несколько аргументов
// //оставить те элементы индекс которых только четные значения с 14
// const res7 = ar1.filter(function (item, index) {
//     if(index % 2 === 0) {              //если индекс четый
//          return true; 
//     }        
// });
// console.log(res7);

// //пишем на стрелочной функции
// const res8 = ar1.filter((item, index) => (index % 2 === 0));
// console.log(res8);



// //======================  arrow аргуметы  ==============================

// const f1 = (...arg) => {
//     console.log(arg);
//     console.log('work');
// }
// f1(99,100);