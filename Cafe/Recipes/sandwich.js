// data: bread, cheese, turkey => sandwich
// bread: cutted
// cheese: cutted
// turkey: cutted

// Make a cold sandwich:
// 1. Take a piece of bread
// 2. Take a piece of cheese 
// 3. Put cheese on bread
// 4. Take a piece of turkey
// 5. Put turkey on top of the cheese


// let bread = bread
// let cheese = cheese
// let turkey = turkey
// const sandwich

// let sandwich = "Make a cold sandwich:"
// let step1 = "Take a piece of bread"
// let step2 = "Take a piece of cheese"
// let step3 = " Put cheese on bread"
// let step4 = "Take a piece of turkey"
// let step5 = "Put turkey on top of the cheese"

// document.write(sandwich,  "<br>", step1, "<br>", step2, "<br>", step3, "<br>", step4, "<br>", step5)

//========variant2 with if statement==========





// {
// sandwich
//   let bread = "whire bread"
//   let cheese = "swiss cheese"
//   let turkey = "smoked turkey"
//   let salmon = "wild salmon" 
//   let pepperoni ="pepperoni"
//   let topping
//   let sandwich

//   let turkeySandwich = "sandwich with turkey"
//   let pepperoniSandwich = "sandwich with pepperoni"
//   let salmonSandwich = "sandwich with salmon"

// //sandwich = "turkeySandwich"
// topping = salmon    //меняем начинку и текс будет меняться

// if (topping == salmon)
// {
//   sandwich = salmonSandwich
// }
// else if ( topping == pepperoni )
// {
//   sandwich == pepperoniSandwich
// }
// else {
//   sandwich == turkeySandwich
// }

// let step1 = `1. Take a piece of ${bread}`
// let step2 = `2. Take a piece of ${cheese}`
// let step3 = "3. Put cheese on bread"
// let step4 = `4. Take a piece of ${topping}`
//  topping

//  let step5 = `5. Put ${topping} on ${cheese}` //
//  let result = `Yuor ${sandwich} is ready!` //

// document.write(`Recipe for ${sandwich}  <br>` + "<br>" + step1 + "<br>" + step2 + "<br>" + step3 +"<br>" + step4 + "<br>" + step5+ "<br>", "<br>" + result, "<br>")



// // усложняем ( добавила на 51 строку)

// if (topping == salmon)
// {
//   sandwich = salmonSandwich
// }
// else if ( topping == pepperoni )
// {
//   sandwich == pepperoniSandwich
// }
// else {
//   sandwich == turkeySandwich
// }




// //document.write перенести сюда
// // если в topping поменяем начинку, то будет 10, потому что в коде написали условие if читаем внизу
// let price = 10
// if ( topping == salmon )
// {
//   document.write( "Order price is: " + price * 1.5)}
// else{document.write( "Order price is: " + price)
//     }


// //Если меняем на 49 строке topping например на pepperoni, то выполнится это условие
// if(topping!= turkey)
// {
//   document.write("<br>"+ "Sorry, we don\'t have that option now!")
// }




// 4. Закрепление- Продумайте код для создания сэндвичей с 3-мя начинками и выставите цену
    //  в зависимости от вида начинки.
    //  Используйте while and do.. while loops

// let size = ["regular", "large"]
// let sandwich = ["turkey", "salmon", "peperroni"]
// let price = [4, 6]

//   for (let i = 0; i < sandwich.length; i++) {
    
//     for(let j = 0; j < size.length; j++) {     //выполняется каждый раз заново когда выполняется внешний цикл

//         for (let k = 0; k < price.length; k++)

//     console.log (size[j],sandwich[i], price[k])
//     }
//   }


//HW - 8  (видео HW #8)
//Создайте объект,
//где будет храниться информация по сэндвичу и выведите ее в консоль( начинка, цена, хлеб, сыр …). 
//Подумайте, возможно ли хранить данные на все виды сэндвичей в одном объекте или в разных, 
//что более удобно в дальнейшем использовании.

//Sandwich
// let brad = "black bread"
// let cheese = "swiss cheese"
// let turkey = "smoke turkey"
// let salmon = "wild salmon"
// let pepperoni = "pepperoni"


// //variant 1
// const turkeySandwich = {
//     name: "sandwich with turkey",
//     bread: "black",
//     cheese: "swiss",
//     topping: "turkey",
// }
// const pepperoniSandwich = {
//     name: "sandwich with pepperoni",
//     bread: "white",
//     cheese: "mozarella",
//     topping: "pepperoni",
// }
// const salmonSandwich = {
//     name: "sandwich with salmon",
//     bread: "whole weat",
//     cheese: "cheddar",
//     topping: "salmon",
// }
// const sandwichNames = {
//     salmon: "sandwich with salmon",
//     turkey: "sandwich with turkey",
//     pepperoni: "sandwich with pepperoni",
// }

// function showSandwichIngridients(topping) {
//     console.log(`Ingridients for your ${sandwichNames[topping]}\n`)
//     if (topping == 'salmon') {
//         for (let el in salmonSandwich) {
//             if (el == "name") continue
//             console.log(el + " : " + salmonSandwich[el])
//         }
//     }
//     else if (topping == 'pepperoni') {
//         for (let el in pepperoniSandwich) {
//             if (el == "name") continue
//             console.log(el + " : " + pepperoniSandwich[el])
//         }
//     }
//     if (topping == 'turkey') {
//         for (let el in turkeySandwich) {
//             if (el == "name") continue
//             console.log(el + " : " + turkeySandwich[el])
//         }
//     }   
// }
// console.log(showSandwichIngridients("salmon"))

// let price = 10

// function setPrice(topping) {
//     if (topping == salmon) {console.log("Order prise is: $" + price * 1.5) }
//         else {console.log("Order price is: $" + price) }
//         }
//     setPrice(salmon)
