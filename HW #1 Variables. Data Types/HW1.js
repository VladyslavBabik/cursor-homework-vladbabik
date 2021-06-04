// base
const breadPrice = 15.678;
const cheesePrice = 123.965;
const meatPrice = 90.2345;
const cash = 500;
const maxNumber = Math.max(breadPrice, cheesePrice, meatPrice);
const minNumber = Math.min(breadPrice, cheesePrice, meatPrice);
const sumPrice = breadPrice + cheesePrice + meatPrice;
const withoutFractions = Math.floor(breadPrice) + Math.floor(cheesePrice) + Math.floor(meatPrice);
const sumRoundedToHundreds = (Math.round(breadPrice / 100) + Math.round(cheesePrice / 100) + Math.round(meatPrice / 100)) * 100;
const bulianSum = withoutFractions % 2 == 0;
const restCash = cash - sumPrice;
const arithmeticMean = Math.round(((breadPrice + cheesePrice + meatPrice) / 3) * 100) / 100;
const randomDiscount = Math.random();
const randomDiscountFix = Math.round(randomDiscount * 10000) / 100;
const amountPay = Math.round((sumPrice - sumPrice * randomDiscount) * 100) / 100;
const profit = Math.round(((sumPrice / 2) - (sumPrice * randomDiscount)) * 100) / 100;
console.log("Максимальне число: " + maxNumber);
console.log("Мінімальне число: " + minNumber);
console.log("Сума: " + sumPrice);
console.log("Сума без дробів: " + withoutFractions);
console.log("Сума заокруглена до сотень: " + sumRoundedToHundreds);
console.log("Число парне: " + bulianSum);
console.log("Решта з 500: " + restCash);
console.log("Середнє арифметичне: " + arithmeticMean);
console.log("Рандомна знижка: " + randomDiscountFix);
console.log("Сума виплати: " + amountPay);
console.log("Прибуток: " + profit);

//advanced
document.writeln(`
  Максимальне число: ${maxNumber} <br/>
  Мінімальне число: ${minNumber} <br/>
  Сума: ${sumPrice} <br/>
  Сума без дробів: ${withoutFractions} <br/>
  Сума заокруглена до сотень: ${sumRoundedToHundreds} <br/>
  Число парне: ${bulianSum} <br/>
  Решта з 500: ${restCash} <br/>
  Середнє арифметичне: ${arithmeticMean} <br/>
  Рандомна знижка: ${randomDiscountFix} <br/>
  Сума виплати: ${amountPay} <br/>
  Прибуток: ${profit}`)
