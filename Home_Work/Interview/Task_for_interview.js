//                   Для интервью



//           Найти max значение массива
//================================================================
// присваиваем первое число массива 178 строчка

// let arr = [1, -30, 0, -4, 6, 28, 35, 0, -7];
// let max = arr[0];

// for (let i = 1; i < arr.lenght; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log ("Максимальное число:", max);



//           Найти min значение массива
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

// Задача на уроке от 09/29 Svenlana G (в начале)
// Существует какой то комплекс зданий разной высоты. 4,2,3,1 - это здания 4х этажное и т.д. 
// Справа от комплекса есть океан. И вам необходимо вернуть в виде массивов индексы тех зданий с окон 
// которых виден океан. 
// С окон зданий виден океан в том случае, если все впереди стоящие здания ниже по высоте.
// Внутри нашего массива должен быть индекс. Мы должны вернуть индекс этого здания.

// Input: heigths = [4, 2, 3, 1] Ocean
// Output: [0, 2, 3]                      //индекс 4 эт здания 0






// Нужно пройтись по массиву и найти элемент который будет равен 7
// =====================================================================================================

// Задача на уроке от 09/29 Svenlana G (с 24 мин)
// Вложенный цикл по массиву

// let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
//   for (let i = 0; i < arr.length; i++) {       //mama                                        a          b
//     for(let j = 0; j < arr[i].length; j++) {   //m          a          m          a          
//         if (arr[i][j] == 'c') {                //arr[0][0]  arr[0][1]  arr[0][2]  arr[0][3]  arr[4][0]  arr[4][1]
//             console.log(arr[i]);
//         }
//     }
//   }
 
  //1й цикл идет по буквам
  //[ 1, 2, 'abcc',5, -20, 5,'b', 'c'] это он возвращает, потому что он увидел 'c'
  //чтобы вернуть 'c' в 'abcc' нужно сделать еще один вложенный цикл - 3й цикл
  //если мы из [1,2,'abcc', 5, -20,5, 'b', 'c'] уберем 'c' - он не найдет
  //2й цикл идет по эементам

  //Мы это решение можем обернуть в функцию
  //для этого мы должны поменять название  let arr1
  //и в вызове тоже меняем (search(arr1))
  //function search(arr) этот аргумент ни с чем не связанный,
  //поэтому когда мы вызывали просто arr он работал потому что мы вызывали конкретно let arr массив
  //наша функция стала универсальная - мы можем вызвать эту же функцию но с другим аргументом (search(words))
//   let arr1 = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
//   function search(arr) {
//   for (let i = 0; i < arr.length; i++) {       
//     for(let j = 0; j < arr[i].length; j++) {   
//         if (arr[i][j] == 'c') {                
//             console.log(arr[i]);
//         }
//     }
//   }
// }
// (search(arr1))


 //наша функция стала универсальная - мы можем вызвать эту же функцию но с другим аргументом (search(words))
//функция дает нам универсальное решение для различных аргументов, которые сюда будут входить.
//мы можем переиспользовать её в нашем коде
//в нашем случае мы поменяли только название массива const words = [.....]
//он пошел по всей длине массива, зашел в каждое слово и нашел 'c' только в одном слове destraction
//выводит слово destraction целиком, потому что мы попросили в 113 -  console.log(arr[i]);
//arr[i] - это всегда текущий элемент массива
//какой массив мы передали? - words и с индексом 4 - поэтому слово будет 'destraction'
//  let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
//  const words = ['spray', 'limit', 'exebutant', 'destraction', 'present'];
//  function search(arr) {
//  for (let i = 0; i < arr.length; i++) {       
//    for(let j = 0; j < arr[i].length; j++) {   
//        if (arr[i][j] == 'c') {                
//            console.log(arr[i]);
//        }
//    }
//  }
// }
// (search(words))

//можем дальше дописывать и искать  const pets = ['cat', 'dog', 'bat'];
// let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
// const pets = ['cat', 'dog', 'bat'];
// const words = ['spray', 'limit', 'exebutant', 'destraction', 'present'];
// function search(arr) {
// for (let i = 0; i < arr.length; i++) {       
//   for(let j = 0; j < arr[i].length; j++) {   
//       if (arr[i][j] == 'c') {                
//           console.log(arr[i]);
//       }
//   }
// }
// }
// (search(words))
// (search(pets))


// ИТОГ: наша функция универсальная 
//мы просто обернули в функцию наше решение, которое работала с этим массивом и это моментально 
//сделало наш код универсальным. Мы можем его переиспользовать
//function search(arr)  - аргумент который внутри - arr - это просто какой то независимый, универсальный,
// и мы можем назвать как угодно этот аргумент, работать с ним и иметь какое то решение.
//Главное при вызове функции указать именно тот массив или строку с которой мы будем работать, 
//с которым мы хотим чтобы наша функция поработала и выдала какой то результат 
//н-р // (search(words))
//    // (search(pets))




//------------------------------------------------------------------------------------------------------

// let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
// //var vegetables = ['Капуста', 'Pena', 'Редиска', 'Морковка'];
// const pets = ['cat', 'dog', 'bat'];
// const words = ['spray', 'limit', 'exebutant', 'destraction', 'present'];
// //console.log(arr)
// function search(arr) {
// for (let i = 0; i < arr.length; i++) {       
//   for(let j = 0; j < arr[i].length; j++) {   
//       if (arr[i][j] == 'c') {                
//           console.log(arr[i]);
//       }
//   }
// }
// }
// (search(arr))
// (search(words))
// (search(pets))



