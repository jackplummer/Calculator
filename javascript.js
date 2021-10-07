const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

function operate(a,b,operation) {
  if (operation === add) {
    return add(a,b);
  } else if (operation === subtract) {
    return subtract(a,b);
  } else if (operation === multiply) {
    return multiply(a,b);
  } else if (operation === divide) {
    return divide(a,b);
  };
};

function numberButton(number) {
  displayChange(number);
};

function operationButton(operation) {
  displayChange(operation);
};

const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(){
    numberButton(numbers[i].value);
  });
};

const operations = document.querySelectorAll('.button');
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener('click', function() {
    operationButton(operations[i].value);
  });
};

const display = document.querySelector('.display');
function displayChange(input) {
  if (input === 'clear') {
    display.textContent = '';
    counter = 0;
    firstOperand = 0;
    secondOperand = 0;
  } else if (input === 'add'){
    display.textContent += ' + ';
  } else if (input === 'subtract'){
    display.textContent += ' - ';
  } else if (input === 'multiply'){
    display.textContent += ' * ';
  } else if (input === 'divide'){
    display.textContent += ' / ';
  } else {
    display.textContent += `${input}`;
    if (counter === 0) {
      firstOperand += `${input}`;
    } else {
      secondOperand += `${input}`;
    };
  }};

  // calculator logic
  // store first number
  // store operation (in counter?)
  // store second number
  // call operate once equals is pressed
  // display the answer on the display

  let firstOperand = 0;
  let secondOperand = 0;
  let counter = 0;


