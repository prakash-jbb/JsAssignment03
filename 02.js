const students = {
    Name: "Prakash Jbb",
    Age: 18,
    Grade: "B"
}
console.log(students)

function updateStudentData(value) {
    students['Grade'] = value;
}

updateStudentData("A++");
console.log(students)