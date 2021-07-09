//1
const getRandomArray = (length,min,max) => {
return Array.from({length: length},() =>  Math.floor( Math.random() * (max - min) + min));
    }
console.log(`Масив рандомних чисел: `, getRandomArray(15,1,100));
//3
const getAverage = (...numbers) => {
return Array.from(numbers).filter(number => Number.isInteger(number)).reduce((accumulatedValue, number) => accumulatedValue + number, 0) / Array.from(numbers).filter(number => Number.isInteger(number)).length
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
    return numbers.filter(number => number % 2 != 0)
}
console.log(`Масив без парних чисел: `, filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 3, 2))
//6
const countPositiveNumbers = (...numbers) => {
    return numbers.filter(number => number > 0).length
}
console.log(`Кількість чисел більше 0: `, countPositiveNumbers(1, -2, 3, -4, -5, 6))
//7
const getDividedByFive = (...numbers) => {
    return numbers.filter(number => number % 5 === 0)
}
console.log(`Елементи масиву, що діляться націло на 5: `, getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
//9
const divideByThree = (word) => {
  const newArr = [];
  while(word !== '') {
    newArr.push(word.toLowerCase().slice(0, 3));
    word = word.slice(3);}
  return newArr;
}
console.log('Слова розбиті на умовні 3 склади по 3 букви: ', divideByThree("Commander"))
