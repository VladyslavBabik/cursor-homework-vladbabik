//1
class Student{
  constructor(university, course, fullName){
  this.university = university;
  this.course = course;
  this.fullName = fullName;
  this.marks = [5, 4, 4, 5];
  this.ban = false;
}
//2
getInfo = function(university, course, fullName){
  return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
}
//3
 get getMarks(){
   if(this.ban){return null}
    return this.marks;
  }
//4
  set setMarks(mark){
    if(this.ban){return null}
    return this.marks.push(mark)
  }
//5
  get getAverageMark(){
    if(this.ban){return null}
        const averageMark = this.marks.reduce((accumulatedValue, number) => accumulatedValue + number, 0)
        return averageMark / this.marks.length
    }
//6
  get dismiss(){
    return this.ban = true;
  }
//7
  get recover(){
    return this.ban = false;
  }
}
const vlad = new Student("Національного університету Львівська Політехніка", 5, "Владислав Бабік")
console.log(`Сукупна інформація про студента: `, vlad.getInfo());
console.log(`Масив оцінок: `, vlad.getMarks)
vlad.setMarks = 5; //пуш оцінки
console.log(`Додавання оцінки до масиву: `, vlad.getMarks)
console.log(`Середнє арифметичне оцінок: `, vlad.getAverageMark)
vlad.dismiss; //заборона на додавання оцінок
vlad.setMarks = 4; //спроба додати оцінку
console.log(`Масив оцінок: `, vlad.getMarks)
vlad.recover; //відновлення можливості додавати оцінки
vlad.setMarks = 4; //додавання оцінки
console.log(`Масив оцінок: `, vlad.getMarks)
