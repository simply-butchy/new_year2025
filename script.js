// Countdown Timer functionality
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();  // Set your target date

// Update the countdown every 1 second
setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Format the countdown message
    let countdownMessage = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds Left`;

    // Display the formatted message in the HTML
    document.getElementById("countdownMessage").innerHTML = countdownMessage;

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval();  // Stop the countdown
        document.getElementById("countdownMessage").innerHTML = "Happy New Year!";
    }
}, 1000);  // Update every second

// Surprise Button Toggle
document.getElementById('revealButton').addEventListener('click', function() {
    const surpriseContainer = document.getElementById('surpriseContainer');
    surpriseContainer.classList.toggle('hidden');
});
