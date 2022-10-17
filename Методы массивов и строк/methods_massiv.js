//========================   УРОК от 10/05 (Stan P.)  ===============================================
 
//Массив(array) - это упорядочная коллекция значений. Все значения в массиве являются элементами 
//Каждый элемент характеризуется своей позицией в массиве
//Это позиция характеризуется индексом
//В JS массивы являются динамическими - можем увеличивать и уменьшать 
//Создаются через литеравы - []

// let arr = []
// const arr1 = [1, 2, 3]
// const arr1 = [1, 2, 3,]
// console.log(arr1.length)

//let arr = new Array()     // = let arr = []


//вызов конструктора
//показывает что массив у нас пустой
//new Array()  - записываем в () - например new Array(10) - он думает что пришла длина

// let arr = new Array() 
// const arr1 = [1, 2, 3,]
// console.log(arr)

// let arr = new Array(10, 3, 5, 6, 'str', null, false)
// console.log(arr)



//=========================   length   =======================================

//Это свойство
//Также влияет на длину массива 

//let arr = new Array(10, 3, 5, 6, 'str', null, false)
// arr.length = 3
// console.log(arr)
// console.log(arr[0])     //обращение к 0 элементу
//console.log(arr.at(-1))    //обращение к последнему элементу по свойству
//другой вариант
// console.log(arr[arr.length -1]) 

//Спросить почему - 1????????



//Самая главная разница между pop/push и shift/unshift - то что shift/unshift работают гораздо медленне
//(это будет заметно на большом массиве)


//------------------------------------------------------------------------------------------------------
//                           МЕТОДЫ МАССИВОВ  - КОНЕЦ МАССИВА
//------------------------------------------------------------------------------------------------------


//=====================   PUSH()   ====== добавляет в конец существуещего массива

// let arr = new Array(10, 3, 5, 6, 'str', null, false)
// arr .push('string')
// console.log(arr.push(100))
// console.log(arr)
//9 получается потому что добавили элемент на с 53 и с 54



//=====================   POP()    ====== извлекает один элемент в конце из массива

// let arr = new Array(10, 3, 5, 6, 'str', null, false)
// arr .push('string', 10, 65, true, [2, 4, 5])
// arr.pop()
// console.log(arr)

//удалить 5 
// let arr = []
// arr .push('string', 10, 65, true, [2, 4, 5])
// console.log(arr[4].pop())
// console.log(arr)



//------------------------------------------------------------------------------------------------------
//                           МЕТОДЫ МАССИВОВ  - НАЧАЛО МАССИВА
//------------------------------------------------------------------------------------------------------


//=====================   UNSHIFT()   ====== добавляет в начало существуещего массива

// let arr = ['string', 10, 65, true, [2, 4, 5]]

// arr.unshift(1, 2, 3)
// console.log(arr)


//=====================   SHIFT()   ====== удаляет с начала массива один элемент

// let arr = ['string', 10, 65, true, [2, 4, 5]]

// arr.unshift(1, 2, 3)
// console.log(arr)
// //arr.shift()
// console.log(arr.shift())


//=====================   CONCAT()   ====== обьединяет несколько массивов в один

// let arr = ['string', 10, 65, true, [2, 4, 5]]
// let arr1 =[2, 3, 4, 5,]
// let arrStr = ['wr', 'rt', 're']

// let newArr = arrStr.concat(arr, arr1)  //присоединяются в порядке прописания аргументов (arr, arr1)
// console.log(newArr)




//=====================   REVERCE()   ====== переворачивает массив

// let arr1 = [2, 3, 4, 5]
// arr1.reverse()
// console.log(arr1)



//=====================   SPLIT()   ====== разбивает массив (только со стрингами)

// let str = 'Hello world!'
// const arr = str.split(' ')
// // const arr = str.split('l')
// console.log(arr)


// let string = "Hello World"
// console.log(string)

// console.log(string.split(" "))



//=====================   JOIN()   ====== конвектирует массив в строку

// let str = 'Hello world!'
// const arr = str.split(' ')
// console.log(arr)

// let newStr = arr.join(",")
// console.log(newStr)


// let array = ['a', 'b', 'c', 1, 2, 3]
// console.log(array)

// console.log(array.join())     //как бы склеивает все элементы




//=====================   SLICE()   ====== (c начала массива)

// let str = 'Hello world!'
// const arr = str.split('')
// console.log(arr)

// const newArr = arr.slice(-6)
// console.log(newArr)



//=====================   SPLICE()   ====== гибкий метод (добавляет, удаляет, заменяет)

