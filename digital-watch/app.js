const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progressBar = document.getElementById('progress');

const showTime = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour.innerHTML = hr;
  minute.innerHTML = min;
  second.innerHTML = sec;
};

setInterval(() => {
  showTime();
});
