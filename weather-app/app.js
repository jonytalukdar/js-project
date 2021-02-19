const condition = document.getElementById('condition');
const city = document.getElementById('city');
const country = document.getElementById('country');
const mainTask = document.getElementById('main');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');

const cityInput = document.getElementById('city-input');
const historyElm = document.getElementById('history');
const masterHistory = document.getElementById('master-history');

const API_KEY = '08d1ff27ba3f8236c3b68e4278207732';
const BASE_URL = `api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`;
const ICON_API = `http://openweathermap.org/img/wn/`;
