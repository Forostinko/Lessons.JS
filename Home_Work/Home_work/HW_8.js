// ==========     Easy

//1 -  https://www.codewars.com/kata/514a7ac1a33775cbb500001e

// var results = {sanity: 'Hello'};
// console.log(results)


//2 - https://www.codewars.com/kata/571f1eb77e8954a812000837

// function animal(obj){
//     //   {name:"dog",legs:4,color:"white"}
//     return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
//   }


//3 - https://www.codewars.com/kata/527b3cd0492b6b15250060af/solutions/javascript

// items = []
// items.push({a: "b", c: "d"})


//4 - https://www.codewars.com/kata/521cd52e790405a74800032c

// function wrap(value) {
//     return {
//         value: value
//     }
// }



//5 - https://www.codewars.com/kata/56a29b237e9e997ff2000048

// var rooms = [{
//     name: "livind room",
//     description: "big room",
//     completed: "yes"
//   },
//       {
//       name: "master bedroom",
//     description: "main room",
//     completed: "no"
//       },
    
//     {
//     name: "master bathroom",
//     description: "main bathroom",
//     completed: "yes"
//     }]

// // or 
// var rooms = {
//     room1: {
//         name: "save your life",
//         description: "you should save your life",
//         completed: true,
//     },
//     room2: {
//         name: "find a key",
//         description: "you should find a key",
//         completed: true,
//     },
//     room2: {
//         name: "jump on rock",
//         description: "you should jump on rock",
//         completed: true,
//     },
// }    
    


//6 - https://www.codewars.com/kata/56d8ae9237123036d3001b54

// var rooms = {
//     first: {
//       description: 'This is the first room',
//       items: {
//         chair: 'The old chair looks comfortable',
//         lamp: 'This lamp looks ancient'
//       }
//     },
//     second: {
//       description: 'This is the second room',
//       items: {
//         couch: 'This couch looks like it would hurt your back',
//         table: 'On the table there is an unopened bottle of water'
//       }
//     }
//   }



//7 - https://www.codewars.com/kata/5722b3f0bd5583cf44001000

// function giveMeFive(obj){
//     let arr =[]
//     for (let key in obj){
//       if (key.length == 5) arr.push(key)
//       if (obj[key].length == 5) arr.push(obj[key])
//     }
//     return arr
//   }



// ===========     Middle

//8 - https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

// function numObj(s){
//    // let str = s.toString()
//     let arr = []
//     for (let el in s) {    //пробегаемся по нашему array
//       let obj = {}         //создали новый обьект и новый arr c 113
//       obj[s[el]] = String.fromCharCode(s[el])   //создаем ключ и после = value(вытаскивает код)
//       arr.push(obj)        // в новый массив, он состоит из обьекта
//     }
//     return arr
//   }

// метод .fromCharCode - чтобы найти код. Он работает со стрингами



//9 - https://www.codewars.com/kata/5827acd5f524dd029d0005a4

// list - это arr как на примере в задаче
// var list1 = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
//   ];
//мы не знаем сколько будет эл. внутри arr, поэтому нам нужно пробежаться по всему массиву - с 137
//для упрощения помещаю list[i] - с 139
//list[i] - это как раз таки будет наш обект с 130
//говорю: если в этом обьекте el.language - ключ language == "Ruby"    - c143
//тогда верни true
//в остальных случаях верни false

// function isRubyComing(list) {
//     for (let i = 0; i < list.length; i++) {
//       let el = list[i]
//       if(el.language == "Ruby") {
//         return true
//       }
//     }
//     return false
//   }



//10 - https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

// function greetDevelopers(list) {

//     let arr = []
//     for (let el in list) {
//       let obj = list[el]
//       obj['greeting'] = `Hi ${obj.firstName`}, what do you like the most about ${obj.language}?`
//       arr.push(obj)       //пишу по новой-возвращает
//     }
//     return arr
//   }



//12 - https://www.codewars.com/kata/57d001b405c186ccb6000304/train/javascript

// function iTri(s) {
//   //all distance = 2.4 + 26.2  //140.6
//     let obj = {}
//     let num = 0 
//       if (s == 0) {
//       return 'Starting Line... Good Luck!'
//     }
//     else if (s <= 2.4) {
//       num = 140.6 - s
//       obj['Swim'] = `${num.toFixed(2)} to go!`
//       return obj
//     }
//     else if (s <= 114.4) {
//       num = 140.6 - s
//       obj['Bike'] = `${num.toFixed(2)} to go!`
//       return obj
//     }
//     else if (s < 140.6) {
//       num = 140.6 - s
//       obj['Run'] = `${num.toFixed(2)} to go!`
//       return obj
//     }
//     else return "You're done! Stop running!" 
//   }


//13 - https://www.codewars.com/kata/5836dce6966f8d1d43000007/train/javascript

// function redarr(arr) {
// let obj = {}
// let newArr = arr.sort()           //отcортировала по алфавиту
// newArr = [...new Set(newArr)]    //убрала дубликаты
// for(let i in newArr) {           //присвоила каждому ел. номерок
//   obj[i] = newArr[i]             //номер = valio
// }
// return obj
// }


//14 - https://www.codewars.com/kata/599db0a227ca9f294b0000c8/train/javascript

// function testResult(array) {
//   let obj = {}
//   let arr2 = []
//   let sum = 0
//   let h = 0
//   let a = 0
//   let l = 0
//   let count = 0
//   for (let i in array) {
//     sum += array[i]
//     count++                    //counts how many alements in array
//     if (array[i] >= 9) {
//       hh++
//     }
//     else if (array[i] === 7 || array[i] == 8) {
//       a++
//     }
//     else if (array[i] < 6) {
//       l++
//     }
//     obj['h'] = h
//     obj['a'] = a
//     obj['l'] = l

//     let average = (sum / count).toFixed(3)
    
    // arr2.push(parseFloat(average), obj)
    // if (a == 0 && l == 0) arr2.push('They did well')
    
    // return arr2
    
    // }


//15 - https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

    // function boredom(staff){
    //   let happiness = ''
    //   let score = 0
    //   for (let key in staff) {
    //     let dep = staff[key]
    //     if (dep == 'accounts') score += 1
    //     if (dep == 'finance') score += 2
    //     if (dep == 'canteen') score += 10
    //     if (dep == 'regulation') score += 3
    //     if (dep == 'trading') score += 6
    //     if (dep == 'change') score += 6
    //     if (dep == 'IS') score += 8
    //     if (dep == 'retail') score += 5
    //     if (dep == 'cleaning') score += 4
    //     if (dep == 'pissing about') score += 25
    //   }
    //   if (score <= 80) {
    //     happiness = 'kill me now'
    //   }
    //   else if (score < 100 && score > 80) {
    //     happiness = 'i can handle this'
    //   }
    //    else if (score >= 100 ) {
    //     happiness = 'party time!!'
    //      }
    //   return happiness
    //   }
      
    // }