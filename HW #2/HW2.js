const firstNumber = prompt("Введіть число N:");
const lastNumber = prompt("Введіть число M:");
let firstNumberFix = parseInt(firstNumber);
const lastNumberFix = parseInt(lastNumber);
const firstNumberEven =  Number.isInteger(firstNumberFix);
const lastNumberEven = Number.isInteger(lastNumberFix);
const skipEvenNumbers = confirm("Пропускати парні числа?");
let sumFromNToM = 0;
console.log("Число N: " + firstNumber);
console.log("Число M: " + lastNumber);
console.log("Число N парне: " + firstNumberEven);
console.log("Число M парне: " + lastNumberEven);
console.log("Пропускати парні числа: " + skipEvenNumbers);
  for (sumFromNToM; firstNumberFix <= lastNumberFix; firstNumberFix++)
  {
    if(skipEvenNumbers)
    {
      if(firstNumberFix % 2 == 0) continue
      {
        sumFromNToM = sumFromNToM + firstNumberFix;
      }
    }
else
  {
sumFromNToM = sumFromNToM + firstNumberFix;
  }
 }
  console.log("Сума чисел на проміжку між N та M: " + sumFromNToM);
