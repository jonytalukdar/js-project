const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progressBar = document.getElementById('progress');

const showTime = () => {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  hour.innerHTML = hr;
  minute.innerHTML = min;
  second.innerHTML = sec;

  progressBar.style.width = (sec / 60) * 100 + '%';
};

setInterval(() => {
  showTime();
}, 1000);
