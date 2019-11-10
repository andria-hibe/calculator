const calculator = {
  value: "0",
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null
}

const display = document.querySelector('#display');
display.value = calculator.value;

const calculate = {
  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
};

function clearCalculator(){
  calculator.value = '0';
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  calculator.operator = null;
}

function inputNumber(number) {
  const {value, waitingForSecondNumber} = calculator;

  if (waitingForSecondNumber) {
    calculator.value = number;
    calculator.waitingForSecondNumber = false;
  } else {
    calculator.value = value === '0' ? number : value + number;
  }
}

function inputOperator(operatorValue) {
  const {value, firstNumber, operator} = calculator;
  const inputValue = parseFloat(value);

  if (operator && calculator.waitingForSecondNumber)  {
    calculator.operator = operatorValue;
    return;
  }

  if (firstNumber === null) {
    calculator.firstNumber = inputValue;
  } else if (operator) {
    const calculation = calculate[operator](firstNumber, inputValue);
    
    calculator.value = String(calculation);
    calculator.firstNumber = calculation;
  }

  calculator.waitingForSecondNumber = true;
  calculator.operator = operatorValue;
}

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    inputOperator(target.value);
    display.value = calculator.value;
    return;
  }
  
  if (target.classList.contains('clear')) {
    clearCalculator();
    display.value = calculator.value;
    return;
  }

  if (target.classList.contains('decimal')) {
    if (!calculator.value.includes('.')) {
      calculator.value += '.';
      display.value = calculator.value;
    }
    return;
  }

  inputNumber(target.value);
  display.value = calculator.value;
});
