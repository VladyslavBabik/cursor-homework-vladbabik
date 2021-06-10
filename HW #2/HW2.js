let firstNumber = Number(prompt("ВВедіть число N: "));
while (Number.isNaN(firstNumber) || !(Number.isInteger(firstNumber)) || !firstNumber) {
    firstNumber = Number(prompt ("Будьласка спробуйте знову, ви ввели невірне число: "));
}
let lastNumber = Number(prompt("ВВедіть число M: "));
while (Number.isNaN(lastNumber) || !(Number.isInteger(lastNumber)) || !lastNumber) {
    lastNumber = Number(prompt("Будьласка спробуйте знову, ви ввели невірне число: "));
}
const skipEvenNumbers = confirm("Пропускати парні числа?");
let sumFromNToM = 0;
let minNumber = Math.min(firstNumber, lastNumber);
const maxNumber = Math.max(firstNumber, lastNumber);
console.log("Число N: " + firstNumber);
console.log("Число M: " + lastNumber);
console.log("Пропускати парні числа: " + skipEvenNumbers);
for(let i = minNumber; i <= maxNumber; i++){
if (skipEvenNumbers && i % 2 ===0){
continue;
}
sumFromNToM = sumFromNToM + i;
}
  console.log("Сума чисел на проміжку між N та M: " + sumFromNToM);
