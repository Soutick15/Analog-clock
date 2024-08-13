const secondsHand = document.getElementById("second-hand");
const minutesHand = document.getElementById("minute-hand");
const hoursHand = document.getElementById("hour-hand");
const clockContainer = document.querySelector('.clock');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const timeInterval = 6;

    secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`;
    minutesHand.style.transform = `rotate(${minutes * timeInterval + seconds / 10}deg)`;
    hoursHand.style.transform = `rotate(${(hours % 12) * 30 + minutes / 2}deg)`;

    updateTheme(hours);
}

function updateTheme(hours) {
    if (hours >= 6 && hours < 18) {
        // Day Theme
        clockContainer.style.background = 'linear-gradient(to right, #FFEEAD, #FFDB4A)';
    } else {
        // Night Theme
        clockContainer.style.background = 'linear-gradient(to right, #2E3A59, #1B2735)';
    }
}

setInterval(getTime, 100);
getTime();  // Initial call to set clock hands without waiting