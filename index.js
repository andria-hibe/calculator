const calculator = {
  value: "0"
}

function inputDigit(digit) {
  const value = calculator.value;
  calculator.value = value === '0' ? digit : value + digit;
}

function updateDisplayValue() {
  const display = document.querySelector('#display');
  display.value = calculator.value;
}

updateDisplayValue();

function inputDecimal(decimal) {
  if (!calculator.value.includes(decimal)) {
    calculator.value += decimal;
  }
}

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('digit')) {
    console.log('digit', target.value);
    return;
  }

  if (target.classList.contains('clear')) {
    console.log('clear', target.value);
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