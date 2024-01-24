const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi"
];

function generateQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Display the random quote
    const quoteText = document.getElementById("quote-text");
    quoteText.textContent = quotes[randomIndex];
}