//.splice(index, deleteCount, ell, el2, ..., elN)
//  index - в котором мы хотим удалить элементы
//  deleteCount - указываем колличество удаляемых элементов    
//  ell, el2, ..., elN  -  на место удаляемых элементов будут добавлены все перечисленные элементы 
// let str = 'Hello world!'
// const arr = str.split('')
// console.log(arr)

// arr.splice(1, 3, "E", "L", "L", "$")
// console.log(arr)

// let arr = [1, 2, 3, 7]
// arr.splice(3, 0, 4, 5, 6)
// //с 3 индекса удали мне 0 элементов(ничего) а добавь мне 4, 5, 6 и печать
// console.log(arr)

// let arr = [1, 2, 3, 3, 7]
// arr.splice(3, 1, 4, 5, 6)
// //с 3 индекса удали мне 1 элемент и добавь мне 4, 5, 6 и печать
// console.log(arr)





//====================   .indexOf()  ====== ищет вхождение элемента и возвращает индекс этого вхождения

// .indexOf(item, fromIndex)

// const arr = "Hello World!".split('')
// console.log(arr)
// let index = arr.indexOf('l', 4)
// console.log(index)

//Если мы хотим получить все буквы 'l'
// с208 пока не будет равен -1 (если буква не находится то метод возвращает -1)
// const arr = "Hello World!".split('')
// console.log(arr)
// let i = arr.indexOf('l')

// while (i != -1){
//     console.log(i)
//     i = arr.indexOf('l', i + 1)
//     }

//работает с методом равенства. Если например нужно проверить Bollean - true/false
// Методы проверяются только ===

// ==      не строгое сравнение (проверяется только значение)
// ===     строгое сравнение (проверяется тип и значение)





//====================   .lastIndexOf()   ======

// const arr = "Hello World!".split('')
// console.log(arr)
// let i = arr.lastIndexOf('l', 2)
// console.log(i)




//====================    .includes()  ======

// const arr = "Hello World!".split('')
// console.log(arr.includes('L'))

//console.log(NaN == NaN)       //false
//console.log(NaN === NaN)      //false
//NaN - не равна никогда, даже не равна сама себе (особенность языка)
//Вопрос на собеседовании: какое знчение не равно себе никогда? - NaN

// const arr = "Hello World!".split('')
// arr.pish(NaN)
// console.log(arr.includes(NaN))   //True




//====================    .find()  ======  возвращает элемент

// вернет первый найденный массив, который подходит под заданное условие

//.find(function(item, index, array) {...}))
// {...} - это тело функции


//===   находим нечетное число  - num % 2 != 0      ====

//проверяем число четное либо нечетное -  num % 2 != 0  -  мы делим на 2 и соответственно 
//это число должно быть не равно 0
//если выполняется равенство  -  num % 2 == 0   -   значит четное число
//находит первый элемент и прекращает поиск - 3
 

// const arr = [2, 3, 8, 10, 11]
// console.log(arr.find(el => el % 2 != 0))

//если не находит  -  undefined
// const arr = [2, 4, 8, 10, 12]
// console.log(arr.find(el => el % 2 != 0))



//====================    .findIndex()  ====== возвращает индекс  ===callback fuction

// const arr = [1, 3, 8, 10, 11]
// console.log(arr.findIndex(x => x % 2 == 0))

//     console.log(arr.find((x, i) => i % 2 != 0 && x % 2 == 0))




//====================    .filter()  ====== возвращает индекс

//.filter(function(el, ind, arr)  => {...}) 


//нечетные числа
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arrOdd = arr.filter(el => % 2 != 0)
// console.log(arrOdd)



//элементы которые являются строкой
// const arr = [1, 'str', null, 4, true, 6, NaN, 8, 9]

// const newArr = arr.filter(el => typeof el == "")
// console.log(newArr)


//элементы которые являютcя только числами

// const arr = [1, 'str', null, 4, true, 6, NaN, 8, 9]

// const newArr = arr.filter(el => typeof el == "number")
// console.log(newArr)




//====================    .every()  ====== 

//проверяет все элементы должны соответсвовать какому-то условию, 
//которые мы передаем в callback function
//если они все соответствуют переданному условию, тоо результат будет true
//в прротивном случае false

//проверим что в массиве каждый элемент положительный
// const arr = [1, 8, 9, -2, 0, 5]
// console.log(arr.every(el => el > 0))

//если с 0 то >=
//console.log(arr.every(el => el >= 0))

//проверка на отрицательные числа
//console.log(arr.every(el => el < 0))



//====================    .some()  ====== 

//проверяет какие-то элементы соотвветсвуют условию
//и если хоть какой-то один элемент соответствует, то будет результат  true
//если НИ один результат не соответствует условию - false

