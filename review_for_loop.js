//                   Определение массива
//=================================================================
// Массив это набор данных
// длина массива это переменная lenght
// к переменной lenght можно назначит значение
// для обработки массивов нам нужно знать длину

// let arr = [1, 2, 3, 4, 5];
// arr.lenght = 0   
// console.log(arr);


//let arr = [1, "apple", null, 4, undefined];
//index      0     1       2    3     4
//arr.lenght = 0   
//console.log(arr[4]);

//       обьявляем переменные с помощью let и const

// const arr1 = [1, 2, null, "string"];
// arr1(0) = 10;
// console.log(arr1);
// console.log(typeof arr1);


//длина выдается 5
//  let arr = [1, "apple", null, 4, undefined];
// //index      0     1       2    3     4
//  console.log(arr.lenght);

// если мы хотим обратиться к последнему элементу массива undefined, нам нужно найти index, по которому этот элемент находится.
// Мы вычисляем длину массива и вычесть единицу

//let arr = [1, "apple", null, 4, undefined];
//index      0     1       2    3     4
//console.log(arr.lenght);   //-------1й вариант

//------2й вариант - используют на собеседованиях. (Решайте задачу не используя метод)
//console.log(arr[arr.length - 1]);   //это получается индекс последнего элемента

//console.log(arr.at[-1]);      //------3й вариант




//                          ЦИКЛ WHILE
//=================================================================
//Каждый элемент массива имеет свой индекс. Чтобы к нему обратиться нам нужно использовать индекс i
// let arr = [1, "apple", null, 4, undefined];
// //index     0     1       2    3     4
// let index = 0

// while(index <= arr.length) {
//   console.log(arr[index]);
//   index++;
// } 
// console.log('End')



//                       ЦИКЛ DO WHILE
//=================================================================
// let arr = [1, "apple", null, 4, undefined];
// index     0     1       2    3     4

// do {
 
// } while (statement);

//Пример 1:
// let arr = [1, "apple", null, 4, undefined];
// //index     0     1       2    3     4

// let i = 0;

// do {
//   console.log(i)
//   i++
//  } while (i < 5);


// //Пример 2:
// do {
//   запрос пароля
//  } while (пароль == 1234);


//другой вариант:
//let arr = [1, "apple", null, 4, undefined];
//index     0     1       2    3     4
// let newNum = 2

// while(newNum <= arr.length) {
//   console.log(newNum, ' ', arr[newNum]);
//   newNum++;
// } 
// console.log(newNum);
// console.log('End');



//                       ЦИКЛ FOR
//================================================================
// let arr = [1, "apple", null, 4, undefined];
// index     0     1       2    3     4

// for(блок1; блок2; блок3) {
  
// }

// блок1 - предназначен для инициализации цикла. Он выполняется всего 1 раз, когда мы входим в цикл for
// блок2 - то, что отвечает за условие цикла. Если результат true, то мы входим в код цикла {   }. Если условие false, мы все пропускаем и выходим из цикла
// блок3 - он выполняется в конце блока кода и чаще всего его используют для иитерационной переменной


// 1)
//let arr = [1, "apple", null, 4, undefined];
// //index     0     1       2    3     4
// let index = 0;

// // while (index < arr.length) {
// //   console.log(arr[index]);
// //   index++;
// // }

// console.log("*************")

// index = 0;

// for(let i = 0; i < arr.length; i ++) {
//   console.log(arr[i]); 
// }


//2)
// let arr = [1, 30, 5, 4, 3];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum)

//3)//Посчитать сумму четных чисел массива  (% 2 = 0  значит четное)

// let arr = [1, 30, 5, 4, 3];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 = 0) //проверяет на четность
//   sum += arr[i];
// }
// console.log(sum)

// шаги..
// i = 0, 0 < 5, arr[0] = 1, 1 % 2 != 0 
// i = 1, 1 < 5, arr[0] = 30, 30 % 2 != 0, sum == 30


// let arr = [1, -30, 5, -4, 6, 3];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//   console.log("Это отрицательное число:", arr[i]);
// } else {
//     console.log("Это положительное число:", arr[i]);
//    }
  
// }


//                   Для интервью

//4)           Найти max значение массива
//================================================================
// присваиваем первое число массива 179 строчка

// let arr = [1, -30, 0, -4, 6, 28, 35, 0, -7];
// let max = arr[0];

// for (let i = 1; i < arr.lenght; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log ("Максимальное число:", max);

//5)           Найти min значение массива
//===============================================================


// let min = arr[0];

// for (let i = 1; i < arr.lenght; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log ("Минимальное число:", min);


//                        СТРОКИ
//================================================================
//Используем этот вариант, когда на интервью говорят - не используйте методы


//let str = "Hello";
//         01234
//console.log(str.lenght);
//console.log(str [4])

//Нати букву l и сколько их

// let sum = 0;

// for(let i = 0; i < str.length; i++){
//   if(str[i] =='l') {
//    sum++;
//   }
// }
// console.log(sum);



 //                  ЦИКЛ FOR OF
//================================================================
//let str = "Hello World";
//         01234
// let sum = 0;

// for(let i = 0; i < str.length; i++){
//   if(str[i] =='L') {
//    sum++;
//   }
// }
// console.log(sum);

// let summ = 0;

// for (let letter of str) {
//   if (letter == 'l') {
//    summ ++ 
//   }
// }
// console.log(sum);
// console.log(summ)


// const fruits = ["apple", "plum", "orange"];

// for (let fruit of fruits) {
//   if (fruit == "plim") {
//     console.log("exist")
//   }
// }