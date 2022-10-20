//1) https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript?filter=all&sort=best_practice&invalids=false
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element 
// is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// function countPositivesSumNegatives(input) {
  
//решение на уроке
//     let pos = 0;
//     let sum = 0;
//     if(input != null && input.length != 0) {
//     for (let i = 0; i < input.length; i++) {
//       if(input[i] > 0) {
//       pos ++; 
//     } 
//       if(input[i] < 0) {
//       sum += input[i]
//     }
   
//   }
//     return [pos, sum]
//   }
//     return [];
    
//   }

//или

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }

//или
// function countPositivesSumNegatives(input) {
//     if (!Array.isArray(input) || !input.length) return [];
//     return input.reduce((arr, n) => {
//       if (n > 0) arr[0]++;
//       if (n < 0) arr[1] += n;
//       return arr;
//     }, [0, 0]);
//   }







//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// const toJadenCase = function (string) {
//     let strJaden = string.split(" ")
//     for (let i = 0; i < strJaden.length; i++) {
//         strJaden[i] = strJaden[i][0].toUpperCase() + strJaden[i].slice[1]
//     }
//     return strJaden.join(" ")
// }
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

// String.prototype.toJadenCase = function () {
 
//     let strJaden = this.split(" ")
//     for (let i = 0; i < strJaden.length; i++) {
//         strJaden[i] = strJaden[i][0].toUpperCase() + strJaden[i].slice[1]
//     }
//     return strJaden.join(" ")
// }

//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

//решение if else
// function saleHotdogs(n){
// if (n < 5) {
//     return n * 100
// }else if(n >= 5 && n < 10) {
//     return n * 95
// }else {
//     return n * 90
// }

//решение с тернальным оператором
// function saleHotdogs(n){
//     return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
//   }



// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

// function isSortedAndHow(array) {
//     if (ascending(array))  {
//       return 'yes, ascending'
//     } else if (descending(array)) {
//       return 'yes, descending'
//     } else {
//       return "no"
//     }
    
//     function ascending(array) {
//       for (let i = 1; i < array.length; i++) {
//         let current = array[i]
//         let previuos = array[i - 1]
//         if (current < previuos) {
//           return false
//         }
//       }
//       return true
//     }
    
//     function descending(array) {
//       for (let i = 1; i < array.length; i++) {
//         let current = array[i]
//         let previuos = array[i - 1]
//         if (current > previuos) {
//           return false
//         }
//       }
//       return true
//    }
//   }




  // https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

//   function squareSum(numbers){
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i] ** 2 
//     }
//       return sum
//     }