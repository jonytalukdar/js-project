const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const miliseconds = document.getElementById('miliseconds');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const pause = document.getElementById('pause');

let min;
let sec = 0;

function startTime() {
  setInterval(function () {
    sec++;
  }, 1000);
}

function resetTime() {
  console.log('reset');
}

function pasueTime() {
  console.log('pause');
}

start.addEventListener('click', startTime);
reset.addEventListener('click', resetTime);
pause.addEventListener('click', pasueTime);
