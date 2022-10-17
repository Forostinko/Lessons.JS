//Напишите следующую программу:

// - У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.


// let size, price, coffee, ind = 3;
// // you order index latte = 1 black =2 irich = 3
// coffee = "Black"; //можем менять Lattee, Irish...
// size = "Medium";  // можем менять Small, Big...

// if (coffee === "Black"){
//   ind = 2;
// }else if (coffee === "Latte") {
//   ind = 1; 
// }
// if (size === "Small"){
//   price = ind *2.5;
//  document.write(`You order ${coffee} coffee ${size}. Total price is: $${price}`);
// }
// else if (size === "Medium"){
//   price = ind * 5;
//  document.write(`You order ${coffee} coffee ${size}. Total price is: $${price}`);
// }else{
//   price = ind * 10;
//  document.write(`You order ${coffe} coffee ${size}. Total price is: $${price}`);
// }


// // 1. Выведете с помощью for цикла рецепт всех видов кофе или цену на все размеры стаканчиков,
// // идеально и то, и другое.

// let size = ["small", "medium", "large"]
// let coffee = ["black", "latte", "irish"]
//      for (let i = 0; i < coffee.length; i++) {
    
//      for(let j = 0; j < size.length; j++) {      //выполняется каждый раз заново 
//                                                 //когда выполняется внешний цикл

// console.log (size[j],coffee[i])
//     }
//  }



// Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

// function guest (name) {
//     return "Hello " + name + " Yuor cooffe is ready!"
// }
// console.log(guest("Olga,"))