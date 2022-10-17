// 1.Нарисуйте ромб

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1

//Чтобы отобразить нижнюю часть нум нужно весь цикл записать видоизмененный в нижнюю часть, до консоля
// но чтобы сработал в обратную сторону
// for (let i = 1; i <= n; i++){
//     str += " ".repeat(n - i);
//    for (let j = 1; j <= i; j++){
//      str += j % 10;
//    }
//    for (let k = i - 1; k >= 1; k--){
//      str += k % 10
//    }
//    str += "\n";
// мы его копируем и вставляем в наш код до console.log(str)
// мы сделали еще один цикл и поменяем только внешний цикл (let i = n; i >= 1; i--)
// у нас продублируются 2 строки  1234567890987654321 от двух циклов
1234567890987654321
// чтобы это убрать, нужно во втором цикле сделать n - 1 (let i = n - 1; i >= 1; i--)                               

// let n = 10;                                        //можем менять цифры и дает кол-во строк
// let str = "";                                      //начальная строка которая потом выводится

// //top
// for (let i = 1; i <= n; i++){                      //здесь мы начинаем от 1 вверх
//     str += " ".repeat(n - i);                      //пробелы перед циклом, метод repeat
//     for (let j = 1; j <= i; j++){                  //наполнение строк
//     str += j % 10;                                 //делим на 10, чтобы после 9 не добавлялось по 2 знака
//   }
//   for (let k = i - 1; k >= 1; k--){
//     str += k % 10
//   }
//   str += "\n";                                     //перенос строки, после 2го цикла(который наполнение строк)
// }  
// //bottom
// for (let i = n - 1; i >= 1; i--){                  //от кол-ва рядов -1(чтобы не дублировали) к 1
//      str += " ".repeat(n - i);
//      for (let j = 1; j <= i; j++){
//      str += j % 10;                                //%10 работает если больше 9, если меньше убрать %10 везде
//    }
//    for (let k = i - 1; k >= 1; k--){
//      str += k % 10
//    }
//    str += "\n";
//  }  

// console.log(str);



//          Нарисуйте елочку
//     *
//    ***
//   *****
//  *******
// *********
//????????????????

// let n = 5;
// let str = " ";

// for (let i = 0; i < n; i++) {
//         for (let j = i; j < n - 1; j++) {         //4 раза прогонит цикл это 4 пробела слева
//             str += " "
//         }
//         for (let k = 0; k < 2 * i + 1; k++) {       //цикл который отвечает за *
//             str += "*"
//         }
//         console.log(str)



// 3. Нарисуйте пирамидку

// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15

// let row = 5
// let str = ""

// for (let i = 1; i <= row; i++) {
//     let num = i
//     for (let j = 1; j <= i; j++) {
//     str += num + " " 
//     num = num + (row - j)
//     }
//     str += "\n"
// }
// console.log (str)






// 4. Закрепление- Продумайте код для создания сэндвичей с 3-мя начинками и выставите цену 
//в зависимости от вида начинки. Используйте while and do.. while loops

//5. Пирамида

//54321
//4321
//321
//21
//1

// for (let i = 5; i > 0; i--) {
//     let x = ""
//     for (let j = i; j > 0; j--) {
//       x += j
//     }
//     console.log(x)
// }





// 1
// 12
// 123
// 1234
// 12345


// console.log("1)===================")
// let newStar = ''
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j ++) {          // show if j = 5
//         newStar +=j
//     }
//     newStar += '\n'
// }
// console.log(newStar)





//     1
//    12
//   123
//  1234
// 12345

// console.log("2)===================")
// let newStr2 = ''
// let x = 5
// let space = ' '
// for (let i = 1; i <= x; i++) {
//     newStr2 += space.repeat(x - i)
//     for (let j = 1; j <= i; j++) {             //show if j = 5
//         newStr2 += j
//     }
//     newStr2 += '\n'
// }
// console.log(newStr2)




// 12345

// console.log("3)===================")
// let row = ""
// for (let i = 1; i <= 5; i++) {
//     row += i                        // по горизонтале
//     row += "\n"                     // по вертикале
// }
// console.log(row)




// 12345
// 1234
// 123
// 12
// 1

// console.log("4)===================")
// let newStr4 = ""
// let space = ''
// let x = 5
// for (let i = 1; i <= x; i++) {
//     newStr4 += space.repeat(i - 1)
//     for(let j = 1; j <= x + 1 - i ; j++) {
//         newStr4 += j
//     }
//     newStr4 += '\n'
// }
// console.log(newStr4)




// 54321
// 4321
// 321
// 21
// 1

// console.log("5)===================")
// let newStr5 = ''
// let x = 5
// let space = ''
// for (let i =1; i <= x; i++) {
//     for (let j = x + 1 - i; j >= 1; j-- ) {
//         newStr5 += j
//     }
//     newStr5 += '\n'
// }
// console.log(newStr5)


//другой вариант без for
// console.log("5-2)===================")
// console.log('54321' + '\n')
//           + '4321' + '\n'
//           + '321' + '\n'
//           + '21' + '\n'
//           + '1' + '\n'

 



//     1
//    121
//   12321
//  1234321
// 123454321

// console.log("7)===================")
// let pyramide = ''
// x = 5
// let space = ' '
// for (let i = 1; i <= x; i++) {
//     pyramide += space.repeat(x - i)
//     for (let j = 1; j <= i; j++) {
//         pyramide += j
//     }
//     for (let j = i - 1; j >= 1; j--) {
//         pyramide += j
//     }
//     pyramide += '\n'
// }
// console.log(pyramide)


// romb

// console.log("8)===================")
// let romb = ''
// let x = 5  //10
// let space = ' '
// for (let i = 1; i <= x; i++) {
//     romb += space.repeat(x - i)
//     for (let j = 1; j <= i; j++) {
//         if (j == 10) {
//             romb += 0
//         }
//         else romb += j

//     }
//     for (let j = i - 1; j >= 1; j--) {
//     romb += j
// }
// romb += '\n'
// }
// x = 4    //9
// for (let i = 1; i <= x; i++) {
//     romb += space.repeat(i)      // i - 1 if x = 5
//     for (let j = 1; j <= x + 1 - i; j++) {
//         romb += j
//     }
//     romb += '\n'
// }
// console.log(romb)




//     *
//    ***
//   *****
//  *******
// *********

// console.log("9)===================")
// let pyramide2 = ''
// x = 5
// space = ' '
// let sum = 1
// for (let i = 1; i <= x; i++) {
//     pyramide2 += space.repeat(x - i) + "*".repeat(sum) + '\n'
//     sum += 2
// }
// console.log(pyramide2)




// console.log("10)===================")

// let str = ''
// x = 5
// for (let i = 1; i <= x; i++) {
//     let num = i
//     for (let j = 1; j <= i; j++) {
//         str += num + space 
//         num = num + (x - j)
//     }
//     str += '\n'
// }
// console.log(str)
