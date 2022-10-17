//                                   УРОК ОТ 10/04 (Nalya Sh)

//===============    compare with strings  ============================


// let string = "abcde"
// console.log(string[1])

// const array = ['a', 'b', 'c', 'd', 'e']
// console.log(array)

// const array = ['a', 'b', 'c', 'd', 'e']
// console.log(array[2])            //второй элемент - 'c'






//===============    split();    ======================================

// string.split(separator[, limit])
// Метод split() разбивает обьект String на массив строк путем разделения строк
// потом можно применить join, чтобы собрать

// let str = '1I do, 2you do, 3they do'
// console.log(str.split('do'))

// console.log(str.split(', '))

// console.log(str.split('o', 2))
// console.log(str.split('l'))
// console.log(str.split(''))
// console.log(str.split(/\d/))

// str ='0    1 2  3     4'
// console.log(str.split(/\s*/))

// => /\d/ - заменяет символы от 0 до 9 включительно
// => /\*/ - "ноль или более" (*) пробелов (\s)


//=== split(); делит строку по указанному разделителю, возвращает массив
// split(""); => возвращает массив _всех_ символов

// let string = "Hello World"
// console.log(string)

// console.log(string.split(" "))     // выводит массив





//===============    join();    ========================================

//=== join(); конвектирует массив в строку, по умолчанию
//разделяет символы запятой, but do not change it

// let array = ['a', 'b', 'c', 1, 2, 3]
// console.log(array)

// console.log(array.join())     //как бы склеивает все элементы
// console.log(array)

// newStringFromArray = array.join("")      //("")можно менять все что хочешь ("   /")
// console.log(newStringFromArray)





//===============    pop/push    ========================================

// push -> добавляет элемент(ы) в конце
// pop  -> удаляет последний элемент (и возвращает этот элемент!)

// const letters = ['a', 'b', 'c', 'd', 'e']
// console.log(letters)
// letters.push('f')                                   //добавляет в конец
// let c = letters.push('g')

// // console.log(letters)
// // console.log(c)                                   //подсчитывает все элементы массива


// letters.pop()                                      //retern deleted element
// let a = letters.pop()
// console.log(letters)
// console.log(a)                                     //показывает что было удалено





//===============    unshift    ========================================

//unshift -> Добавляет элемент(ы) массива в начало массива
//shif    -> Удаляет элемент в начале, сдвигая очередь так, что второй элемент становится первым
// ( и возвращает этот элемент!)

// const bigLetters = ['A', 'B', 'C', 'D', 'E']

// bigLetters.unshift('Z')
// let d = bigLetters.unshift('X', 'Y')          //return quality of elements
// console.log(bigLetters)
// console.log(d)                                //подсчет элементов


// let b = bigLetters.shift()
// console.log(bigLetters)
// console.log(b)




//========================  Обьединение массивов  ====================================================

//Concatenation - не используется!
// const letters = ['a', 'b', 'c', 'd', 'e']
// const bigLetters = ['A', 'B', 'C', 'D', 'E']
// //console.log(letters + bigLetters)                //строка!!! 
// console.log(String(letters))                     //convert to string 

// //математических действий не делает, просто склеивает
// console.log(String(7))
// let num = String(7)
// let num2 = 5
// console.log(num + num2)

// const arr1 = [1, 2, 3]
// const arr2 = ['a', 'b', 'c']
// arr1.push(arr2, 5)
// console.log(arr1)

// =====================  push() + spread operator  ==========================

//добавление через push развернутыми элементами
// const arr1 = [1, 2, 3]
// const arr2 = ['a', 'b', 'c']
// arr1.push(...arr2)              // (...arr2) ==> ('a', 'b', 'c')
// console.log(arr1)

//через третий массив
//если мы хотим, чтобы arr1 и arr2 остались не изменными
//мы как бы складываем в arr3 с 129
// const arr1 = [1, 2, 3]
// const arr2 = ['a', 'b', 'c']
// const arr3 = [...arr1, ...arr2]         
// console.log(arr3)


// let arr = [1, 2, 3]
// let emptyArr = []
// emptyArr.push(1, 3, 5, "f")
// emptyArr[0] = "A"
// console.log(emptyArr)





// =====================   spread operator(...)  ==========================

// const numbers = [4, 8, 99, 9, 7, 777, 54]
// console.log(numbers)
// console.log(...numbers)        //показывает элементы массива в развернутом виде

//console.log(Math.max(4, 8, 99,9))


//обращаемся к Math и потом выбираем метод max, min и т.д 
//просто вбиваем в гугле или смотрим на сайте https://schoolsw3.com/jsref/jsref_match.php
// const numbers = [4, 8, 99, 9, 7, 777, 54]
// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))




// =====================   ==; ===   compare array(сравнение)  ==========================

//В этом случае будуе false - так нельзя
// const arr = [1, 2]
// const arr1 = [1, 2]
// console.log(arr === arr1)  // не работает ===, !===


