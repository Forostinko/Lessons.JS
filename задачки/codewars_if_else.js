//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

//     let word = ""
//     for ( let i = 0; i < str.length; i++) {
//       word += str[i].repeat(2)
//     }
//   console.log(word)   -?


  //https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

//   function doubleChar(str) {
//     return str.split("").map(c => c + c).join("")
//    }

//    split("") - создает массив/ разделяет  ['q', 'a', 'c']
//    map()  - в данном случае удваивает  ['qq', 'aa', 'cc']
//    map(c => c + c) -  внутри прописываем то что хотим видеть 
//    с - это какой-то элемент, можно назвать как угодно
//    => c + c  - пишет то что хотим видеть (н-р: с - с или с * с)


//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

//палиндромом - это чтение слева направо, с права налево  - "Anna"
//проверяем
// x = x.toLowerCase()
// let newStr = ""
// for (let i = x.length - 1; i >= 0; i--) {   //идем с конца
//   newStr += x[i]
// }
// return newStr === x
