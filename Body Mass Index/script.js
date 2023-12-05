function changeBackgroundColor() {
    document.body.style.backgroundColor = 'darkblue';
    document.getElementById('heightSection').classList.remove('hidden');
}

function calculateBMI() {
    const mass = parseFloat(document.getElementById('mass').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const bmi = mass / (height * height);

    displayResult(bmi);
}

function displayResult(bmi) {
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('bmiResult').innerText = bmi.toFixed(2);
}
