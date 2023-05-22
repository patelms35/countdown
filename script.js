const daysE1 = document.getElementById('days');
const hourE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondE1 = document.getElementById('seconds');

const newYears = "5 july 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate  = new Date();

    const totalseconds = (newYearsDate - currentDate) / 
    1000;

    const days = Math.floor(totalseconds / 3600 / 24 );
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60; 
    const seconds = Math.floor(totalseconds) % 60;

    daysE1.innerHTML = days;
    hourE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secondE1.innerHTML= seconds;

}

function formatTime(time)  {
    return time < 10 ? '0$ftime1' : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
