//             SWITCH - УСЛОВНЫЕ ВЫРАЖЕНИЯ

// switch(expression){
//   case x:
//     //code block
//     break;
//   case y:
//     //code block
//     break;
//   default:
//     //code block
// }

//   var можно заменить на  let 
// var day = 3
// switch(day){
//   case 1:
//     document.write("Monday");
//     break;
//   case 2:
//      document.write("Thuesday");
//     break;
//   case 3:
//      document.write("Wednesday");  
//     break;
//   default:
//     document.write("Another day");  
// }



// // вариант без break, но код может сломаться
// let num = 4
// switch(num){
//   case 1:
//     document.write("One<br>");
//     case 2:
//     document.write("Two<br>");
//     case 3:
//     document.write("Three<br>");
//     case 4:
//     document.write("Four<br>");
//     case 5:
//     document.write("Five<br>");
//     case 6:
//     document.write("Six<br>");
//     case 7:
//     document.write("Seven<br>");
//     case 8:
//     document.write("Eight<br>");
//     case 9:
//     document.write("Nine<br>");
//     case 10:
//     document.write("Ten<br>");
//     break;
//        default:
//      document.write("Unknow");
// }



//                           Switch

 // let apple = "green";
// let size = "big";

// switch (apple){
//   case "green":
//     break;
//     console.log("Green apple");
//     case "yellow":
//     break;
//     console.log("Yellow apple");
//     case "red":
//     break;
//     console.log("Red apple");
//     break;
//     defult:
//     console.log("Any other apple");    
// }




//         на входе хотим сделать месяц а на выходе сезон
//                        1 вариант:
// let month = "April";

// switch (month){
//   case "March":
//   case "April":
//   case "May":
//     console.log("Spring");
//     break;
//     case("J" + "une"):
//     console.log("Summer");
//     break;
//     defult:
//     console.log(`Winter or Fall`);    
// }

//                        2 вариант:

// let month = "July";

// switch (true){
//   case "March":
//   case "April":
//   case "May":
//     console.log("Spring");
//     break;
//     case(month == "June" || month == "July" || month == "August" ):
//     console.log("Summer");
//     break;
//     defult:
//     console.log(`Winter or Fall`);    
// }

