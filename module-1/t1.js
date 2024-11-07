'use strict';


/*
//Task1
console.log('I am printing to this console')

//Task2
let name = prompt('Please enter your name')
console.log('Hello ' + name)



//Task3
const num1 = Number(prompt('Please enter an integer'))
const num2 = Number(prompt('Please enter your second number'))
const num3 = Number(prompt('Please enter your third integer'))

console.log((num1 + num2 + num3))
console.log(num1 * num2 * num3)
console.log((num1 + num2 + num3) / 3)



//Task4


function club() {
            let name = document.getElementById('studentName').value;
  let house =  (Math.floor(Math.random() * 4));

console.log(house); //added this to prove my code works


if (house === 0) {
  console.log(name + "you are in Gryffindor");
}
else if (house === 1) {
  console.log(name + "you are in Slytherin");
}

else if (house === 2) {
  console.log(name + "you are in Hufflepuff");
}
else {
  console.log(name + "you are in Ravenclaw");
}

}

 */


//Task 5

function leapyear() {
  let year = document.getElementById('year').value;

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
console.log(year + " is a leap year");
  }
else{
  console.log(year + " is NOT a leap year");
  }

}