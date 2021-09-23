import './style.css';
import { Weather } from './modules/api.js';
import { UI } from './modules/UI.js';
import { ErrorUI } from './modules/error.js';

const input = document.querySelector('#search');
const button = document.querySelector('button');
let aa = 0
const asyncProcessing = async (city) => {
  const getWeather = await Weather.getWeather(city);
  if (!getWeather) ErrorUI.createErrorUI(city);
  else {
    const body = document.querySelector('body');
    const manipulateData = await Weather.processData(getWeather);
    const weatherType = UI.createElements(manipulateData);
    console.log(manipulateData.mainWeather, manipulateData.description);
    if (aa > 0) body.classList.add('Drizzle');
    aa++;
  }
};

const search = () => {
  if (!input.value) return;
  asyncProcessing(input.value);
  input.value = '';
};

asyncProcessing('são paulo');

input.addEventListener('search', search);
button.addEventListener('click', search);
