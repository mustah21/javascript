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



//Task 6


function squareroot() {
  const answer = confirm("Should I calculate the square root of the number")

  if (answer === true) {
    const num = Number(prompt("Please enter a number"))
    if (num > 0) {
      const result = Math.sqrt(num)
      document.getElementById("root").innerHTML = "The square root is " + result;
    } else {
      document.getElementById("root").innerHTML = "Your entered number cannot be negative"
    }
  } else if (answer === false) {
  document.getElementById("root").innerHTML = "square root not calculated"

  }
}

squareroot();

*/

//task 7

function rolldice(){

  const numrolls = Number(prompt("Enter a number"));

  let sum = 0;

  for (let i = 0; i < numrolls; i++){
const roll = Math.floor(Math.random() * 6) + 1
    sum += roll;
  }
  document.getElementById("dice").innerHTML = "The sum of the dice rolls is: " + sum;

}

rolldice()