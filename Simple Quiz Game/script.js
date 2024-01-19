function checkAnswers() {
    // Define correct answers
    const correctAnswers = {
        q1: "Paris",
        q2: "7",
        q3: "Tokyo"
    };

    // Initialize score
    let score = 0;

    // Check user answers
    for (let i = 1; i <= 3; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        const questionId = `q${i}`;

        if (userAnswer) {
            const userAnswerValue = userAnswer.value;

            // Check if the user's answer is correct
            if (userAnswerValue === correctAnswers[questionId]) {
                score++;
            }
        }
    }

    // Display feedback
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = `You scored ${score} out of 3. ${score === 3 ? "Great job!" : "Keep practicing!"}`;
}