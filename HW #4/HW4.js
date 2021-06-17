const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
//1
function pairOfStudents(){
  const studentsInPairs = [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];
  return studentsInPairs;
}
const pairsOfNames = pairOfStudents();
console.log(pairsOfNames);
//2
function studentsAndThemes(){
    const projectTopics = [];
    for (let i = 0; i < pairsOfNames.length; i++)
        projectTopics[i] = [pairsOfNames[i].join(' і '), themes[i]];
    return projectTopics;
}
const arrayOfTopics = studentsAndThemes();
console.log(arrayOfTopics);
//3
function rating(){
    const studentsMarks = [];
    for (let i = 0; i < students.length; i++)
        studentsMarks[i] = [students[i], marks[i]];
    return studentsMarks;
}
const ratingOfStudents = rating();
console.log(ratingOfStudents);
//4
function randomMarks(){
    let studentsAndThemes = JSON.parse(JSON.stringify(arrayOfTopics));
    for (let i = 0; i < studentsAndThemes.length; i++){
        let randomNumber = Math.floor(Math.random() * (6 - 1)) + 1;
        studentsAndThemes[i].push(randomNumber);
    }
    return studentsAndThemes;
}
const mark = randomMarks();
console.log(mark);