//В этом случае будуе true
//можно сказать что создали дубликат
// const arr = [1, 2]
// const arr1 = arr
// console.log(arr == arr1) 


//В этом случае будет работать
// const arr = [1, 2, 4]
// const arr1 = [1, 2]
// console.log(arr > arr1)

// console.log(arr < arr1)




// =====================   метод JSON  ==========================

// const a1 = [1, 2, 4]
// const b1 = [1, 2, 3]
// let a2 = a1.join()
// let b2 = b1.join()

// console.log(JSON.stringify(a1) == JSON.stringify(b1))

// Это преобразование в :
// {
// 'key' :  'value'
// 'key' :  'value1'
// }


// let arr = ['a', 'b', 'c', 1, 2]
// console.log(arr.join(''))



//=============================================================

// let arr = [1, 2. 3]
// let emptyArr = []

// console.log(String(arr), String(emptyArr))
// console.log(Number(arr), Number(emptyArr))
// console.log(Boolean(arr), Boolean(emptyArr))

//Метод String с200: String(arr) возвращает 197, emptyArr возвращает 198 (фактически, но мы не видим)
//Метод Number с201: Number(arr) - NaN(ничего нет, это не номер), emptyArr - 0
//Метод Boolean с202: Boolean(arr)    emptyArr  - там вообще что то есть?




// =====================   length  ==========================

// let txt = "ABCDEFGHJKLMNOPRSTUWXYZ"
// let length = txt.length
// console.log(length)

//другой вариант
// let txt = "ABCDEFGHJKLMNOPRSTUWXYZ"
// console.log(txt.length)




// =====================   .slice  ==========================

// str.slice(beginIndex[, endIndex])

// Индекс, с которого начинать извлечение (нумерация наинается с нуля).
// Извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
// endIndex
// Индекс, перед которым заканчивать извлечение (нумерация начинается с нуля)
// Символ по этому индексу не будет включен.

// const str = 'The quick brown fox jumps over the lazy dog.'
// console.log(str.slice(31))        // "the lazy dog"
// console.log(str.slice(4, 19))     // "quick brown fox"
// console.log(str.slice()) 
// console.log(str.slice(2))         // e quick brown fox jumps over the lazy dog.
// console.log(str.slice(-5))        // "dog"
// console.log(str.slice(-9, -5))    // "lazy"


//это не для array
//Slice out a portion of a string from position 7 to position 13 ( 13 not included)
//"Apple, /Banana/, Kiwi"  - выдернет то что в //
//"AppleBa/nanaKi/wi"  - это если без запятых

// let str = "Apple, Banana, Kiwi"
// let part = str.slice(7, 13)
// console.log(part)



// =====================   replace  ==========================

// Возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, замененными на заменитель.
// Шаблон может быть строкой или регулярным выражением, а заменитель может быть строкой или функцией,
// вызываемой при каждом сопоставлении.

// Выполнится единожды для первого найденного соответствия

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reackted'
// console.log(p.replace('dog', 'monkey'))


//Если выделить text и нажать F2 и поменять на massege - то заменит text везде на massege . 
//Так и в этом методе только со словами в стрингах
//The replace() method replaces a specified value with another value in a string:

// let text = "Please visit Microsoft!"
// let newText = text.replace("Microsoft", "W3chools")
// console.log(newText)

// =====================   replaceAll  ========================== поменяет везде

// let text = "Please visit Microsoft, Microsoft!"
// let newText = text.replaceAll("Microsoft", "W3chools")
// console.log(newText)

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
// console.log(p.replaceAll(/dog/g, 'momkey'))

//  /dog/g,  - / /g  - означает поменяй глобально




// =====================   vharAt()  ==========================

//Get the first character in a string:

// let text = "HELLO WORLD"
// let letter = text.charAt(0)
// console.log(letter, text[0])





// =====================   repeat()  ==========================

//Create copies of a text:
// let a = "Hi!"
// console.log(a.repeat(4))

// let text = "Hi Olga!"
// let result = text.repeat(2)


// console.log('abc'.repeat(-1))        // RangeError
// console.log('abc'.repeat(0))         // ''
// console.log('abc'.repeat(1))         // 'abc'
// console.log('abc'.repeat(2))         // 'abcabc'
// console.log('abc'.repeat(3.5))       // 'abcabcabc' (count will be converted to integer)
// console.log('abc'.repeat(1/0))       // RangeError




// =====================   trim()  ========================== обрезает пустые строки

//Remove spaces with trim():
// let text = "    Hi Olga!"
// let result = text.trim()
// console.log(text)
// console.log(result)




//                       УРОК ОТ 10/04 (Svetlana G)

// =====================   .toString()  ==========================

// let n = 15.25
// console.log(String(n))
// console.log(n.toString())
// console.log("" + n)
// console.log(n = "")

// let s = `${n}`
// console.log(s)


// =====================   .toFixed()  ========================== работает и с числами и строкой

