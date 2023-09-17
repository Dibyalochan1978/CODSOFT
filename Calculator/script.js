// Select necessary elements
const displayElement = document.getElementById("display");
const clearButton = document.getElementById("clear");
// Select number and operator buttons
const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");

let currentInput = ""; // Store current user input
let currentOperator = ""; // Store current operator
let result = 0; // Store the calculated result

// Update display with the current input
function updateDisplay() {
    displayElement.textContent = currentInput || "0";
}

// Clear everything
function clearAll() {
    currentInput = "";
    currentOperator = "";
    result = 0;
    updateDisplay();
}

// Handle number button clicks
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});

// Handle operator button clicks
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput !== "") {
            if (currentOperator !== "") {
                calculate();
            }
            currentOperator = button.textContent;
            result = parseFloat(currentInput);
            currentInput = "";
        }
    });
});

// Select delete button
const deleteButton = document.getElementById("delete");

// Handle delete button click
deleteButton.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1); // Remove last character
    updateDisplay();
});



// Calculate and update the result
function calculate() {
    const inputValue = parseFloat(currentInput);
    switch (currentOperator) {
        case "+":
            result += inputValue;
            break;
        case "-":
            result -= inputValue;
            break;
        case "*":
            result *= inputValue;
            break;
        case "/":
            result /= inputValue;
            break;
    }
    currentInput = result.toString();
    currentOperator = "";
    updateDisplay();
}

// Clear button click event
clearButton.addEventListener("click", clearAll);
