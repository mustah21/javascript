//Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
//There are two input fields where user enters numbers.
//Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
//Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
//Show the result in <p id="result"> when the button is clicked.

const numone = document.getElementById("num1");
const numtwo = document.getElementById("num2");
const opselect = document.getElementById("operation");
const resultpara = document.getElementById("result");
const buttonselect = document.getElementById("start");



buttonselect.addEventListener('click', function(){

  const num1 = parseFloat(numone.value)
  const num2 = parseFloat(numtwo.value)
  const operation = opselect.value;
  let result;



switch(operation){
  case "add":
    result = num1 + num2;
    break
  case "sub":
    result = num1 - num2;
    break
  case "multi":
    result = num1 * num2;
    break
  case "div":
    result = num1 / num2;
    break
  default:
    result = "invalid operation"
}

  resultpara.textContent = `Result: ${result}`;

})