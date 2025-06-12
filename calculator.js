// --- Arithmetic Functions ---

/**
 * Adds two numbers.
 * @param {number} number1 The first number.
 * @param {number} number2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(number1, number2) {
    return number1 + number2;
}

/**
 * Subtracts the second number from the first.
 * @param {number} number1 The first number.
 * @param {number} number2 The second number.
 * @returns {number} The difference between the two numbers.
 */
function subtract(number1, number2) {
    return number1 - number2;
}

/**
 * Multiplies two numbers.
 * @param {number} number1 The first number.
 * @param {number} number2 The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(number1, number2) {
    return number1 * number2;
}

/**
 * Divides the first number by the second.
 * @param {number} number1 The first number.
 * @param {number} number2 The second number.
 * @returns {number|string} The quotient of the two numbers, or an error message if dividing by zero.
 */
function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}


// --- Event Listeners ---

// Helper function to get numbers from input fields
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Event listener for the addition button
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the subtraction button
document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the multiplication button
document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for the division button
document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
