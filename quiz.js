// Add an event listener to the "Submit Answer" button.
// The checkAnswer function will be called when the button is clicked.
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

/**
 * Checks the selected answer against the correct answer and provides feedback.
 */
function checkAnswer() {
    // 1. Identify the correct answer.
    const correctAnswer = "4";

    // 2. Retrieve the user's selected answer.
    // We query for the radio button that is checked within the group named "quiz".
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 3. Select the feedback element to display the result.
    const feedbackElement = document.getElementById('feedback');

    // Check if an option was selected
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer.";
        return; // Exit the function if no answer is selected
    }

    const userAnswer = selectedOption.value;

    // 4. Compare the user's answer with the correct answer.
    if (userAnswer === correctAnswer) {
        // If the answer is correct, display a success message.
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = 'green';
    } else {
        // If the answer is incorrect, display an error message.
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = 'red';
    }
}
