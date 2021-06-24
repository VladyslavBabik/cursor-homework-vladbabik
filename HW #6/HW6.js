const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
//1
function getSubjects(student){
  let newArr = Object.keys(student.subjects);
  newArr = newArr.map((word) => {return word.charAt(0).toUpperCase() + word.slice(1).replaceAll("_", " ")});
  return newArr;
}
console.log(`Список предметів: `, getSubjects(students[0]));
//2
function getAverageMark(student){
  const mark = Object.values(student.subjects).flat();
  let sum = 0;
  for (let i in mark){
    sum += mark[i];
  }
  const result = Math.round(((sum) / mark.length) * 100) / 100;
  return result;
};
console.log(`Середня оцінка: `, getAverageMark(students[0]));
//3
function getStudentInfo(student){
	const students = {
		course: student.course,
		name: student.name,
		mark: getAverageMark(student),
	};
	return students;
}
console.log(`Курс, ім'я та середня оцінка: `, getStudentInfo(students[0]));
//4
function  getStudentsNames(students){
    const studentsName = students.map((student) => {return student.name})
    return studentsName.sort();
}
console.log(`Імена в алфавітному порядку: `, getStudentsNames(students));
//5
function getBestStudent(students){
  let mark = 0;
  let student;
  for (let i = 0; i < students.length; i++){
    if (mark < getAverageMark(students[i])){
      mark = getAverageMark(students[i]);
      student = students[i].name;
    }}
  return student;
};
console.log(`Кращий студент: `, getBestStudent(students));
//6
function calculateWordLetters(text){
  let newArr = text.toLowerCase().split('');
  let newObj = {};
    for (i = 0; i < newArr.length; i++){
        if (newObj[newArr[i]]){
            newObj[newArr[i]] = newObj[newArr[i]] + 1;
        } else {newObj[newArr[i]] = 1}
        }
    return newObj;
}
console.log(`Об'єкт вигляду (літера: кількість повторень): `, calculateWordLetters(`Students`));
