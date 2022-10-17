//                 Урок от 10/11 (Nalya Sh)

//htpps://www/w3scool.com/js/js_object_definition.asp
//=================== Objects =========================
/**
 * In JavaScript, objects are king. If you understand objects, you understand JavaScript.
 * 
 * In JavaScript, almost "everything" is an object.
 * 
 * Booleans can be objects (if defined with the new keyword)
 * Numbers can be objects (if defined with the new keyword)
 * Strings can be objects (if defined with the new keyword)
 * Dates are always objects
 * Math are always objects
 * Regular expressions are always objects
 * Arrays are always objects
 * Functions are always objects
 * Objects are always objects
 * All JavaScript values, expect primitives, are objects.
 * 
 * Objects are variables!
 * It is a common practice to declare objects with the const keyword.
 */


//  ========== exemples:

// {key: values,} - property (свойство)

// const person = {
//     name: "Ivan",
//     surname: "Petrov",
//     age: 33,
//     job: "QA Engineer",
//     isAdmin: false
// }

// const person2 = {
//     id: '02',
//     personalInfo: {
//         name: {
//             first: 'Jane',
//             last: 'Dow',
//         },
//         dob: '01/01/1990',
//         "contactInfo": {
//             phone: +123456789,
//             email: null,
//             adress: {
//                 city: "Boston",
//                 state: "M"
//             }
//         },
//     },
//     purchases: [null],
// }
// console.log(person2.personalInfo.contactInfo); 
// //чтобы смотреть инф-ю пишем отдельно personalInfo. или contactInfo.

// console.log(typeof person2);

// const arr = [1]
// console.log(typeof arr)


// ====================  Обьявление обьекта  =================================

// К key - можем обращаться как в ""  так и без них
// Посделнее свойство обьекта (property) может заканчиваться запятой ",".

// 2  способа:
// let obj = new Object()
// let user = {}

// let obj = {
//     name: 'Bob',
//     "age": 21,
//     "isAdult": true,
//     "salary": undefined,
//     4: null,
// };
// console.log(obj)
//console.log(obj.name)
//console.log(obj.["4"])  - к 4 обращаемся через стринг


// Ключ может состоять из нескольких слов, но тогда он _обязательно_ должен быть заключен в кавычки:c 92

// let user = {
//     name: "John",
//     age: 30,
//     "hihy scool": true,
// }
// console.log("original",user)

// //изменения с 98-100 относяться к с 89-94
// //value of age и name изменено:
// user.age = 20
// user.name = 'Bill'
// console.log("modiffied",user)

// //добавлено свойство address:
// user.address = {
//     city: 'SF',
//     state: 'CA',
//     country: 'USA',
// }
// console.log("added new key - address",user)
// console.log(user.address.state)


// //==================  оператор delete: ========================

// // это все применяется к с 89-109

// delete user.address.country
// console.log("deleted",user)


// ===================  Обращение к свойствам  ===============================================

// Для обращения к свойствам используется запись <<через точку>>: person.name, person.age
// или через [ ] :        person['name'], person["age"]

// const person = {
//     name: 'Yoey',
//     age: 30,
//     "likes cats": true,
// };

// // // выделение значения

// console.log(person.name)
// console.log(person.age)

// // console.log(person['name'])
// // console.log(person['age'])
// console.log(person['likes cats'])


// ====================  Добавления свойства (proerty)  ===============================================

// создаем обьект
// const obj = {}

// //присваиваем значения
// obj.name = 'Jess'  // через скобки []  это тоже самое что  arr[0] = "Jess"

// obj['likes read'] = true  //через скобки []

// obj['age'] = 28
// console.log(obj)

// let carModel = 'mini couper'   //через переменную 
// obj[carModel] = 1
// // эти 2 строчки (154 и 155) можно заменить одной 157
// obj['carModel'] = 3
// console.log(obj)



// ====================  Изменение свойства (property)  =============================================

// раскоментировать 144-158

// Object.name = "Bill",       //через точку
// obj['likes red'] = false,   //через скобки []
// obj[carModel] = 5,          //через переменную

// console.log(obj)



// ====================  Создание обьекта с использованием переменной  ================================

// let name1 = "Olga"
// let age = 17
// const user = {
//     [name1]: age   //[] - обязательно
// }
// console.log(user)


// ===================  Обращение к свойствам обьектв  =============================================

// сам customers - явдется массивом, внутри массива есть 2 элемента, которые обьекты
// когда мы пишем индекс 1 - [1] - фактически это 2й элемент
// пишем через запятую }, - (197-198-199) потому что 192-199 это один элемент
// а каждый элемент массива пишется через ,
// это как  = let arr[1,2,3,7]

// const customers = [
// {                      //  !!!  Array[0]
//     id: '01',
//     personalInfo: {name: {first: 'John',last: 'Dow',},},},   
// {                   //  !!!  Array[1]
//     id: '02',
//     personalInfo: {
//         name: {
//             first: 'Jane',
//             last: 'Dow',
//         },
//         dob: '01/01/1990',
//         "contactInfo": {
//             phone: '+123456789',
//             email: null,
//             address: null,
//         },
//     },
//     purchases: [null],
// }]  

//1. Cвойства 1-го уровня -array elements
// console.log(customers.length)
// console.log(customers[0])               //1-й элемент массива
// console.log(customers[1])               //2-й элемент массива
// console.log(customers[2]) 

