//1
const getRandomArray = (length,min,max) => {
const number = () =>  Math.floor( Math.random() * (max - min) + min);
const randomNumber = [];
while(length-- > 0) {randomNumber.push(number())}
return randomNumber;
    }
console.log(`Масив рандомних чисел: `, getRandomArray(15,1,100));
//3
const getAverage = (...numbers) => {
  let sum = 0
  let newArr = numbers.filter(number => Number.isInteger(number))
  sum = newArr.reduce((accumulatedValue, number) => accumulatedValue + number, 0)
  return sum / newArr.length
}
console.log(`Середнє арифметичне: `, getAverage(6, 2, 55, 11, 78, 2, 55, 16.5, 77, 57, 87, 23, 2, 56, 3, 2))
//4
const getMedian = (...numbers) => {
  let medianNumber;
    const newArr = numbers.filter(number => Number.isInteger(number)).sort((a, b) => a - b);
    if (newArr.length % 2 === 0) {
      medianNumber = (newArr[newArr.length / 2 - 1] + newArr[newArr.length / 2]) / 2;
    } else {medianNumber = newArr[Math.floor(newArr.length / 2)]}
    return medianNumber;
}
console.log(`Медіана чисел: `, getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//5
const filterEvenNumbers = (...numbers) => {
    const number = numbers.filter(number => number % 2 != 0)
    return number
}
console.log(`Масив без парних чисел: `, filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 3, 2))
//6
const countPositiveNumbers = (...numbers) => {
    const number = numbers.filter(number => number > 0)
    return number.length
}
console.log(`Кількість чисел більше 0: `, countPositiveNumbers(1, -2, 3, -4, -5, 6))
//7
const getDividedByFive = (...numbers) => {
    const newArr = numbers.filter(number => number % 5 === 0)
    return newArr;
}
console.log(`Елементи масиву, що діляться нааціло на 5: `, getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
//9
const divideByThree = (word) => {
  const newArr = [];
  while(word !== '') {
    newArr.push(word.toLowerCase().slice(0, 3));
    word = word.slice(3);}
  return newArr;
}
console.log('Слова розбиті на умовні 3 склади по 3 букви: ', divideByThree("Commander"))
