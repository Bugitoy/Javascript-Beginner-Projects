function convertTemperature() {
    // Get the input value
    const celsiusInput = document.getElementById("celsius");
    const celsiusValue = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(celsiusValue)) {
        // Convert Celsius to Fahrenheit
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        // Display the result
        const resultElement = document.getElementById("result");
        resultElement.textContent = `${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F.`;
    } else {
        alert("Please enter a valid number for Celsius.");
    }
}