// Найти самую длинную часть массива
// ========================================================================== 

// let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc'];
// const pets = ['cat', 'dog', 'bat'];
// const words = ['spray', 'limit', 'exebutant', 'destraction', 'present'];
// function arrLongest(arr) {
//     let longest = arr[0].length;  // у нас длина значит 0
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (longest < arr[i].length) {
//             longest = arr[i].length
//     }
//  }
//  return longest;
// }
// console.log(arrLongest(words));



// Вернуть тот элемент который является числом
// =========================================================================

//Длина нашего массива и мах индекс отличаются (индекс начинаем считать с 0, а длина как положено с 1) -
//Н-р с 201 длина массива 6 а индекс от 0 до 5
//поэтому мы используем метод length и мы точно знаем что последний аргумент будет меньше на 1 единицу
//чем длина   i < arg.length; (мак индекс 5 а длина = 6)
// с 209 : если  f (typeof  -  текущего элемента (arg[i]  -  число 'number', то выводим его на печать
//если мы пишем <= то в этои случае нужно отнять 1     i <= arg.length - 1; 
//c 212 это для [1,2,'abcc', 5, -20,5, 'b', 'c'] мы заходим в элемент и идем по элементу. Т.е. мы хотим
//пройти по длине каждого элемента
// let arr = [1, 'mamamama', 'my', [1,2,'abcc', 5, -20,5, 'b', 'c'], 'papac', 'abc', 10];
// const pets = ['cat', 'dog', 'bat'];
// const words = ['spray', 'limit', 'exebutant', 'destraction', 'present'];

// function findNumbers (arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (typeof(arg[i]) == 'number')
//         console.log(arg[i]);
//         for (let j = 0; j < arg[i].length; j++) {
//             if (typeof(arg[i][j]) == 'number')  
//             console.log(arg[i][j]);
//         }
//     }
// }
// findNumbers (arr) 






// Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, 
// которое вы передаете в функцию.
// =====================================================================================================


// function greet(name) {
//     return "Hello, " + name + " Have a nice day!"
// }
// console.log(greet("Anna"))                               // меняем имена   




// 40 sec
// Which of the following expressions will evaluate to true?

// 2 === '2'                   //строгое сравнение. Разный тип string и number
// 4.0 === 4                   //десятичное значение и значение вернет true
// '1' + 2 == 3                //Разный тип string и number
// "a" === 'a'                 //вернет true 
// 3 = 3
// "1" == 1                    //не строгоe равно - вернет true


//Object
//Посчитать кол-во символов
// метод for of - используется для обработки массивов
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




// Вернуть перевернутое число
// =================================================================================================
// Если задача перевернуть - то это однозначно массив ( переводим все в массив)
// или идти for от начала до конца

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 64-but integer range [-231, 231, -1],
// then return 0.
// Assume the enviroment does not allow you to store 64-bit integest (signed or unsigned).

// Exemple 1:
// Input: x = 123
// Output: 321

// Exemple 2:
// Input: x = -123
// Output: -321

// Exemple 1:
// Input: x = 120
// Output: 21

// Число переворачиваем в строку, потом строку в массив
// Массивом сделать revers
// Определить это число отриц. или положит.
// Если отриц. тогда в конце * на -1
// Перевернуть и если оно было отрицательное до этого тогда * на -1

// Variant 1
//1).
// function reverseNumber(x) {
//   return String(x)
// }
// console.log(reverseNumber(256))

//2). применяем метод split - который переводит строку в массив
// ("") - указываю параметры как буду делить ( по пустой строке)
// function reverseNumber(x) {
//   return String(x).split("")
// }
// console.log(reverseNumber(256))

//3). применяем метод reverse - чтобы перевернуть это массив
// function reverseNumber(x) {
//   return String(x).split("").reverse()
// }
// console.log(reverseNumber(256))

//4). после этого метод parseInt - чтобы вернуть число (этот метод также убирает 0)
// function reverseNumber(x) {
//   return parseInt(String(x).split("").reverse().join(""))
// }
// console.log(reverseNumber(256))

//4). метод Math.sign - проверяем что входящая строка имеет какой-то знак
// возвращает -1 если число отриц. и 1 - если число положит.
// function reverseNumber(x) {
//   return Math.sign(x) * parseInt(String(x).split("").reverse().join(""))
// }
// console.log(reverseNumber(256))


// Variant 2
// let a = -123  // -321
// let n = 120   // 21

// var reverse = function(x) {
//   let result = 0

//   let str = String(x).split("")
//   str = str.reverse()

//   result = parseInt(str.join("").toString())
//   if (x < 0) {
//     result *= -1
//   }
//   if (result < (Math.pow(2, 31) * -1) || result > Math.pow(2, 31) -1) {
//     return  0
//   }
//   return result
// }

// Variant 3
// var reverse = function(x) {
//   let result = parseInt(x.toString().split('').reverse().join('').toString())

//   if (x < 0) {
//     result *= -1
//   }
//   if (result < (Math.pow(2, 31) * -1) || result > Math.pow(2, 31) -1) {
//     return 0
//   }
//   return result
// }




