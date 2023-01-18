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

const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const bottomDisplay = document.querySelector(".display-text-bottom");
const topDisplay = document.querySelector(".display-text-top");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".op");
let displayValue = "0";
let previousTotal = 0;
let operation = undefined;
let operandOne = undefined;
let operandTwo = undefined;

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

        if (previousTotal.toString().indexOf(".") > -1) {
          bottomDisplay.textContent = Math.round(previousTotal);
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

clear.addEventListener("click", () => {
  bottomDisplay.textContent = "0";
  displayValue = "0";
  console.log(`Display value = ${displayValue}`);
  operation = undefined;
  operandOne = undefined;
  operandTwo = undefined;
  topDisplay.textContent = "";
});

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

      if (rounding.toString().indexOf(".") > -1) {
        bottomDisplay.textContent = Math.round(rounding);
      } else {
        bottomDisplay.textContent = rounding;
        topDisplay.textContent = `${operandOne} ${operation} ${operandTwo} =`;
      }
    }
  }
});
