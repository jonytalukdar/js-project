const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const miliseconds = document.getElementById('miliseconds');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const pause = document.getElementById('pause');

let min;
let sec = 0;
let timer = null;
let watchRunning = false;

function startTime() {
  if (!watchRunning) {
    watchRunning = true;
    timer = setInterval(function () {
      sec++;
      let { min, second } = getTime(sec);
      minutes.innerHTML = min < 10 ? '0' + min : min;
      seconds.innerHTML = second < 10 ? '0' + second : second;
    }, 1000);
  }
}

function resetTime() {
  watchRunning = false;
  clearInterval(timer);
  min = 0;
  sec = 0;
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
}

function pasueTime() {
  watchRunning = false;
  clearInterval(timer);
}

function getTime(sec) {
  min = parseInt(sec / 60); // 122 / 60 = 2.somethign
  second = parseInt(sec % 60);
  return {
    min,
    second,
  };
}

start.addEventListener('click', startTime);
reset.addEventListener('click', resetTime);
pause.addEventListener('click', pasueTime);