// const arr = [1, 8, 9, -2, 0, 5]
//console.log(arr.some(el => el < 0))


//========================   УРОК от 10/06 (Stan P.)  ===============================================

//====================    .forEach()  ====== 

// const arr = [-1, -8, -9, -2, 0, -5]

// const changeSign = function(el) {
//     console.log(-el)
// }
//changeSign(arr[0])


//это тоже самое как с 355
// arr.forEach(changeSign)


//это тоже самое как с 357
// arr.forEach(function(el) {
//     console.log(-el)
// })


//тоже самое только через стрелочную функцию

// const arr = [-1, -8, -9, -2, 0, -5]         //это el (элементы массива)
// const changeSign = el => console.log(-el)
//arr.forEach(changeSign)                  //это именная функция 

//проще сделать безымянную, она удобнее и это и сеть callback function

//arr.forEach(el => console.log(-el))

//в процессе мы можем проверить индекс четности(просто добавлять в процессе) и добавляем () - 
//потому что уже 2 элемента (el, i), ? (вместо если) : (то)
// arr.forEach((el, i) => i % 2 == 0 ? console.log(-el) : console.log(" "))

//вывести в кубе
//arr.forEach(el => console.log(el ** 3))



//возвести нечетные числа в квадрат и узнать длину массива, четные пропускаем
//самый последний : console.log(" ") - это для вывода наглядности пробелов
// const arr = [-1, -8, -9, -2, 0, -5]  
// const changeSign = el => console.log(-el)
// arr.forEach((el, i, newArr) => i % 2 != 0 ? console.log((el ** 2) + newArr.length) : console.log(" "))




//====================    .sort()  ====== возвращает массив(к исходному массиву теряем доступ)

// const arr = ["Anna", "Sveta", "Jane", "Serg"]
// console.log(arr.sort())                        //в алфавитном порядке

// console.log(arr.sort().reverse())              //в обратном порядке 


// const arr = ["Anna", "Sveta", "Jane", "Serg"]
// const arrNum = [1, 30, 23, 24, 65, 10, 9, 3, 2]     //сортирует по первому символу
// console.log(arrNum.sort())   

//сортировка от меньшему к большему
// console.log(arrNum.sort((a, b) => a - b))
 
//сортировка от большего к меньшему
// console.log(arrNum.sort((a, b) => b - a)) 

//вывести максимальное число в массиве (добавляем [0])
//console.log(arrNum.sort((a, b) => b - a)[0]) 

//вывести максимальное число в массиве (добавляем [0])
//console.log(arrNum.sort((a, b) => a - b)[0]) 





//====================    .map()  ======  метод применяет callback function для каждого элемента
// и возвращает массив к результату выполнения функции
//Например: возвести в квадрат, 

//узнать длину каждого элемента
// const arr = ["JavaScript", "Java", "Phyton", "English", "SQL"]
// console.log(arr.map(el => el.length))

//изменить 1й и последний элемент
// console.log(arr.map((el, i, arr) => i == 0 || i == (arr.length - 1) ? `**${el}**` : el))

//возведение в квадрат
// const arrNum = [1, 3, 6, 8]
// const newArr = arrNum.map(item => item ** 2)
// console.log(newArr)

//полученный элемент перевести в число (поставить унарный + или Number(item) )
//1й вариант:
// const arrNum = ["1", "3", "6", "8"]
// const newArr = arrNum.map(item => +item)
// console.log(newArr)

// //2й вариант:
// const newArr = arrNum.map(item => Number(item))

// //3й вариант:
// const newArr = arrNum.map(el => +el)

// console.log(newArr)



//====================    .reduce()  ====== для вычесления какого-то единого значения 
//на основе всего массива
//Например: получить сумму, получить среднее значение чисел

//.reduce((accumulator, el, index, array) => {....})
//accumulator - это то, что собирает и накапливает значения   - в нашем случае(sum)

// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = arrNum.reduce((sum, el) => sum + el)  // или => sum += el

// console.log(result)


//.reduce((accumulator, el, index, array) => {....} , (initial value))
//const result = arrNum.reduce((sum, el) => sum + el, 0) 
// sum = 0
// el = 1; sum += el: sum += 1
//  el = 2;          : sum += 2

//можно заменить (sum, el) на (acc, item)
// const result = arrNum.reduce((acc, item) => acc * item, 1) 



// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0

// for (let i = 0; i <arrNum.length; i++) {
//     sum += arrNum[i]
// }
// console.log(sum / arrNum.length)

// //или

// console.log(arrNum.reduce((acc, el, i, arr) => acc + el / arr.length, 0))
// //или
// console.log(arrNum.reduce((acc, el) => acc + el, 0) / arrNum.length)



