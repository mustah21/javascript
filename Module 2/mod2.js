'use script'

/*

//Task 1
function reverseorder(){

  num1 = Number(prompt("Enter your first number"))
  num2 = Number(prompt("Enter your second number"))
  num3 = Number(prompt("Enter your third number"))
  num4 = Number(prompt("Enter your fourth number"))
  num5 = Number(prompt("Enter your fifth number"))

  const numbers = []

  numbers.push(num1)
  numbers.push(num2)
  numbers.push(num3)
  numbers.push(num4)
  numbers.push(num5)

      console.log(numbers[4])
      console.log(numbers[3])
      console.log(numbers[2])
      console.log(numbers[1])
      console.log(numbers[0])


}

reverseorder();



//Task 2

function numofparticipants () {

  const numparticipants = Number(prompt("Enter the number of participants"));

  let participants = []

  for (let i = 0; i < numparticipants; i++) {
    const name = prompt("Enter the number of participants" + (i + 1) + ":");

    if (name) {
      participants.push(name)
    } else {
      document.getElementById('part').innerHTML = 'Invalid input';
      return
    }
  }
    participants.sort()

    let list = "<ol>"
    for (let i = 0; i < participants.length; i++) {
      list += "<li>" + participants[i] + "</li>"
    }

  document.getElementById("part").innerHTML = list;

}

numofparticipants()


//Task 3

function dognames () {

  let dogs = []

  for (i = 0; i < 6; i++) {
    const name = prompt('Enter the names of all your dogs' + (i + 1) + ': ')
    dogs.push(name)
  }
dogs.sort().reverse()

  let unlist = "<ul>"
  for (let i = 0; i < 6; i++) {
    unlist += "<li>" + dogs[i] + "</li>"
  }
  document.getElementById('names').innerHTML = unlist;

}

dognames()



//Task 4

function largestnumber () {

  let numbers = []
  let num

  do {
    num = Number(prompt('Enter a number'))
    if (num !== 0) {
      numbers.push(num)
    }
  }
  while (num !== 0)


  numbers.sort((a, b) => b - a)
  console.log("Largest to smallest:  " + numbers)

}

largestnumber()


//Task 5

function check () {

  let Numbers = [];
  let input;

  do {
    input = Number(prompt('Enter your number'));
    if (Numbers.includes(input)) {
      break;
    }
    else{
      Numbers.push(input);
    }
  }
  while (input !== Numbers[input]);

  Numbers.sort((a, b) => a - b);
  console.log("This number has already been given. Smallest to largest: " + Numbers);

}

check()

 */

//Task 6
function diceroll () {

  let roll
  let dices = []
  let lists = "<ul>"

  do {
    roll = Math.floor(Math.random() * 6) + 1
    if (roll !== 6) {
      dices.push(roll)
    } else {
      break;
    }
  }
  while (roll !== 6)

  for (let i = 0; i < dices.length; i++) {
    lists += "<li>" + dices[i] + "</li>"
  }
    document.getElementById('dices').innerHTML = lists;

}

diceroll()