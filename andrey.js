//=======ARRAY  - это массив  =======================

// let arr = [4, 5, 6, 7, 8, 9]

// console.log(arr[2])

// //проверять массив проще циклом

// for(let i = 0; i < arr.length; i++) {
//     console.log (arr[i])
// }

// //чтобы было в строку

// let a = '' 
// a = a + arr[i]
// console.log (a)

// eсли let a =[] то можно через push




// function isArray (a) {
//     return !! a
// }
// console.log (isArray())





// =======НЕ ARRAY=======================

//let a = []    // всегда true

// let a = 0             //false
// let b = ''            //true
// let c = undefined     //true

// console.log (Boolean(a))

// let f = []            //true
// console.log (Boolean(f))

//=======BOOLEAN можно заменить на !==============
//Тоесть  !  переводит в Boolean
//console.log(!(a))

//======WHILE  тот же for, только  а - меняется вручную===========

// let a = 10
// while(a > 10) {
//     console.log(a)
// }

//a--   или   a = a - 1
//=     или   a = a + 1  
//==    не строгое
//===   строгое

// let a = 10
// let b = 10
// let c = '10'

// console.log ( a == b)        //true
// console.log ( a === b)       //true
// console.log ( a === c)       //false
// console.log ( !a == c)       //false


// let a = 5
// if ( a < 10) {
//     console.log ('a < 10')
// } else {
//     console.log ('a > 10')
// }

// или 
// f как ?
// : как else

// a < 10 ? console.log ('a < 10') : console.log ('a > 10')