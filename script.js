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

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const division = document.querySelector('#divide');
const multiplication = document.querySelector('#multiply');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

const bottomDisplay = document.querySelector('.display-text-bottom');
let displayValue = 0;


zero.addEventListener('click', () => {

   if (displayValue === 0) {
        bottomDisplay.textContent = 0;
        displayValue += 0;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 0;
        displayValue += 0;
        console.log(`Display value = ${displayValue}`);

    }
});

one.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 1;
        displayValue += 1;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 1;
        displayValue += 1;
        console.log(`Display value = ${displayValue}`);

    }
});

two.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 2;
        displayValue += 2;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 2;
        displayValue += 2;
        console.log(`Display value = ${displayValue}`);

    }
});

three.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 3;
        displayValue += 3;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 3;
        displayValue += 3;
        console.log(`Display value = ${displayValue}`);

    }
});

four.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 4;
        displayValue += 4;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 4;
        displayValue += 4;
        console.log(`Display value = ${displayValue}`);

    }
});

five.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 5;
        displayValue += 5;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 5;
        displayValue += 5;
        console.log(`Display value = ${displayValue}`);

    }
});

six.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 6;
        displayValue += 6;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 6;
        displayValue += 6;
        console.log(`Display value = ${displayValue}`);

    }
});

seven.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 7;
        displayValue += 7;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 7;
        displayValue += 7;
        console.log(`Display value = ${displayValue}`);

    }
});

eight.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 8;
        displayValue += 8;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 8;
        displayValue += 8;
        console.log(`Display value = ${displayValue}`);

    }
});

nine.addEventListener('click', () => {
    if (displayValue === 0) {
        bottomDisplay.textContent = 9;
        displayValue += 9;
        console.log(`Display value = ${displayValue}`);
    } else {
        bottomDisplay.textContent += 9;
        displayValue += 9;
        console.log(`Display value = ${displayValue}`);

    }
});

clear.addEventListener('click', () => {
    bottomDisplay.textContent = 0;
    displayValue = 0;
    console.log(`Display value = ${displayValue}`);
})





