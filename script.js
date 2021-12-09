const calculator = document.getElementById('calculator');
let display = document.getElementById('display');
const numbers = calculator.querySelectorAll('.numbers input');
const operations = calculator.querySelectorAll('.operations input');
var displayValueGlobal = 0;
display.textContent = 0;

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
        const displayValue = displayValueGlobal;
        const lastIndex = displayValue.length - 1;
        const lastSymbol = displayValue[lastIndex];
        if (lastSymbol == '+' || lastSymbol == '-' || lastSymbol == '*' || lastSymbol == '/' || lastSymbol == '.') {
            var result = displayValue;
        } else {
            var result = eval(displayValue);
        }

        display.textContent = '';
        displayValueGlobal = '';
        updateDisplay(result);
    }
    else if (value === 'c') {
        clearDisplay();
    }
    else if (value === 'del') {
        deleteLast();
    }
    else {
        const displayValue = display.textContent;
        const lastIndex = displayValue.length - 1;
        const lastSymbol = displayValue[lastIndex];
        if (lastSymbol !== '+' && lastSymbol !== '-' && lastSymbol !== '*' && lastSymbol !== '/' && lastSymbol !== '.') {
            updateDisplay(value);
        } 
    }
}

function updateDisplay(value) {
    const displayValue = display.textContent;
    if(displayValue == 0 && displayValue.length < 2 && (value !== '+' && value !== '-' && value !== '*' && value !== '/' && value !== '.')) {
        var newDisplayValue = `${value}`;
        displayValueGlobal = `${value}`;
    } else {
        var newDisplayValue = `${displayValue}${value}`;
        displayValueGlobal = `${displayValueGlobal}${value}`;
    }

    if(newDisplayValue.length > 25) {
        newDisplayValue = newDisplayValue.substring(1);
    }
    display.textContent = newDisplayValue;
}

function clearDisplay() {
    display.textContent = 0;
    displayValueGlobal = 0;
}

function deleteLast() {
    const displayValue = display.textContent;
    if(displayValue.length > 1) {
        const lastIndex = displayValue.length - 1;
        const newDisplayValue = displayValue.slice(0, lastIndex);
        display.textContent = newDisplayValue;

        //delete the last character from the global display value
        const lastIndexGlobalDisplay = displayValueGlobal.length - 1;
        const newDisplayValueGlobal = displayValueGlobal.slice(0, lastIndexGlobalDisplay);
        displayValueGlobal = newDisplayValueGlobal;
    } else {
        clearDisplay();
    }
}

