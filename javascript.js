const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

function roundTwoDecimal(number) {
  return Math.round(number * 100) / 100;
}

function operate(a,b,operation) {
  a = Number(a);
  b = Number(b);
  if (operation === 'add') {
    return add(a,b);
  } else if (operation === 'subtract') {
    return subtract(a,b);
  } else if (operation === 'multiply') {
    return multiply(a,b);
  } else if (operation === 'divide') {
    return divide(a,b);
  } else if (operation === 'null') {
    return a;
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

function decimalCheck(a,b,operation) { // handles decimal and avoids double decimal
  if (operation === 'null') {
    if (/\./.test(a)) {
      console.log('decimal found');
      return '';
    } else {
      console.log('decimal not found');
      firstOperand += '.';
      return '.';
    };
  } else {
    if (/\./.test(b)) {
      console.log('decimal found');
      return '';
    } else {
      console.log('decimal not found');
      secondOperand += '.';
      return '.';
    };
  };
};

const display = document.querySelector('.display');
function displayChange(input) {
  if (input === 'clear') {
    display.textContent = '';
    operationStored = 'null';
    firstOperand = 0;
    secondOperand = 0;
  } else if (input === 'equals'){
    answer = roundTwoDecimal(operate(firstOperand,secondOperand,operationStored));
    display.textContent = `= ${answer}`
    firstOperand = answer;
    secondOperand = 0;
    operationStored = 'null';
  } else if (input === 'add'){
    display.textContent += ' + ';
    operationStored = 'add';
  } else if (input === 'subtract'){
    display.textContent += ' - ';
    operationStored = 'subtract';
  } else if (input === 'multiply'){
    display.textContent += ' * ';
    operationStored = 'multiply';
  } else if (input === 'divide'){
    display.textContent += ' / ';
    operationStored = 'divide';
  } else if (input === 'decimal') {
    display.textContent += decimalCheck(firstOperand,secondOperand,operationStored);
  } else {
    display.textContent += `${input}`;
    if (operationStored === 'null') {
      firstOperand += `${input}`;
    } else {
      secondOperand += `${input}`;
    };
  }};

  let firstOperand = 0;
  let secondOperand = 0;
  let operationStored = 'null';
  let answer = 0;


