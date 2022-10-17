// Например мы хотим чтобы нам пришла 3

// let num = 3
// if (num == 3) {
//     console.log ('Yes');
// } else {
//     console.log ('No');
// }

// //другой вариант
// console.log (num == 3 ? 'Yes' : 'No')      //тернальный оператор ( истина или ложь)  ? 'Yes' : 'No'  - это удобно применять при сравнении 2х, если больше это не удобно


// Создание массива. Получить сумму 2х массивов при одинаковой длине массива

// let arr = [1, 2, 10, -5, 7, 25, 100, 90];
// let arr2 = [25, 56, 1, 25, 7, 78, 98, 33];
// let sum = 0;
// for ( let i = 0; i < arr.length; i++) {
// sum += arr[i] + arr2[i];
// }
// console.log (sum);


// Получить сумму 2х массивов при НЕ одинаковой длине массива. И дан один цикл

// let arr = [1, 2, 10, -5, 7, 25, 100, 90];
// let arr2 = [25, 56, 1, 25, 7, 78, 98];
// let sum = 0;
// for ( let i = 0; i < arr.length + arr2.length; i++) {
//     if (i < arr.length ) {
//         sum += arr [i];
        
//     } else {
//     sum += arr2 [i - arr.length];
//   }
// }

// console.log( sum);

// let sum1 = 0; 
// for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//     sum1 += arr2[i];
// }

// console.log (sum1);
