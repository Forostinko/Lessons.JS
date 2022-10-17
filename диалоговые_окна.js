//                  УРОК от 09/07
//===========================================================
//                 ДИАЛОГОВЫЕ ОКНА

// Alert выдает какое то сообщение и ничего больше не умеет
//alert("Hello World!");

//prompt 
//let day = prompt("What day is it today?", "Wednsday");
//alert(day);

// confirm  выдает 2 значения: либо true,  либо false, esc сброс false
//let confirmation = confirm("Are you argee?");
//alert(confirmation);

//                       if
//===========================================================
//    statement -  это какое то условие для сравнения

// if(statement){
//   green apple
// }else if (statement){
//   yellow apple
// }else{
//   red apple
// }

//                     ПРИМЕР

// let apple = "green";                      //меняем варианты
// let size = "small"

// if (apple == "green" && size == "big")    //ябдоко должно быть и зеленое и обязательно большим. Программа будет бежать слева на право и искать отрицательный результат. 1у ксловие будет true т.к. green, 2е условие будет false т.к. услоыие small, а у нас big. Дальше будет все false и ничего не остается, как выдать результат 364 строки.                    Условия можем менять.
// {                                    
//   console.log("Green apple");
// } else if (apple == "yellow")              //Яблоки зеленые?
// {       
//  console.log("Yellow apple");              //Желтое?
// } else if (apple == "red") 
// {
//   console.log("Red apple");
// } else{
//   console.log("Any other apple");
// }
