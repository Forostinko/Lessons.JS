//  ======================    4 способа создания функции    =====================================

// //* A function as a statement */
// fuction Add(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let res = Add(7, 8);
// console.log(Add(7, 8))
// console.log(res); //15


// //* A function as a espression */
// let add = fuction a (num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let res = add(8, 7);
// console.log(add(8, 7))
// console.log(res); //15


// //* A function as an arrow fuctuion */
// var add = (num1, num2) => num1 + num2;
// let res = add(7, 8);
// console.log(add(8, 7))
// console.log(res); //15


// //* A function created using the Functio construction */
// var add = Fuction('num1', 'num2', 'return num1 + num2');
// let res = add(7, 8);
// console.log(add(8, 7))
// console.log(res); //15


// 1. Слово функция
// 2. Имя функции
// 3. Список аргументов в круглых скобках через запятую
// 4. Код функции также называемый "телом функции" ,внутри фигурных скобок.

//---------------------------------------------------------------------------------------------

//помещение обьявленной фунции в функцию

// function showMessage() {
//   console.log('Hello')
// }
// function sum() {
//  const a = 2;
//  const b = 4;
//  console.log(a + b)
//  showMessage()
// }
// sum();

//------------------------------------------------------------------------------------------------
//Обьявление функции в функции

// function sum() {
//   const a = 2;
//   const b = 4;
//   console.log(a + b);

//   function showMessage() {
//     console.log('Hello');
//   }
//   showMessage();
// }
// sum();

//-----------------------------------------------------------------------------------------------------
//  ===============  ПЕРЕМЕННЫЕ В ФУНКЦИЯХ   ================================================
//-----------------------------------------------------------------------------------------------------

//======================================================================
//Переменные, обьявленны внутри функции, видны только внутри этой функции

// function showMessage() {
//   let name = ' Sergio';
//   return 'Hi' + name;
// }
// console.log(showMessage());
// console.log(name);

//=======================================================================
//У функции есть доступ к внешним переменным и может изменять их значения

// let name = ' Sergio';

// function showMessage() {
//   return name += ' Hi';
// }
// console.log(showMessage());
// console.log(name);

//============================================================
//Если переменны вызвана до вызова функции, то она не меняется

// let name1 = 'Sergio';
// function showMessage() {
//   name1 = 'Anna';
//   return name1
// }
// console.log(name1);
// console.log(showMessage());

// console.log(showMessage());
// console.log(name1);

//============================================================
//Одноименная переменная будет выполняться внутрии функции,
//Внешняя будет проигнорирована

// let name = ' Sergio';

//   function showMessage() {
//     let name = 'Anna';
//     return name;
//   }
//   console.log(showMessage());
//   console.log(name);


  //======================  ARGUMENTS (, , , ...) ========================================

  //============================
  //1. Without args inside()
  //============================

  // function sum() {
  //   const a = 2;
  //   const b = 4;
  //   console.log(a + b)
  // }
  // sum();

  //===========================
  //2. args inside()
  //===========================
  
  // sum1(2, 4);

  // fuction aum1(x, y) {
  //   console.log(x + y)
  // }

  //=============================
  //3. more/less args inside()
  //=============================

  // function sum2(x, y) {
  //   console.log(x + y)
  // }
  // sum2(2,4, 5,6);
  // sum2(2);

  //==============================
  //4. assign args inside()
  //==============================

  // function sum2(x = 0, y = 3) {
  //   console.log(x + y)
  //   //console.log(y)
  // }
  // sum2(2);


//==============================  RETURN   ==========================================================

//По умолчанию функции возвращают undefined.
//Чтобы вернуть другое значение, функция должна содержать return,
//которая указывает, какое значение возвращать

//ex. undefined
// function sum(a, b) {
//   a + b;
// }
// sum(4, 5);
// console.log(sum(4, 5));

//ex. прерывание функций через return



//========================  ARROW FUNCTION  ==========================================================

// function arrowSum(a, b) {
//   return a +b;
// }
// console.log(arrowSum(2, 2));

//show Arrow func rules

//1. ==============  with return and {}

// const arrowSum = (a, b) => {
//   return a + b;
// }
// console.log(arrowSum(2,2));


//2. ===============  no need return and {}

// const arrowSum = (a, b) => a + b;
// console.log(arrowSum(2, 2.33));

//3  =============== if only i arg no need ()

// const arrowSum = a => Math.pow(a, 2);
// console.log(arrowSum(2));

//=============================================================
//Вы МОЖЕТЕ использовать функцию до того, как вы ее обьявили

// sum (4, 5);

// function sum(a, b) {
//   return console.log(a + b);
// }
//=============================================================

//4. Вы НЕ МОЖЕТЕ использовать стрелочную функцию до того, как вы её обьявили

// sum (4, 5);
// const sum = (a, b) => console.log(a + b);  //будет ошибка

//5. {} нужны если больше одного действия внутри

// const arr = [1, 2, 3, 4, 5];

// //filter

// const filterArr = arr.map(function(item) {
//   if(item % 2 === 0)
//   return item + 1;
//   else return item * 2;
// })
// console.log(filterArr);