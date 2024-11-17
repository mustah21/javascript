'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];




const student = document.getElementById("target")

for (let i = 0; i < students.length; i++) {

  const school = document.createElement("option")
  school.value = students[i].id
  school.textContent = students[i].name;
  student.appendChild(school);

}