// Node.js - это опенсорсная кроссплатформенная среда выполнения для JavaScript, которая работает на серверах.
// Одной из основных привлекательной особенностей Node.js является скоростью JavaScript-кодб выполняемый в среде Node.js,
// может быть в 2 раза быстрее, чем код, написанный на комплимируемых языках, вроде С или Java, и на порядок быстрее 
// интерпритируемых языков наподобие Phyton или Ruby.

// В среде Node.js выполняется код, написанный на JavaScript.
// npm (аббр. node package manager) - это стандартный менеджер пакетов, автоматически устанавливающийся вместе с Node.js.
// Он используется для скачивания пакетов из облачного сервера npm, либо для загрузки пакетов на эти сервера.
// https://habr.com/ru/company/ruvds/blog/422893/
// https://nodejs.org/en/about/
//========================================================================================
// loops ( for, while, do...while)
//========================================================================================
//most common
//=======================================================================================
//                                for ( ; ; ) { loop body }
//=======================================================================================

// for(start/initialization; condition; step (incremebt/decrement)) {
//     ... loop body
// }

//=======================================================================================

// ex. 1

// for (let i = 0; i < 6; i++) {
//     console.log(i);
// }

// start from 0      => Executes once upon entering the loop
// condition i = 6   => Checked false or true before every iteration
// step i = i + 1    => Executes after the body on each iteration

// if ( i <=5) { console.log(i); i++};    //i = 1;
// if ( i <=5) { console.log(i); i++};    //i = 2;
// if ( i <=5) { console.log(i); i++};    //i = 3;
// if ( i <=5) { console.log(i); i++};    //i = 4;
// if ( i <=5) { console.log(i); i++};    //i = 5;
// ... finish, when i = 6;

//===================== ++i vs i++ ==============================

//Prefix increment (++i) => increments, and returns the new,
//incremented value;

// for (let i = 0; i < 5;) {
//     console.log(++i);  //1 2 3 4 5
// }
// console.log('========== ========')
// //Postfix increment (i++) => increments,
// //but returns the old value (i.e/ the value before the increment).

// for (let i = 0; i < 5;) {
//     console.log(i++); //0 1 2 3 4
// }
// console.log (arr.at(-1));
//==============================================================
//                 for loop i==     => decrement
//==============================================================

// ex. 1.1
// for ( let i = 5; i >= -2; i --) {    // from 5 to -2
//     console.log(i);
// }

// //=========================== Inline variable declaration for loop

// ex. 1.2
// for (let i = 0; i < 3; i++) {
//     console.log(i);  // 0, 1, 2
// }
// console.log(i);  // error, no, such variable

// //=========================== Outline variable declaration for loop

// ex. 1.3
// let i =0;
// for (i = 0; i < 3; i++) {    // use an existing variable
//     console.log(i);          // 0, 1, 2
// }
// console.log(i);              // 3

// 3, visible, because declared outside of the loop
// i = 3 because it become 3 in the moment of checking in a loop

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
//                   0        1       2        3       4

//  el => beasts [index] => beast[1] => bison
//                                            arr.lenght -1
// console.log(beasts[2])    //название массива и внутри индекс
// console.log(beasts.lenght
// console.log(beasts [beasts.lenght -1])
// for (let i = 0; i < beasts.lenght; i++) {
//     if(beasts [i] == 'bison') {
//         console.log ( -1 )
//         break;
 // }
//     console.log (i);
//     console.log ( beasts [i]);
 //}
//console.log (beasts.indexOf('bison'));        // i
// console.log (beasts.indexOf ('bison', 2));    // 4
// console.log (beasts.indexOf ('giraffe'));     // -1


// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// let sum = 0;
// for (let i = 0; i <arr_3.length; i++) {
//     sum = arr_3[i] + arr_4[i]
//     console.log(sum)
// }


// for - loops through a block of code a number of times 
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true 
// do/while - also loops through a block of code while a specified condition is true

//===============================================
//===============================================
//===============================================
// ex 2. with Array
// const arr = [1, 4, 'h1', 8];
