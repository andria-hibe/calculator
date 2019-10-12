This program creates a simple calculator using HTML, CSS, and vanilla Javascript


#HTML:
This creates the outline of our calculator

##Input Screen
At the top spanning the width of the calculator

id="display"

##Buttons
Rows: 4
Columns: 5


7 8 9 | AC
4 5 6 | x ÷ 
1 2 3 | + -
0 0 . | = =

IDs:
**id="equals"
**id="decimal"

**id="zero"
**id="one"
**id="two"
**id="three"
**id="four"
**id="five"
**id="six"
**id="seven"
**id="eight"
**id="nine"

**id="add"
**id="subtract"
**id="multiply"
**id="divide"

**id="clear"


#CSS:
Use grid
Easter colours for inspiration
Hover buttons - lighter colour


#JS:
**Follow formula logic for order of operations
**Should be able to do operation on decimals of at least 4 decimal places precision
**Pressing an operator after = should start new calculation on latest result
**If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.

function displayNumbers() {
  Display numbers on screen based on input;
  Do not allow input to start with multiple zeroes;
  Display correct output per numbers and operation input;
  Decimal should append a . to displated value
    Should not allow two . in one number
  Pressing clear should clear input and output values and return calculator to initialised state showing 0
}

function addition(num1, num2) {
  Add numbers based on input
}
