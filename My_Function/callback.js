//Callback - фнекция которая передается в другую функцию в качестве аргумента
//и которая потом вызывается по завершению какого-либо действия
//эта функция дает нам гибкость и удобство применения

// const arr1 = [7, 4, 5, 6, 8];

// function f1() {
//     arr1[3] = arr1[3] * 2;
//     console.log(arr1);
// }
// f1()

//добавляем callback в нашу функцию выше

const arr1 = [7, 4, 5, 6, 8];

function f1() {
    arr1[3] = arr1[3] * 2;
    console.log(arr1);
}
 
function callback(arr1) {
    let out = '';
    for (let i = 0; i < arr1.length; i++) {
        out += arr1[i] + '*';
    }
    console.log(out);
}

f1(callback)
//console.log(callback)
// спросить почему не появляется * между числами
//[ 7, * 4, * 5, * 12, * 8 ]

// let arr = [1,2,3,4,5,6]
// let arr2 = []
// for(let i=0;i<arr.length;i++) {
//     arr2.push(arr[i]);
//     arr2.push('*')
// }
// console.log(arr2)




//Пример: функция возводит в квадрат каждый элемент
// const arr1 = [7, 4, 5, 6, 8];
// function squard(item) {
//     return item ** 2;
// }
// //const arr2 = arr1.map(squard);           //применяется имя функции
// const arr2 = arr1.map(item => item ** 2);  //анонимная стрелочная функция
// console.log(arr2);

