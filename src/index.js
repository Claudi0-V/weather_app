import './style.css';
import { Weather } from './modules/api.js';
import { UI } from './modules/UI.js';
import { ErrorUI } from './modules/error.js';
import { Background } from './modules/background.js';

const input = document.querySelector('#search');
const button = document.querySelector('button');

const asyncProcessing = async (city) => {
  document.querySelector('.background').classList.remove('foreground');
  document.documentElement.style.setProperty('--bg-opacity', '0');
  const { data } = await Weather.getWeather(city);

  if (!data) {
    ErrorUI.createErrorUI(city);
    Background.modifyBackground({ weather: 'Error' });
  } else {

    UI.createElements(data);
    Background.modifyBackground({
      weather: data.mainWeather,
      description: data.description,
    });
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