function getMaxDigit(number){
  if(number == 0){ return 0;}
  else{
    return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
  }
}
console.log(`1. Найбільше число: ${getMaxDigit(8230482840248284)}`);

function mathPow(number, degree){
  let growingDegree = 1;
  let sum = 1;
  for(number, degree; growingDegree <= degree; growingDegree++) {
    sum = sum * number;
  }
  return sum;
}
console.log(`2. Число в степені: ${mathPow(3, 8)}`);

function fixName(name){
  let newName = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
  return newName;
}
console.log(`3. Ім'я: ${fixName("vlAd")}`);

function tax(salary){
  let salaryWithoutTax = salary * 0.805;
  return salaryWithoutTax;
}
console.log(`4. ЗП без податку: ${tax(1000)}`);

function getRandomNumber(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}
console.log(`5. Рандомне число: ${getRandomNumber(10, 1000)}`);

function countLetter(letter, word){
  let letterIndex = 0;
  let sumOfLetters = 0;
  for(letter, word, letterIndex, sumOfLetters; letterIndex < word.length; letterIndex++){
    if(word.toLowerCase()[letterIndex] === letter) sumOfLetters++;
  }
return sumOfLetters;
}
console.log(`6. Буква зустрічається у тексті (разів): ${countLetter("п", "Паралелепіпед")}`);

function convertCurrency(sum){
let convertedSum;
  while (!(sum.includes("$")) && !(sum.includes("UAH"))){
  convertedSum = "Помилка, вкажіть коректне значення: UAH або $";
  return convertedSum;
}
  if (sum.includes("$")){
convertedSum = (sum.match(/\d+/)) * 27;
  }
  else if (sum.includes("UAH")){
convertedSum = (sum.match(/\d+/)) / 27;
}
return convertedSum;
}
console.log(`7. Конвертація: ${convertCurrency("1000UAH")}`);

function getRandomPassword(number = 8){
  let randomPassword = Math.trunc(Math.random() * Math.pow(10, number));
  return randomPassword;
}
console.log(`8. Пароль: ${getRandomPassword(6)}`);

function deleteLetters(text, letter){
  let deleteLeter = text.split(letter).join('');
  return deleteLeter;
}
console.log(`9. Видалення букв: ${deleteLetters("blablabla", "a")}`);

function isPalyndrom(text){
text = text.toLowerCase().split(' ').join('');
return text === (text.split('').reverse().join(''));
}
console.log(`10. Слово паліндром: ${isPalyndrom("Я несу гусеня")}`);

function deleteDuplicateLetter(text){
  let newtext = "";
  for (let i = 0; i < text.length; i++) {
    if (text.toLowerCase().indexOf(text[i]) === text.lastIndexOf(text[i].toLowerCase())){
      newtext = newtext + text[i];
    }}
return newtext;
};
console.log(`11. Текст без повторюваних букв: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);
