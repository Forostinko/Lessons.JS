//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/solutions/javascript

// function solve(eq){
//   return eq.split('/').join(' / ').split('*').join(' * ')
//     .split('+').join(' + ').split('-').join(' - ').split(' ').reverse().join('');



//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

// 389 - разбила строку по пробелам
// 399 - также создаю новый массив - теперь это не строка через пробел, а теперь массив слов
// 390 - создаю новый массив в который буду пушать теперь чтобы вместе со строкой
// 391 - иду по масиву который разделила по словам - обычным циклом
// 392 - и пушаю в новый массив новый элемент через пробел длину этого элемента
// 394 - возвращаю новый массив

// let strArr = str.split(" ")
// let newArr = []
// for (let i = 0, i < strArr.length; i++) {
//   newArr.push(`${atrArr[i]} ${strArr[i].length}`)
// }
// return newArr

// Variant 2
// function addLength(str) {
//   return str.split(" ").map(x => x + " " + x.length)
//   }



//https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript

// function makeString(s){
//     return s.split(" ").map(word => word[0]).join("")
//   }



// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/solutions/javascript

// function spEng(sentence){
//     return sentence.toLowerCase().includes("english");
//   }

// .toLowerCase() - проверяем на upper case
// .includes("english") - проверяем есть ли строка/символ




// https://www.codewars.com/kata/57a55c8b72292d057b000594/solutions/javascript

// function reverse(string){
//     return string.split(' ').reverse().join(' ');
//   }

//   .split(' ')  - разбиваем по словам (по пробелу)
//   .reverse() - переворачиваем
//   .join(' ') - обратно собираем



// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// // 1й вариант через методы
// function isPalindrome(x) {
//     let y = x.split("").reverse().join("")
//     return x.toLowerCase() === y.toLowerCase()
//   }

//   // x приравниваем к y - чтобы сравнить как приходит слово, чтобы читалось в обратном порядке 
//   // === 3е равно сравнивает и по типу данных
//   // == можно и так

//   // 2й вариант через for
// function isPalindrome(x) {
//     x = x.toLowerCase();
//     let newStr = "";
//     for(let i=x.length-1; i >= 0; i--){
//       newStr += x[i]
//     }
//     return newStr === x;
//   }
