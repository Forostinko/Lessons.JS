// data: cup, coffee, water, milk, spoon
// water: hot, 200 ml
// spoon: tea spoon
// coffee: ground
// cup: 250 ml
// milk: 20 ml

// Task: make a cup of coffee

// Steps:
// 1. Take a cup
// 2. Put 1 spoon of coffee in it
// 3. Pour water in a cup with coffee
// 4. Pour milk in a cup of coffee
// 5. Stir coffee in a cup with a spoon 

// */


// let task = "Make a cup of coffee"
// let step6 = "1. Take a cup"
// let step7 = "2. Put 1 spoon of coffee in it"
// let step8 = "3. Pour water in a cup with coffee"
// let step9 = "4. Pour milk in a cup of coffee"
// let step10 = "5. Stir coffee in a cup with a spoon"
// let result1 = "Your coffee is ready!"
// document.write(task, "<br>","<br>", step6, "<br>", step7, "<br>", step8, "<br>", step9, "<br>", step10, "<br>", "<br>", result)

//Напишите следующую программу:
//- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
//- Дайте названия вашим видам кофе.
//- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
//- Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
//- Компоненты кофе не влияют на стоимость.
//- Используйте подходящую комбинацию условий if, (else if), else для решения задачи.

//Write the following program:
//- The client must have a choice of two (or three) types of coffee (your choice).
//- Give different names to your types of coffee.
//- Set the price of coffee depending on the size of the cup (small, medium, big).
//- Display the name, then the recipe of the selected coffee (use variables to change the recipe), and its cost.
//- Coffee components do not affect the cost.
//- Use an appropriate combination of if, (else if), else statements to solve your problem

//Сначала присваиваем переменные /declare variables - обьявить переменную
// let cupSize
// let smallCup = "small cup"
// let mediumCup = "medium cup"
// let bigCup = "large cup"
// let water             //дефолдного значения нет, значит обязательно прописываем в else
// let hotWater = "hot water"
// let coldWater = "cold water"
// let price = 5         //5 - мы присвоили дефолдное значение
// let coffeeType 
// let latte = "Latte"
// let capuchino = "Capuchino"

// let icedCoffee = "Iced Coffee"

// Передаем (пересваиваем значение) /define - определить
// coffeeType = icedCoffee           //можем менять
// cupSize = smallCup                //можем менять

// //этот блок кода отвечает за тип кофе

// if (coffeeType == icedCoffee) {   // если
//   water = coldWater
// }
// else {                           //во всех остальных случаях
//   water = hotWater
// }
// if (cupSize == mediumCup) {      //этот блок кода отвечает за цену кофе
//   price *= 1.5                   //*=оператор присваивания
// }
//   //(*(умножаю) на 1.5 и =(присваиваю) это сразу к прайсу. Это называется оператор присваивания.
// //Другой вариант price = price * 1.5 )
// else if (cupSize == bigCup) {    // если
//   price *= 2
// }

// //Если я хочу передать значение какой-то переменной внутрь стринга, 
//то мне нужно использовать вот такой синтексис ${cupSise}. Тогда он будет ее считывать как переменную
// let order = `Make a ${cupSize} of ${coffeeType}:`
// let step1 = `1. Take a ${cupSize}`
// let step2 = "2. Put 1 spoon of coffee in it"
// let step3 = `3. Pour ${water} in a cup with coffee`
// let step4 = "4. Pour milk in a cup of coffee"
// let step5 = "5. Stir coffee in a cup with a spoon"
// let orderPrice = `The order price is ${price}$`
// let result = `Enjoy your coffee!`

// document.write(order, "<br>", "<br>", step1, "<br>", step2, "<br>", step3, "<br>", 
// step4, "<br>", step5, "<br>", "<br>", orderPrice, "<br>", "<br>", result)

//add steps to receipt
// let receipt =[order, step1, step2, step3, step4, step5, orderPrice, result]
// let coffee = ' '
// for (let i = 0; i < receipt.length; i++) {
//     coffee = coffee + receipt[i] + '\n'
// }
// console.log(coffee)


//от 97 до 101 я положила внутрь функции с 84
//функция захватывает глобальную переменную на 96 - let receipt 
// function showCoffee() {
//     let coffee = ''
//     for (let i = 0; i < coffee.length; i++) {
//         coffee = coffee + receipt + receipt[i] + '\n'
//     }
//     console.log(coffee)
// }
// showCoffee()