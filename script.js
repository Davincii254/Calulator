// This variable will hold the current expression or number in the display
let displayValue = "";

/**
 * Updates the display with the current value of the displayValue variable.
 */
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

/**
 * Clears the display and resets displayValue.
 */
function clearDisplay() {
    displayValue = ""; // Reset display value
    updateDisplay(); // Update the display
}

/**
 * Deletes the last character in the display.
 */
function deleteLast() {
    displayValue = displayValue.slice(0, -1); // Remove the last character
    updateDisplay(); // Update the display
}

/**
 * Handles input of numbers and operators.
 * @param {string} value - The number or operator to be added to the displayValue.
 */
function inputNumber(value) {
    displayValue += value; // Concatenate the new input
    updateDisplay(); // Update the display
}

/**
 * Evaluates the expression in the display.
 * Uses the eval function to compute the result.
 * If there is an error in the expression, it catches and shows "Error".
 */
function calculateResult() {
    try {
        // Evaluate the expression using JavaScript's eval function
        let result = eval(displayValue);

        // If the result is valid, set it as the new display value
        if (!isNaN(result)) {
            displayValue = result.toString();
        } else {
            displayValue = "Error";
        }
    } catch (e) {
        // If an error occurs, set display value to "Error"
        displayValue = "Error";
    }
    updateDisplay(); // Update the display with the result or error
}
