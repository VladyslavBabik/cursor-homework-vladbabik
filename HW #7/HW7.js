const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//1
function getMyTaxes(salary) {
const countryTax = this.tax * salary;
return countryTax;
}
console.log(`Сума податку, яку заплатить ІТ-спеціаліст: `, getMyTaxes.call(ukraine, 2000))
//2
function getMiddleTaxes() {
const averageTax = this.tax * this.middleSalary;
return averageTax;
}
console.log(`Середня сума податку ІТ-спеціаліста: `, getMiddleTaxes.call(ukraine))
//3
function getTotalTaxes() {
const amountOfTaxes = this.tax * this.middleSalary * this.vacancies;
return amountOfTaxes;
}
console.log(`Сума податків ІТ-спеціалістів в країні: `, getTotalTaxes.call(ukraine))
//4
function getMySalary(country){
setInterval(() => {
  const salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
  const taxes = this.tax * salary;
  const profit = salary - taxes;
  const newObj = {
    salary: salary,
    taxes: taxes,
    profit: profit,
  }
  console.log(newObj);
 }, 10000);
}
console.log(`Об'єкт виду(зарплата, податок, чистий прибуток):`);
getMySalary.call(ukraine)
