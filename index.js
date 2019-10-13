const calculator = {
  value: "0",
  firstOperand: null,
  secondOperandReady: false,
  operator: null
}

function updateDisplayValue() {
  const display = document.querySelector('#display');
  display.value = calculator.value;
}

updateDisplayValue();

function clearCalculator(){
  calculator.value = '0';
  calculator.firstOperand = null;
  calculator.secondOperandReady = false;
  calculator.operator = null;
}

function inputDigit(digit) {
  const {value, secondOperandReady} = calculator;

  if (secondOperandReady === true) {
    calculator.value = digit;
    calculator.secondOperandReady = false;
  } else {
    calculator.value = value === '0' ? digit : value + digit;
  }
}

function inputDecimal(decimal) {
  if (!calculator.value.includes(decimal)) {
    calculator.value += decimal;
  }
}

function inputOperator(clickedOperator) {
  const {value, firstOperand, operator} = calculator;
  const inputValue = parseFloat(value);

  if (operator && calculator.secondOperandReady)  {
    calculator.operator = clickedOperator;
    return;
  }

  if (firstOperand === null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const calculation = calculate[operator](firstOperand, inputValue);
    
    calculator.value = String(calculation);
    calculator.firstOperand = calculation;
  }

  calculator.secondOperandReady = true;
  calculator.operator = clickedOperator;
}

const calculate = {
  '+': (firstOperand, secondOperandReady) => firstOperand + secondOperandReady,
  '-': (firstOperand, secondOperandReady) => firstOperand - secondOperandReady,
  '*': (firstOperand, secondOperandReady) => firstOperand * secondOperandReady,
  '/': (firstOperand, secondOperandReady) => firstOperand / secondOperandReady,
};

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    inputOperator(target.value);
    updateDisplayValue();
    return;
  }
  
  if (target.classList.contains('clear')) {
    clearCalculator();
    updateDisplayValue();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplayValue();
    return;
  }

  inputDigit(target.value);
  updateDisplayValue();
});