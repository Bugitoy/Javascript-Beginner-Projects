Simple Quiz Game Project

Build a basic quiz game where you declare variables for questions and answers. Display questions to the user and check if their answers are correct, updating the UI accordingly.

Let's break down how the JavaScript code in the "Simple Quiz Game" works:

Defining Correct Answers:

The correctAnswers object is defined, which holds the correct answers for each question. The keys are question IDs (q1, q2, q3), and the values are the correct answers.

const correctAnswers = {
    q1: "Paris",
    q2: "7",
    q3: "Tokyo"
};

checkAnswers Function:

The checkAnswers function is defined. This function is called when the "Submit Answers" button is clicked.

function checkAnswers() {
    // ... (code explained below)
}

Initializing Score:

A variable score is initialized to keep track of the user's score.

let score = 0;

Checking User Answers:

A loop iterates over each question (3 questions in this case).

for (let i = 1; i <= 3; i++) {
    // ... (code explained below)
}

Getting User's Selected Answer:

Inside the loop, it checks which radio button is selected for each question.

const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
const questionId = `q${i}`;
The userAnswer variable holds the selected radio button for the current question, and questionId is used to identify the question.

Checking Correctness and Updating Score:

If the user has selected an answer, it compares the user's answer with the correct answer for that question.

if (userAnswer) {
    const userAnswerValue = userAnswer.value;

    // Check if the user's answer is correct
    if (userAnswerValue === correctAnswers[questionId]) {
        score++;
    }
}

If the user's answer is correct, the score is incremented.

Displaying Feedback:

After checking all the questions, the function updates the HTML to display the user's score and provides feedback.

const feedbackElement = document.getElementById("feedback");
feedbackElement.textContent = `You scored ${score} out of 3. ${score === 3 ? "Great job!" : "Keep practicing!"}`;

The feedback is displayed in a <div> element with the ID "feedback". It mentions the user's score and provides encouraging feedback based on their performance.
In summary, the JavaScript code checks the user's selected answers against the correct answers, calculates the score, and provides feedback to the user. This way, the user gets immediate feedback on their quiz performance. The DOM manipulation is used to update the HTML dynamically based on the user's actions.

Questions and Queries

Number 1:

const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
This line of code uses the document.querySelector method to select a single DOM element that matches the specified CSS selector. Let's break down each part of the code:

const userAnswer: This declares a constant variable named userAnswer to store the selected radio button for the current question.

document.querySelector: This is a method in the Document Object Model (DOM) API that allows you to select a single element based on a CSS selector.

`input[name="q${i}"]`:

`input`: This part of the selector targets HTML <input> elements.
[name="q${i}"]`: This is an attribute selector that looks for an <input> element with a name attribute equal to "q" followed by the current value of i (the loop variable).
For example, in the first iteration (when i is 1), it selects the radio buttons with name="q1". In the second iteration, it selects radio buttons with name="q2", and so on.

:checked: This is a pseudo-class selector that selects only the radio button that is currently checked. It ensures that the variable userAnswer will hold the selected answer for the current question.

In summary, this line of code is selecting the checked radio button for the current question based on the loop variable i and storing it in the userAnswer variable. If no radio button is checked for the current question, userAnswer will be null. This information is then used to check if the user has selected an answer for a particular question in the subsequent part of the code.

Number 2:

`feedbackElement.textContent` is a property in JavaScript used to get or set the text content of an HTML element. Let's break down how it works:

1. **`feedbackElement`**: This is a variable that holds a reference to a DOM element. In the context of your provided code, it is assigned the value of the HTML element with the ID "feedback":

    const feedbackElement = document.getElementById("feedback");

    This line of code uses `document.getElementById("feedback")` to select the HTML element with the ID "feedback" and assigns it to the variable `feedbackElement`.

2. **`.textContent`**: This is a property of the selected DOM element (`feedbackElement`). The `textContent` property allows you to get or set the text content of an element.

    - **Getting Text Content:**
      If you use `feedbackElement.textContent` on its own (without assigning a value), it retrieves the current text content of the element. For example:

      const currentText = feedbackElement.textContent;

      This would store the current text content of the "feedback" element in the variable `currentText`.

    - **Setting Text Content:**
      If you assign a value to `feedbackElement.textContent`, you are setting the text content of the element. For example:

      feedbackElement.textContent = "You did a great job!";

      This line of code sets the text content of the "feedback" element to "You did a great job!".
