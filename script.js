function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    return operator(num1, num2);
};

const division = document.querySelector('#divide');
const multiplication = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const bottomDisplay = document.querySelector('.display-text-bottom');
const digits = document.querySelectorAll('.digit');
let displayValue = '0';

digits.forEach(digit => {
    digit.addEventListener('click', () => {

   if (displayValue === '0') {
        bottomDisplay.textContent = `${digit.getAttribute('id')}`;
        displayValue = `${digit.getAttribute('id')}`;
        console.log(`Display value = ${displayValue}`);
    } else if (displayValue.length < 9) {
        bottomDisplay.textContent += `${digit.getAttribute('id')}`;
        displayValue += `${digit.getAttribute('id')}`;
        console.log(`Display value = ${displayValue}`);

    }
  });
});

clear.addEventListener('click', () => {
    bottomDisplay.textContent = '0';
    displayValue = '0';
    console.log(`Display value = ${displayValue}`);
})

plus.addEventListener('click', () => {
    operandOne = Number(displayValue);
    operation = add;
    displayValue = '0';
});

minus.addEventListener('click', () => {
    operandOne = Number(displayValue);
    operation = subtract;
    displayValue = '0';
});

multiplication.addEventListener('click', () => {
    operandOne = Number(displayValue);
    operation = multiply;
    displayValue = '0';
});

division.addEventListener('click', () => {
    operandOne = Number(displayValue);
    operation = divide;
    displayValue = '0';
});

equals.addEventListener('click', () => {
    operandTwo = Number(displayValue);
    bottomDisplay.textContent = operate(operation, operandOne, operandTwo);
});

