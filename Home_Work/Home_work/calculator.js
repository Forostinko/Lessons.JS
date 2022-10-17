//                 Create calculator
//                    1 вариант:
// let num1 = 5;                             //можем менять
// let num2 = 0;                             //можем менять
// let result;
// let operator = "/";                       //можем менять

// if (operator == "+"){
//   result = num1 + num2;
//   document.write("Your sum:" + result);
// }else if  (operator == "-"){
//   result = num1 - num2;
//   document.write("Your difference:" + result);
// }else if  (operator == "/"){
//   if (num2 == 0){
//   document.write("Please enter another number, `Zero` is not allowed!");  
//   }
//   result = num1 / num2;
//   document.write("Your division:" + result);
// }else if  (operator == "*"){
//   result = num1 * num2;
//   document.write("Your multiplication:" + result);
// }else{
//   document.write("Please enter another operator!");
// }


//                    2 вариант:    
// let num1 = Number(prompt ("Number1:"));
// let num2 = Number(prompt ("Number2:"));
// let oper = prompt ("1. Sum\n2. Substract\n3. Multiply\n4. Divide\n");
// switch(oper){
//   case "1":
//     document.write(`${num1} + ${num2} =` + (num1 + num2));
//     break;
//   case "2":
//     document.write(`${num1} - ${num2} =` + (num1 - num2));
//     break;  
//     case "3":
//     document.write(`${num1} * ${num2} =` + (num1 * num2));
//     break;
//     case "4":
//     document.write(`${num1} / ${num2} =` + (num1 / num2));
//     break;
//   default:
//     document.write("Operation is not supported. Please try again");
// }


//===============================  Tatiana Volk 09/30  =================================================

// Напишите функцию с калькулятором (используйте предыдущий код), в которую, 
// в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак 
// арифметической операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}

// function calc(a, b, operator) {
//     if (operator == "+") {
//        return a + b
//     }
//     if (operator == "-"){
//        return a - b
//     } 
//     if (operator == "/") {
//         if (b !== 0)
//         return a / b   
//     }
//     if (operator == "*") {
//         return a * b   
//     }
// }
// console.log(calc(5, -8, "/")) 

  

//callback calculator

// function calculator(num1, num2, callback) {
//     return callback(num1, num2);
// }

// let sub = function(num1, num2) {
//     return num1 - num2
// }

// console.log(calculator(2, 6, function(num1, num2) {
//     return num1 + num2;
// }));


// Отладьте функцию с именем calculate, которая принимает 3 значения. 
// Первое и третье значения являются числами. Второе значение — символ. 
// Если это символ «+», «-», «*» или «/», функция вернет результат соответствующей 
// математической функции для двух чисел.
// Если строка не является одним из указанных символов, функция должна вернуть значение null.
// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null



// var calculate = function calculate(a, o, b) {
//     switch(o) {
//       case "+": return a + b;
//       case "-": return a - b;
//       case "*": return a * b;
//       case "/": return b == 0 ? null : a / b;
//       default: return null;
//     }
//   }