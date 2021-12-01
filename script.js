const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
const numbers = calculator.querySelectorAll('.numbers input');
const operations = calculator.querySelectorAll('.operations input');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', getNumber);
}

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', getOperation);
}

function getNumber(event) {
    updateDisplay(event.target.value);
}

function getOperation(event) {
    const value = event.target.value;
    if (value === "=") {
        const displayValue = display.textContent;
        const result = eval(displayValue);
        clearDisplay();
        updateDisplay(result);
    }
    else if (value === 'c') {
        clearDisplay();
    }
    else if (value === 'del') {
        deleteLast();
    }
    else {
        updateDisplay(value);
    }
}

function updateDisplay(value) {
    const displayValue = display.textContent;
    const newDisplayValue = `${displayValue}${value}`;
    display.textContent = newDisplayValue;
}

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    const displayValue = display.textContent;
    const lastIndex = displayValue.length - 1;
    const newDisplayValue = displayValue.slice(0, lastIndex);
    display.textContent = newDisplayValue;
}

