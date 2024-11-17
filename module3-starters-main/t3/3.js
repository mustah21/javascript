'use strict';
const names = ['John', 'Paul', 'Jones'];


const name = document.getElementById("target")


for (let i = 0; i < names.length; i++){
  const li = document.createElement("li");
  li.textContent = names[i];
  name.appendChild(li);
}


//names.forEach((element) => console.log(element)) //prints to console
