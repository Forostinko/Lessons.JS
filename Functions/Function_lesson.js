//                             Урок от 09/27

// ================================ FUNCTIONS (методы) ======================================
//Function обычно прописывает человек, а методы (log)- это уже предоставленные методы,
//которые уже есть в языке
//Обычнов в function при присваивании применяют глаголы (сложи, раздели, напечатай, проверь..) -
//--sum, verify, print, add, delete, delete accaunt, scrole down

//http://learn.javascript.ru/function-basics

//console.log( "Hello World!");
//alert("Hello!");               //работает только в web -> Run -> Start without Debugging

//=============================================================================================================
//=============================================================================================================

// Есть 3 варианта обьявить функцию: declaration, expression, arrow




// ============ Option 1:   FUNCTION DECLARATION - обявление функции  ==================================
//-------------------------------------------------------------------------------------------------------
//1. Используем слово function
//2. Имя функции
//3. Список параметров в круглых скобках через запятую
//4. Код функции ("тело функции"), внутри фигурных скобок
//Function names can cjntain letters, difits, underscores and dollar sings ( same rules as variables).
//Function Invocation - вызов ф-и 
//The code inside the function will execute when "something" invokes(calls) the function:

//When an event occurs (when a user clicks a button) - этот вариант для WEB
//When it is invoked(called) from JS code  - это делаем мы
//Automatically (self invoced) - прописывается внутри кода (сама себя вызывает)

//function print (arg) {
//   console.log(arg);
// }
// print("Hi");     //можем писать и в самом начале до function print (arg)- потому что ищет по всему коду
                    //это особенность классической функции

   

// function sum (a, b) {
// //   const a = 9
// //   const b = 4
//   let resuit = a + b
//   print(result)
// }
// sum(1, 4)
// console.log(a)  //a is not defined
// sum(6, 9)

// let c = sum(5, 5)
//console.log(c)

//можно помещать ф-ю в ф-ю



//void function ====> возвращает anderfined  /  нет "return"
//но выполняет вложенные в тело функции действия

//"return" может находиться в любом месте тела функции
//как только выполнение доходит до этого места, функция останавливается и значение 
//возвращается в вызвавший её код

//console.log(a + b);   // a is not defined

//Переменные, обьявленные внутри функции видны только внутри этой функции
//console.log(a, b);

// function sum (a, b) {
//         return a + b 
//     }
// function sum (a, b) {
//     return a + b            //1 и 4 подставляет под a и b
// }     
// sum(1, 4)                    //присваиваем значение здесь
// console.log(sum(1, 4))

//если мы хотим например +2, то мы просто вставляем в console.log(sum(1, 4) + 2)
//или другой вариант   let result = sum(1, 4) + 2                   
//                     console.log(result)


 



// function sum (a, b) {
//     let result = a + b
//     if (a > 0) {
//         return result
//     }else {
//         return result * (-1)
//     }
// }
// sum (1, 4)              //присваиваем значение здесь
// sum (6, 9)
// console.log (sum(-7, 1))

// let c = sum(5, 5)
// console.log(c)



//Но у функции есть доступ к внешним переменным:

// let name1 = 'Anna'                      //global
// //console.log(name1)                    //здесь выведет только Анна
// function showNessage() {
//     return name1 = 'Hi ' + name1
// }
// console.log(showNessage())               //local
// console.log(name1)                      ////здесь выведет  Hi Anna
 


// let name1 = 'Anna'
// //console.log(name1)  

// function showNessage(name1) {          //это будет ближе чем выше переменная
//     return name1                       //здесь возвращается John - местная переменная
// }
// console.log(showNessage("John"))
// console.log(name1)                   //Anna возвращается здесь

//Приоритет в локальной функции. 
//Если не находит в локальной   ===>   function showNessage()
//то пользуется внешней  ===>     let name1 = 'Anna'
//в этом случае он считает приоритетом  ===>  function showNessage(name1) а потом подтягивает внешнюю переменную
//вызывать функцию можно где угодно, т.е фактически вызов это showNessage, а console.log это просто печать
// поэтому console.log(showNessage) мы можем размещать где угодно


//====== Функция внутри функции ===
// function showHi() {
//     return "Hi"
// }
// function showName(name) {
//     return name 
// }
// function showMessage2(myName) {
//     return showHi() + "" + showName(myName)
// }
// console.log(showMessage2("Olya"))


//фактически я бы сказала Olya стр 143 ===> 
//и эта Olya передается в showMessage2(myName) стр 140 ===>
//это передается в showName(myName) стр 141 ===> 
//и уже showName(myName) вернул бы  Olya
//произошла из рук в руки локальной переменной


//Конкотинация
// a + b воспринимается как конкотинация а не как сложение

// function sum2(a, b) {
//     return a + b
// }
// console.log(sum2("abc", "rfd"))

//если код длинный и нужно перенести на другую строчку - записать в круглых скобках, иначе return не увидит
// function sum2(a, b) {
//     return (
//         a + b)






// ============ Option 2:   FUNCTION EXPRESSION - функциональное выражение  =========================
//----------------------------------------------------------------------------------------------------
//http://learn.javascript.ru/function-expressions

//=============================================================================================================

//встречается редко
//в Function Expression cставиться ; на конце
//в Function Declaration нет

//вы не можете использовать Function Expression до того, как её обновили

//hello("Anna");   //Cannot acces 'hello' before initialization - ели до let hello = function(name) 

// let hello = function(name) {
//     console.log("Hi, " + name);
// };

// hello("Anna");






// ============ Option 3:  ARROW FUNCTION - стрелочная функция  =========================
//--------------------------------------------------------------------------------------------------------

//=============================================================================================================
//         =>  заменяет слово function и ()

// let sum - название функции
// (a, b)  - параменты/аргумент
// =>      - функция
// a + b   - логика(код) внутри функции (то что было раньше в {})
//console.log()  - с () - показатель что это функция


// let sum = (a, b) => a + b;
// console.log(sum(3, 9));


// let sum = (a, b) => `Your nubers are: ${a}, ${b} and sum -`+ (a + b);
// console.log(sum(3, 9));



//если наша логика большая, то {} нам понадобятся

// let sum = (a, b) => {
//     a + b
//     a * 3
// }
// console.log(sum(3, 9))

// let toPay = (price, weght) => price * weight;

// console.log(toPay(3.22, 7))

//Если у нас только один аргумент, то круглые скобки вокруг параметров можно опустить:

// let double = n => n * 2
// console.log(double(456))

//let dreeting = name =>;

//Если аргумента нет, () круглые скобки будут пустыми, но они должны присутствовать:

//let sum = (a, b) => `Your nubers are: ${a} and sum -`+ (a + b);

//Если нужна более сложная стрелочная функция, с несколькими выражениями, то это также возможно
//нужно лишь заключить их в фигурные скобки {}.
//При этом важно! - в таких скобках для возврата значения нужно использовать "return"

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// };


// let sum = (a, b) => {
//    return   `Your nubers are: ${a}, ${b} and sum -`+ (a + b);
// }

// console.log(sum(3, 9));
// console.log("Good night!");






// function name(param1, param2...) {
//     statements
// return XPathExpression;
// }