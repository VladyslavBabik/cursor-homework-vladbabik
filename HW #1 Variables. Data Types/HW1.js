// base
const Bread = 15.678;
const Cheese = 123.965;
const Meat = 90.2345;
const MaxNumber = Math.max(Bread, Cheese, Meat);
const MinNumber = Math.min(Bread, Cheese, Meat);
const Sum = Bread + Cheese + Meat;
const WithoutFractions = Math.floor(Bread) + Math.floor(Cheese) + Math.floor(Meat);
const SumRoundedToHundreds = (Math.round(Bread / 100) + Math.round(Cheese / 100) + Math.round(Meat / 100)) * 100;
const BulianSum = WithoutFractions % 2 == 0;
const Rest = 500 - Sum;
const ArithmeticMean = Math.round(((Bread + Cheese + Meat) / 3) * 100) / 100;
const RandomDiscount = Math.random();
const AmountPay = Math.round((Sum - Sum * RandomDiscount) * 100) / 100;
const Profit = (Sum / 2) - (Sum * RandomDiscount);
console.log("Максимальне число: " + MaxNumber);
console.log("Мінімальне число: " + MinNumber);
console.log("Сума: " + Sum);
console.log("Сума без дробів: " + WithoutFractions);
console.log("Сума заокруглена до сотень: " + SumRoundedToHundreds);
console.log("Число парне: " + BulianSum);
console.log("Решта з 500: " + Rest);
console.log("Середнє арифметичне: " + ArithmeticMean);
console.log("Рандомна знижка: " + RandomDiscount);
console.log("Сума виплати: " + AmountPay);
console.log("Прибуток: " + Profit);

//advanced
document.writeln(`
  Максимальне число: ${MaxNumber} <br/>
  Мінімальне число: ${MinNumber} <br/>
  Сума: ${Sum} <br/>
  Сума без дробів: ${WithoutFractions} <br/>
  Сума заокруглена до сотень: ${SumRoundedToHundreds} <br/>
  Число парне: ${BulianSum} <br/>
  Решта з 500: ${Rest} <br/>
  Середнє арифметичне: ${ArithmeticMean} <br/>
  Рандомна знижка: ${RandomDiscount} <br/>
  Сума виплати: ${AmountPay} <br/>
  Прибуток: ${Profit}`)
