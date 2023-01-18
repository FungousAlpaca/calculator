// DOM element declarations:

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const bottomDisplay = document.querySelector(".display-text-bottom");
const topDisplay = document.querySelector(".display-text-top");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".op");

// Variable declarations:

let displayValue = "0";
let previousTotal = 0;
let operation = undefined;
let operandOne = undefined;
let operandTwo = undefined;

// Operation functions: 

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

// Digit event listeners to store and display choices:

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (displayValue === "0") {
      bottomDisplay.textContent = `${digit.getAttribute("id")}`;
      displayValue = `${digit.getAttribute("id")}`;
    } else if (displayValue.length < 9) {
      bottomDisplay.textContent += `${digit.getAttribute("id")}`;
      displayValue += `${digit.getAttribute("id")}`;
    }
  });
});

/* Operator event listeners that call a corresponding function 
and allows for several operations to occur: */

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (operation !== undefined && operandOne !== undefined) {
      operandTwo = Number(displayValue);

      if (operandTwo === 0 && operation === "/") {
        bottomDisplay.textContent = "ERROR";
        operation = undefined;
        operandOne = undefined;
        operandTwo = undefined;
      } else {
        let previousTotal = operate(operation, operandOne, operandTwo);

        if (previousTotal.toString().length > 9) {
          bottomDisplay.textContent = previousTotal.toExponential(3);
        } else {
          topDisplay.textContent = `${previousTotal} ${operation}`;
        }
        operation = `${op.getAttribute("id")}`;
        operandOne = previousTotal;
        topDisplay.textContent = `${operandOne} ${operation}`;
        displayValue = "0";
      }
    } else {
      operandOne = Number(displayValue);
      operation = `${op.getAttribute("id")}`;
      topDisplay.textContent = `${operandOne} ${operation}`;
      displayValue = "0";
    }
  });
});

// Clears stored data and resets the calculator display:

clear.addEventListener("click", () => {
  bottomDisplay.textContent = "0";
  displayValue = "0";
  operation = undefined;
  operandOne = undefined;
  operandTwo = undefined;
  topDisplay.textContent = "";
});

// Calculates the stored values by calling the corresponding function:

equals.addEventListener("click", () => {
  if (
    operation !== undefined ||
    operandOne !== undefined ||
    operandTwo !== undefined
  ) {
    operandTwo = Number(displayValue);

    if (operandTwo === 0 && operation === "/") {
      bottomDisplay.textContent = "ERROR";
      operation = undefined;
      operandOne = undefined;
      operandTwo = undefined;
    } else {
      let rounding = operate(operation, operandOne, operandTwo);

      if (rounding.toString().length > 9) {
        bottomDisplay.textContent = rounding.toExponential(3);
      } else {
        bottomDisplay.textContent = rounding;
        topDisplay.textContent = `${operandOne} ${operation} ${operandTwo} =`;
      }
    }
  }
});
