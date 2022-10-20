//============  Math.min()   Math.max()  ==================

// let arr = [28, 16, 37, 21, 17, 27]

// let min = Math.min(...arr)
// let newMin = Math.min(28, 16, 37, 21, 17, 27)
// let max = Math.max(...arr)

// console.log(min)
// console.log(newMin)
// console.log(max)


//============   Math.pow()  ================== возведение в степень
//Math.pow(num, power)

// let arr = [28, 16, 37, 21, 17, 27]
// let min = Math.min(...arr)
// let newMin = Math.min(28, 16, 37, 21, 17, 27)
// let max = Math.max(...arr)


// console.log(Math.pow(2,4))
// console.log(2 ** 4)



//============   Math.sqrt()  ================== в квадрат

// let arr = [28, 16, 37, 21, 17, 27]
// let min = Math.min(...arr)
// let newMin = Math.min(28, 16, 37, 21, 17, 27)
// let max = Math.max(...arr)


// console.log(Math.sqrt(25))
// console.log(25 ** (1/2))       //или через возведение в степень


//-----------------------------------------------------------------------------------------------------
//       Math.round(), Math.floor(), Math.ceil(), Math.trunc()   -    отвечает за округление
//----------------------------------------------------------------------------------------------------


// =====  Math.floor()  =======  округление происходит в меньшую сторону к целому числу

// //let num = 0.564
// let num = 6.764
// console.log(Math.floor(num))




// =====  Math.ceil()   ====== округление происходит к большему целому числу

// let num = 6.764
// //let num = -0.764
// console.log(Math.ceil(num))



// =====  Math.round()   ====== округление происходит к большему целому числу по закону математики

// //let num = 6.764
// let num = -0.764
// console.log(Math.round(num))



// =====  Math.trunc()   ======  отбрасывает дробную часть

// let num = -9.764
// console.log(Math.trunc(num))



// =====  .toFixed()   ======  используется часто
//.toFix(NUM)  
// число возвращается в виде строки 
// и мне нужно певести в число  (Number(num.toFixed(5))) либо (+num.toFixed(5))

// let num = -9.7646789956
// console.log(num.toFixed(5))




// =====  Math.sign()   ====== 

// Math.sign(num)

// let num = -9.7646789956
// console.log(Math.sign(num))



// =====  isFinite()   ======     Проверить конечное число

// возвращает нам true - если конечное число
// возвращает нам false - если infinity и NaN или -infinity

// let sum = 0
// console.log(isFinite(-545/"5a"))  //будет false - потому что система не понимает число и строка


//console.log( isFinite(545/0))   // infinity(бесконечность)  true




// =====  Number.isFinite()   ====== 

// let sum = 0
// console.log(Number.isFinite(-545/"5"))



// =====  parseInt()   ======

// let = "1000.546px"
// console.log(parseInt(str))

// let = "4A" 
// console.log(parseInt(num, 16))


// =====  parseFloat()   ====== если дробное число

// let = "1000.546px"
// console.log(parseFloat(str))