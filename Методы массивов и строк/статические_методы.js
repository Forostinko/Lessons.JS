
//====================    .Array.from()  ====== 
//Предназначен для создания массива на основе какого-то передаваемого значения

// const arr = Array.from("JavaScript")
// console.log(arr)

//передать массив из 20 элементов и наполнить 0
// const arr = Array.from(Array(20).fill(0))
// let n = 10                  // тогда будет вкдючать 10
// const arr = Array.from(Array(20).keys())
// console.log(arr)


// let start = 10
// let finish = 25

// const arr = Array.from(Array(finish - start + 1).fill(start), (el, i) => el + i)
// // const arr = Array.from(Array(finish - start + 1).map(el, i) => el + i)
// console.log(arr)

// //вывести от 0 до 15
// console.log([...Array(11).keys()])



//====================    .Array.of()  ====== 

// const arr = Array.of(10, 15, 3, "Anna", null, NaN)
// console.log(arr)



//====================    .Array.isArray()  ====== вернуть  true/false

// const arr = Array.of(10, 15, 3, "Anna", null, NaN)
// console.log(arr)
// console.log(Array.isArray(arr))



// let arr = Array.of(10, 15, 3, "Anna", null, NaN)
// console.log(arr)
// arr = null      //null можем менять на [] , true
// console.log(Array.isArray(arr))