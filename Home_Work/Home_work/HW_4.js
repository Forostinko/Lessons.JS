//                         Home Work _4
//=======================================================================
// 1. Выведете с помощью for цикла рецепт всех видов кофе или цену на все размеры стаканчиков,
// идеально и то, и другое.

// let size = ["small", "medium", "large"]
// let coffee = ["black", "latte", "irish"]
//  for (let i = 0; i < coffee.length; i++) {
    
//     for(let j = 0; j < size.length; j++) {  //выполняется каждый раз заново когда выполняется внешний цикл

// console.log (size[j],coffee[i])
//     }
//  }





// 2. При помощи цикла for выведите чётные числа от 2 до 10
//i = i + 2
// выводим все цифры если внутри 

//1й вариант:
// for ( let i = 2; i <= 10; i+=2) {
//     console.log (i)
// }

//2й вариант:
// console.log ('----------------------')
// for (let i = 2; i <=10; i++){
//     if (i % 2 == 0) {
//         console.log (i)
//     }
// }

//Выведите в консоль с помощью цикла for числа от 1 до 10 с шагом 1

// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }



// 3.Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его 
// делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.




// let n = 17;
// for (let i = 2; i <= n; i++) {
//     let num = true;
//     for (let k = 2; k < i; k++) {
//         if (i % k == 0) {
//             num = false;
//         }
//     }
//     if (num == true) {
//         console.log(i);
//     }
// }





// let n = 17;
// const arr = [];
// for (let i = 2; i <= n: i++) {
//     let f = true;
//     for ( let j = 2; j < i; j++) {
//         if ( i % j ++ 0) {
//             f = false;
//             break;
//         }
//     }
//     if (f) {
//         arr.push (i)
//     }
// }
// console.log (arr);


//===решение учителя для наглядности====видео в слаке
//1)
// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let isPrime = ''
// let primeNumbers = []
// let primeNumbers = ''
// for (let i = 1; i < num.length; i ++) {
//     if ( num[i] == 1) {
//         isPrime = num[i] + " is not prime"
//     }
//     else if (num[i] % 2 === 0 && num[i] != 2) {
//         isPrime = num[i] + " is not prime"
//     }
//     else if (num[i] != 3 && num[i] % 3 === 0) {
//         isPrime = num[i] + " is not prime"
// }
// else if (num[i] ! 5  && num[i] % 5 === 0) {
//     isPrime = num[i] + " is not prime"
// }
// else if (num[i] ! 7 && num[i] % 7 === 0) {
//     isPrime = num[i] + " is not prime"
// }
// else {
//     isPrime = '              ' + "Is prime"
//     primeNumbers = primeNumbers + num[i] + ''

// }
// console.log (isPrime)
// }


//2) inner loop example for this problen   -  с вложенным циклом 

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {                  //go throuth all numbers
//     for (let j = 2; j < i; j++) {               //check
//         if (i % j == 0) continue nextPrime;     // if no, go to next
//     }
//     console.log(i);
// }






// 4. Задача на смекалку
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr” 
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор

// let p = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr" 
// console.log(p.replaceAll("br", ""));



// ====== 1й вариант:

// let encryption = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
// let cypher = "br";
// let transcript = "";

// for (let i = 0; i < encryption.length; i+=3) {

//     console.log(encryption[i]);
     

//     transcript += encryption[i]

// }
// console.log(transcript);


//======= 2й вариант:

// let str = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
// let newStr = '';

// for (let i = 0; i < str.length; i++) {
//     if (str[i] != "b" || str [i + 1] != "r") {
//         newStr += str[i];
//     }else {
//         i++;
//     }
// }
// console.log(newStr);

//======== 3й вариант:
//console.log (str.replace (/br/g, ""));

//4й вариант:
//console.log (str.split ("br").join(""));

 



//5.Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

// let str = "Hello world, my name is Olga";
// let result = [];
// let result2 = "";
// for (let i = 0; i < str.length; i++) {
//     result[i] = str [i].charCodeAt();
// }
// console.log (result);
// for (let i = 0; i < result.length; i++) {
//     result2 += String.fromCharCode (result[i]);
// }

//  console.log (result);
// console.log (result2);



// let str = "Hello world, my name is Olga";
// let result = [];
// let result2 = "";
// for (let i = 0; i < str.length; i++) {
//     result[i] = str [i].charCodeAt();
// }
// console.log (result);
// for (let i = 0; i < result.length; i++) {
//     result2 += String.fromCharCode (result[i]);
// }

//  console.log (result2);



// 6. Задача с интервью*
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

// console.log ("________________")
// console.log ("Task 5")
// let str = [ '(', ')', '(', ')', ')'];
// let sum1 = 0;

// for ( i = 0; i < str.length; i++) {
//     if ( str[i] == '(' && str[++i] == ')') {
//         sum1 = sum1 + 1;
//         console.log ( sum1 + "скобки закрыты")}
//         else {console.log ( (sum1 + 1) + "скобки закрыты")}
//     }

 //Выведите в консоль обратный "таймер", который выводит в столбец
 //время до старта: 10, 9, 8,.., 1, 'start!'

//   let j = ""
//    for (let i = 10; i >= 1; i--) {
    
//     j += i + " "
//   }
//   console.log(j)
//   console.log("Start!")