// let n = 15.25
// console.log(typeof(n.toFixed(1)))             //вернет string
// console.log(n.toFixed(1))                     //вернет number



// =====================   .parseInt()  ========================== работает со строкой в которой
// вначале только числа

// let n = '15.2500'
// //console.log(typeof(parseInt(n)))    //вернет number
// console.log(parseInt(n))

// console.log(typeof(1 * '15'))



// =====================   .toUpperCase()  ==========================

// console.log('hello world'.toUpperCase())



// =====================   .toLowerCase()  ==========================

// console.log('hello world'.toLowerCase())


// =====================   .concat()  ==========================
//используется редко

// let str = 'I'
// let str2 = 'am'
// let str3 = ' a student'
// let res = str.concat(' ', str2, str3)
// console.log(res)


// =====================   .podStart()  ==========================

// function res(str) {
    
//     const a = str.padStart(9, 'wood')
//     const b = str.padStart(13, 'wood')
//     const c = str.padStart(18)
//     const d = str.padStart(3, 'wood')
//     const e = str.padStart(6, 'wood')
//     return a

// }
// console.log(res('Table'))



// =====================   .padEnd()  ==========================

// function res(str) {
    
//     const a = str.padEnd(9, 'wood')
//     const b = str.padEnd(13, 'wood')
//     const c = str.padEnd(18)
//     const d = str.padEnd(3, 'wood')
//     const e = str.padEnd(6, 'wood')
//     return {a, b, c, d, e}

// }
// console.log(res('Table'))



// =====================   .includes()  ==========================

// let str = 'Did you notice the notes you?'
// console.log(str.includes('you'))          //true
// console.log(str.includes('not', 9))       //true
// console.log(str.includes('not', 20))      //false
// console.log(str.includes('did'))          //false
// console.log(str.includes('+'))            //false


// let str = '7890'
// console.log(str.includes('9'))

// let str1 = ';+=.++'

// console.log(str1.includes('++'))
// console.log(str1.includes('+.'))
// console.log(str1.includes('+-'))



// =====================   .indexOf()  ==========================

//Возвращает индекс первого вхождения подстроки в строке.
// str.indexOf(otherStr, [index])
// Возвращает -1, если значение не найдено.

// let str = 'A turtle is on the beach.'
// console.log(str.lastIndexOf('turtle'))

// console.log(str.lastIndexOf('turtle'))
// console.log(str.lastIndexOf('turtle, 3'))

// The indexOf() method is case sensetive.
// console.log('Blue Whale'.indexOf('e', 70))      // -1

// const str = 'Hello, my dear friend. You are the best'
// // console.log(str.indexOf('e', 70))               // -1
// let count = 0
// let position = str.indexOf('e')                 //  1
// console.log(position)                           //  1
// while (position !== -1)  {                      //  1
// count ++
// position = str.indexOf('e', position + 1)
// }
// console.log(count)

// читаем так с 430 - пока он есть в строке
// с 431 увеличь на 1
// с 432 и перепиши его на +1



// =====================   .lastIndexOf()  ==========================

// Возвращает индекс последнего вхождения указанного значения в строковый обьект String,
// на котором он был вызван
// или -1, если ничего не было найдено.
// Поиск по строке ведется от конца к началу, начиная с индекса ftomIndex.

// let str = 'canala'
// console.log(str.lastIndexOf('a'))        //5
// console.log(str.lastIndexOf('a', 4))     //3   
// console.log(str.lastIndexOf('a', 3))     //3
// console.log(str.lastIndexOf('a', 2))     //1  
// console.log(str.lastIndexOf('a', 0))     //-1



// =====================   .substring(index1[, index2])  ==========================

// Метод substring() возвращает подстроку строки между двумя индексами,
// или от одного индекса и до конца строки.
// indexA целое число от 0 до длины строки, определяющее смещение в строке первого символа,
// который будет включен в результирующую подстроку.
// indexB необязательный параметр.
// Целое число от 0 до длины строки, определяющее смещение в строке первого символа,
// который не будет включен

// let str = 'Helloworld'
// console.log(str.length)
// console.log(str.substring(0, 9))  //"Hellow"
// console.log(str.substring(3, 6))  //"low"
// console.log(str.substring(6, 6))  //""

// Следующий пример использует метод substring() и свойство length для извлечения
//  последних символов из строки.
// Этот метод может оказаться легче для запоминания, особенно если учесть, что вам не нужно знать
// начальный и конечный индексы
// как это было в примере выше.

// console.log(str.substring(str.length - 3))
// console.log(str.substring(str.length - 5))




// =====================   .trim(), trimStart(), trimEnd()  ==========================

// const orig = '   *foo*   '
// console.log(orig.trim())    // 'foo




// The charCodeAt() method returns the Unicode of the character at a specified index (position)
// The index of the first character is 0, the second 1, ...
// console.log('Hello'.charCodeAt(0))

// var emoji = String.fromCodePoint(0x1F621)
// console.log(emoji)