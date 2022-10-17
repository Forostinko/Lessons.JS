//                       LOOPS  -  ЦИКЛЫ
//===========================================================
//             (for, array, for..in, for..of, while)
//===========================================================
// для выведения информации. Т.е. сделать какую то цикличную операцию

// for (initilization; condition; step (increment/decrement)) {
//   ... loop body...
// }

// for (начало; условие; шаг) {
//   ... тело цикла ...
// }

//                       true
// i++ = 1
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }


//                       false
// for (let i = 0; i < 3; i++) {  //не работает - вопрос, почему? не находит значение i
//  console.log(i); 
// }

// for (let i = 0; i <= 3; i+=3) {  // если делаем = (i <= 3), то это значение тоже выводится
//  console.log(i); 
// }

// for (let i = 0; i < 9; i+=3) {  
//  console.log(i); 
// }


// * начало  let i = 0  выполняется один раз при входе в цикл
// * условие  i < 3 Проверяется перед каждой интерацией цикла.
// *                 Если оно вычислится в False, цикл                             остановится.  
// *Тело cjnsole.log(i) выполняется снова и снова, пока 
//*                  условие вычисляется в true.
//* Шаг i++          выполняется после тела цикла на каждой                        интерации перед проверкой условия.


//------------------repeat string-----------------------------

//console.log за пределами {} выводит конечный результат
// если внесем внутри, то будет выводиться ввиде пирамиды. Показывает весь цикл.


// let str = "Hello"; // repeat 7
// let newStr = "";
// for (let i = 1; i <= 7; i++) {
//   // 0 1 2 3 4 5 6 
//   newStr = newStr + str;
// }
// console.log(newStr);


//----------------------find sum-----------------------------

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
//  console.log(sum);
// прибавляем сумму к i увеличенную на 1
// 1 круг     0 + 1 = sum1
// 2 круг     sum 1 + i 2 = sum 3
// 3 круг     sum 3 + i 3 = sum 6 
// 4 круг     6 + 4 = 10



//----------------------exponenti--------------------------
//                возвести в степень

// let num = 5;  //  ^3
// let result = 1;
// for (let i = 1; i <= 3; i++) { // i = 1. result = 1 * 5 = 5
// result = result * num;        // i = 1. result = 5 * 5 = 25
// }                           // i = 1. result = 25 * 5 = 125
// console.log(result);


//---------------------change string--------------------------

// Tasks: 1. print to the console all letters of the word in               turn                                                       2. print the word with spases between letters  
 // let str = "JavaScript";     // letter of first index: str{0}
// letter of last index: str{str.lengh - 1}

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
//выводит текст в виде столбца


//for используем какую то переменную, пробегаемся по массиву с 0, меньше чем длина стринга и ++.
//newS И говорю: новый стринг добавляйся по одной букве из let str = "JavaScript"; в мой new. 
//Будет выводит текст в виде пирамиды, прибавляя по одной букве.
// let newS = "";
// for (let i = 0; i < str.length; i++) {
// newS = newS + str[i] + "";
// console.log(newS);
// }
//Если console.log(newS) перенести вниз, то выведет одну строчку JavaScript
// let newS = "";
// for (let i = 0; i < str.length; i++) {
// newS = newS + str[i];
// }
// console.log(newS);

//Если хотим, чтобы был прописано через пробел то делаем " " в 115
// let newS = "";
// for (let i = 0; i < str.length; i++) {
// newS = newS + str[i] + " ";
// }
// console.log(newS);


//Добавление с if: если элемент стринга будет равен "c", то сделай is in array
// let newS = "";
// for (let i = 0; i < str.length; i++) {
  
// newS = newS + str[i] + " ";
// if (str[i] == "c"){
//   console.log("c is in array")
//  }
// }
// console.log(newS);



// let newS = "";
// let a = 0
// for (let i = 0; i < str.length; i++) {
  
// newS = newS + str[i] + " ";
// if (str[i] == "a"){
//   a++                 //увеличит а на то кол-во сколько раз увидит
//   console.log(a);
//  }
// }
// console.log(newS);



 // if (i == str.length - 1) {
// }
//   else newS = newS + str[i] + "";


//                        Palindrome
//================================================================
//                      чтение с конца

// let x = "Palindrome";
// let str2 = '';
// for(let i = x.length - 1; i >= 0; i--){   //i = i - 1
//   str2 = str2 + x[i];                       //str += x[i];
// }
// console.log(str2);



// let x = [1, 2, 3, 4, 5];
// let str2 = '';
// for(let i = x.length - 1; i >= 0; i--){   //i = i - 1
//   str2 = str2 + x[i];                       //str += x[i];
// }
// console.log(str2);


//                      FOR IN
//================================================================
// The JavaScript for in statement loops through the properties of an Object
// The JavaScript for in statement can also loop over the properties of an Array
// Do not use for in over an Array in the index order is important.

// Syntax:

// for (variable in iterable){
//   code block to be executed
// }
// ==================================================================
//   for (variable in array){
//   code
//   }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + ", ";
//   console.log(txt)           //сам делает инкремент х
// }


//                       FOR OF
//================================================================
// The JavaScript for in statement loops through the values of an interable Object.
//   It lets you loop over iterable data structures such as Array, Strings, Maps, NodeLists, and more

// Synax:

// for (variable of iterable) {
//   code block to be executed
// }

//==================================================================
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
// text += x + " ";
//   console.log(text)
// }


  