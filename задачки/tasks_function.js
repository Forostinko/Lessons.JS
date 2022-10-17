// Code Worse
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick
// a flower each. If one of the flowers has an even number of petals and the other has an odd number 
// of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love
// and false if they aren't.


// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
//   }


//Приходит нам массив, там есть простые числа и не простые.
//Нам нужно посчитать колличество простых чисел
//(ПРостые числа это те которые деляться на 1 и на само себя)
//Наша задача наптсать ф-ю в которую будет приходить только одно число и мы будем проверять 
//оно у нас простое или нет

//на 0 делить нельзя, поэтому начинаем с 2  - с 24
//если num деленное на себя без остатка - c 27
//тогда возвращает false - c 28
//в противном случае

// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false
//         }
//     } 
//     return true  
// }
// console.log(isPrime(7))


//===============================  Tatiana Volk 09/30  =================================================

//Вывести приветствие

// function greet (name) {
//     return "Hello " + name + " have a nice day!"
// }
// console.log(greet("Olga,"))