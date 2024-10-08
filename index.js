const secondsHand = document.getElementById("second-hand");
const minutesHand = document.getElementById("minute-hand");
const hoursHand = document.getElementById("hour-hand");
const clockContainer = document.querySelector('.clock');
const hourMarkersContainer = document.querySelector('.hour-markers');


function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const milliseconds = now.getMilliseconds();
    const timeInterval = 6;

    const secondsWithFraction = seconds + milliseconds / 1000;

    secondsHand.style.transform = `rotate(${secondsWithFraction * timeInterval}deg)`;
    minutesHand.style.transform = `rotate(${minutes * timeInterval + seconds / 10}deg)`;
    hoursHand.style.transform = `rotate(${(hours % 12) * 30 + minutes / 2}deg)`;
    document.querySelector('h1').innerText = `${hours}:${minutes}:${seconds}`;

}


function createHourMarkers() {
    for (let i = 0; i < 12; i++) {
        const marker = document.createElement('div');
        marker.classList.add('hour-marker');
        marker.style.transform = `rotate(${i * 30}deg) translateY(-130px)`;
        hourMarkersContainer.appendChild(marker);
    }
}


setInterval(getTime, 100);
getTime();  

createHourMarkers(); 