//2. Cвойства 2-го уровня -from array to object
// console.log(customers[0].id)               
// console.log(customers[1]['id'])             

//3. Cвойства 3-го уровня              
// console.log(customers[1].personalInfo.name) 
// console.log(customers[1].personalInfo.dob)  
// console.log(customers[1]['personalInfo']['dob'])  

//4. Cвойства 4-го уровня              
// console.log(customers[1].personalInfo.name.first) 
// console.log(customers[1].personalInfo.contactInfo.email)  
// console.log(customers[1]['personalInfo']['contactInfo']['email'])  



// ===================  Проверка существования свойства  ==============================================

// ========  проверка с underfined
// В отличие от многих других языков, особенность JavaScript-обьуктов в том, 
// что можно получить доступ к любому свойству. Даже если свойства не существует -
// ошибки не будет!

// При обращении к свойству, которого нет, возвращается underfined.
// Это позволяет просто проверить существование свойства:

// let user = {
//     newKey: undefined,
// }
// console.log(user.age)                //undefined - не существует
// console.log(user. newKey)
// console.log(user.age === undefined)  //true означает "свойства нет"


// ============ через оператор in check the key

// let obj = {
//     firstName: 'Sofia',
//     lastName: 'I.',
//     age: 35,
//     language: 'Java',
//     newKey: undefined,
//     undefined: false,
//     job: null,
// }
// console.log(obj)

// console.log("firstName" in obj)    //проверяем: "firstName" есть ли в -in obj
// console.log("first" in obj) 
// console.log(undefined in obj) 
// console.log(null in obj)           //can't check by value

// console.log(obj.newKey === undefined) 




//==================================  Exemple

// let userInfo = {
//     name: "Anna",
//     age: 30,
//     address: {
//         city: "Boston",
//         street: "Rose Dr."
//     }
// }

// // //Operator in
// if ("name" in userInfo) {                 //check if key  -name- in object
//     console.log(userInfo.name)
// }

// console.log(userInfo.address.street)     //это без проверки
// //опциональная цепочка
// console.log(userInfo?.address?.street)   //это с проверкой


//====================================================================================================

// обращение, добавление на примере

// let obj = {
//     firstName: 'Sofia',
//     lastName: 'I.',
//     country: "Argentina",
//     continemts: 'Americas',
//     age: 35,
//     language: 'Java'
// }
// let name = obj.firstName
// let language = obj.language

// console.log(name, language)

// let a = `Hi ${name}, Do you like ${obj.language}?`
// console.log(a)

// let newKey = 'hello'
// obj[newKey] = a           //obj.hello = a

// console.log(obj)



// ========================== цикл  for ... in  =====================================================

// let obj = {
//     name: "John",
//     age: 30,
//     asAdmin: true
// }
// for (let key in obj) {
//     //ключи
//     //console.log(key)              //  name, age, isAdmin - вывел ключи

// //  // значения ключей 
//     //console.log(obj[key])         //John,30, true     /arr[i]

//     console.log(key + ": " + obj[key])
// }





//count salsries

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum)            //390





// let obj = {
//     width: 200,
//     hegth: 300,
//     title: "My menu"
// }

// //хочу перемножить исключительно числовые значения
// function multipyNumeric(obj) {
//     let res = 0
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             res += obj[key] * 2
//         }
//     }
//     return res
// }
// console.log(multipyNumeric(obj))




//===================================================================================================

// Обьекты - это ассоциативные массивы с рядом дополнительных возможностей.
// Они хранят свойства (пары ключ-значение), где:

// => Ключи свойства должны быть строками (string) или символами (symbol) (обычно строками).
// => Значения могут быть любого типа.
// => Чтобы получить доступ к свойству, мы можем использовать:

// => Запись через точку: obj.key.
// => Квадратные скобки obj[key]. Квадратные скобки позволяют взять ключ из переменной,
// например obj[varWithKey].
// Удаление свойства: delete obj.key
// Проверка существования свойства: "key in obj"
// Перебор свойств обьекта: цикл for (let key in obj)


// ==========================  Методы обьектов  ======================================================

// Object.keys,  values,  entries
// Для простых обьектов доступны следующие методы:

// object.keys(obj) - возвращает массив ключей
// object.values(obj) - возвращает массив значений
// object.entries(obj) - возвращает массив пар [ключ, значение].


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
//     language: "JavaScript"
// }
// console.log("Keys: ", Object.keys(user))       //выводит ключи (keys)
// console.log("Values: ", Object.values(user))   //выводит значения (values)
// console.log(Object.entries(user))              //выводит массив массивов





//=====  перебор в цикле  =======
//console.log('=============')
// let user = {
//     name: "John",
//     age: 30,
//     language: "en",
//     home: 'apartment',
//     number: 6
// }
// // // перебор значений - checking values
// for (let i of Object.values(user)) {
//     console.log(i)
// }


// ======================================================================
// есть стринг 442
// есть пустой обьект 445 
// используем for loop пробегаясь по всем элементам этого стринга
// говорим -450 - обект 
// [i + 1] - чтобы не было первого элемента 0 делаем [i + 1]
// так obj[i + 1] - создаем ключ
// так str[i]  - добавляем значения

// const str = 'ASDFGHHJKLKJHUTURFYTDGCHB'

// const obj = {}

// for (let i = 0; i < str.length; i++) {
//     obj[i + 1] = str[i]
// }
// console.log(obj)