//                           Урок от 10.17 (Stan P.)

//  ===============   Регулярные выражения и их использование  ==================================

// RegExp  -  Regular Expression - для массового поиска
// мощное средство для работы со строками. Для поиска, замены.
// для валидации вводимых данных

// /.../                                                              const arr = []
// const regexp = new RegExp("template", "flags")                     const newArr = new

// ==============================================================================================


// ==================  .match(RegExp)  ===============

//.match(RegExp) - в который передается RegExp и возвращает массив совпадений
// возврат этого метода идет массив, либо если совпадение не найдено, то вернется null (а не пустой массив)

//мы хотим найти все буквы l (L)


// let str = "HeLLo world!"
// //const regexp = new RegExp("l", "g")       //g - от слова global (ищет все)
// const regexp = new RegExp("l", "gi")        //gi  - не чувствителем к регистру (добавили key i)

// let result = str.match(regexp)

// console.log(result.length)
// console.log(result)

//чаще всего так
// let str = 'HeLLo "world"!'
// const regexp = new RegExp("l", "gi")       //"l" -ищет в "" и поэтому придет null
// //let result = str.match(/"l"/gi) || []    // поэтому нужны [] чтобы не упал код
// let result = str.match(/"world"/gi) || [] 

// console.log(result.length)                 // у null нет свойства length 
// console.log(result)

// let str = 'HeLLo "world"!'
// let regexp = /"World"/gi
// let result = str.match(regexp) || []
// console.log(result.length)                
// console.log(result)



// ==================  .replace()  ===============

// хотим заменить l на ""
// console.log(str.replace('L', ""))               //заменит одну букву
// console.log(str.replaceAll('L', ""))            //заменит все буквы

// console.log(str.replaceAll(/L/g, ""))           //заменит одну букву     
// console.log(str.replaceAll(/L/gi, ""))          //заменит все буквы


//---------------------------------------------------------------------------------------------------
// & - амперсант
// "$&" - что найдет то и вернет
// "$&$&" - удвоит 
// "$`"  - возвращается часть строки до нахождения 
// "$'"  - возвращает то что было найдено после
//---------------------------------------------------------------------------------------------------

// хотим задублировать l на ""
// console.log(str.replace(/L/g, "$&"))           //то что нашел то и вернет     
// console.log(str.replace(/L/gi, "$&$&"))        //удвоит
// console.log(str.replace(/L/gi, "$`"))
// console.log(str.replace(/L/gi, "$'"))

 

//--------------------------------------------------------------------------------------------------
// \d \w \s

//d от слова digital - убирает символы
//w от слова word - убирает буквы
//s от слова space - убирает все пробельные символы (знаки табуляции, пробел, перенос строки)
//b - по границам слов
//---------------------------------------------------------------------------------------------------


// хотим избавиться от всех пробелов в строке
//  let str = "      123. Hello    world!"
// console.log(str.replace(/\s/gi, ""))

// // хотим убрать цифры
// console.log(str.replace(/\d/gi, ""))

// // хотим убрать все буквы
// console.log(str.replace(/\w/gi, ""))


//--------------------------------------------------------------------------------------------------
// \D \W \S     - любой символ кроме цифры

// let str = "      123. Hello    _world!"
// console.log(str.replace(/\W/gi, ""))
//-------------------------------------------------------------------------------------------------


//хочу убрать все символы, кроме цифр
// let str = "+1 (234) 123-45-67"
// console.log(str.replace(/\D/gi, ""))



// ========================  ДИАПАЗОНЫ  =============================================================
//[] можем включать [-]
// let str = "My number: +1 (234) 123-45-67"
// console.log(str.replace(/[a-z:]/gi, ""))
// console.log(str.replace(/[0-9:-]/gi, ""))
// console.log(str.replace(/[0-9]/gi, "#"))

//класс{1,2} : 1я цифра задает - сколько,  2я цифра задает - сколько цифр удаляется   - прочитать!! не точно!!
// console.log(str.replace(/\d{2}/gi, "#"))

// console.log(str.replace(/\d+/gi, "g"))



// ========================  ЯКОРЯ  =============================================================

//^ - искать с начала строки
//$ - искать с конца строки

// let str = "My number: +1 (234) 123-45-67; my room: "
// console.log(str.replace(/^My/gi, "#"))
// console.log(str.replace(/My$/gi, "#"))


// ========================  КЛЮЧИ  =============================================================

// g - global
// i - keys insansative (не чувствителен к регистру)
// m - multiline (когда выражение приходить из нескольктх строчек)