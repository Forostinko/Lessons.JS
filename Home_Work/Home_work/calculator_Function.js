// Напишите функцию с калькулятором (используйте предыдущий код), в которую, 
// в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак 
// арифметической операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}


// function calc(a, b, sign) {
//     let result = 0
//     if (isNaN(a) || isNaN(b)) result = "Please, enter a number!"
//     else {
//         if (sign == "+") result = a + b
//         else if (sign == "-") result = a - b
//         else if (sign == "*") result = a * b
//         else if (sign == "/" && b == 0) {
//             result = "Division by 0 is not allowed! Enter another number"
//         }
//         else if (sign == "/" && b != 0) result = a / b
//         else (result = "Please, enter right input!")
//     }
//     return result
// }
// console.log(calc(2, 7, "*"))






// function calculator(a, b, operator) {
//     if(operator == "+") {
//         return a + b
//     } 
//     if(operator == "-") {
//         return a - b
//     }
//     if(operator == "/") {
//         if(b !== 0)
//         return a / b
//     }
//     if(operator == "*") {
//         return a * b
//     }  
// }
// console.log(calculator(5, -8, "/"))

  



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