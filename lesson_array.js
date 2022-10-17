//                   ARRAYS - МАССИВ
//============================================================
// htpp://learn.javascript.ru//array

// массив - упорядоченная коллекция данных
// JavaScriot arrays are resizable and can cotain a mix
// of different data types.

// ---------обьявление массива
 // const arr = [];            // пустой массив
// const arr = new Array();
// let array = [];

// const arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr1);

// const arr2 = new Array("maple", "pine", "oak", "aspen");
// console.log(arr2);

// const arr1 = [];
// console.log(arr);

 //let five = 5;  //variables
// let six = 6;
// let seven = "seven"

 // const diffTypes = [null, "One", 2, true, undefined, five];
 // console.log(diffTypes);

//                ОБРАЩЕНИЕ К МАССИВАМ
//=================================================================
// arr[index];             //интексы начинаются с 0
// arr.length;             //длина массива (это колличество символа)
// arr.[arr.length - 1];   //принимает ноль и положительные индексы 
// arr.at(index)           //принимает отрицательные индексы!


//const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// index:            0    1    2    3    4    5    6   // с начала
// or:                     . . .        -3   -2   -1  //с конца

//console.log(letters.length);    //колличество элементов
// возьми мой массив и посчитай колличество элементов
// console.log(letters[5]); 
// console.log(letters[letters.length - 1]);
// console.log(letters.at(-2));

//       ОБРАЩЕНИЕ К НЕ СУЩЕСТВУЮЩЕМУ ЭЛЕМЕНТУ В МАССИВЕ
//================================================================
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(letters[10]);
// console.log(letters.at(-10));
//будет undefind