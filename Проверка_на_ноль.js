//c4 проверяет на ноль

// function countPositivesSumNegatives(input) {
//     if(!input || input.length == 0) return [];
  
//     var positiveCount = input.reduce((sum, item) => item > 0 ? ++sum : sum, 0);
//     var negativeSum = input.reduce((sum, item) => item < 0 ? sum + item : sum, 0);
    
//     return [positiveCount, negativeSum];
//   }