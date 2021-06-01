// base
let Bread = 15.678;
let Cheese = 123.965;
let Meat = 90.2345;
let MaxNumber = Math.max(Bread, Cheese, Meat);
let MinNumber = Math.min(Bread, Cheese, Meat);
let Sum = Bread + Cheese + Meat;
let WithoutFractions = Math.floor(Bread) + Math.floor(Cheese) + Math.floor(Meat);
let SumRoundedToHundreds = (Math.round(Bread / 100) + Math.round(Cheese / 100) + Math.round(Meat / 100)) * 100;
let BulianSum = WithoutFractions % 2 == 0;
let Rest = 500 - Sum;
let ArithmeticMean = Math.round(((Bread + Cheese + Meat) / 3) * 100) / 100;
let RandomDiscount = Math.random();
let AmountPay = Math.round((Sum - Sum * RandomDiscount) * 100) / 100;
let Profit = (Sum / 2) - (Sum * RandomDiscount);
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
