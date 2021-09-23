import './style.css';
import { Weather } from './modules/api.js';
import { UI } from './modules/UI.js'

const input = document.querySelector('#search');


const asyncProcessing = (city) => {
    const getWeather = Weather.getWeather(city);
    const manipulateData = getWeather.then(Weather.processData);
    const description = manipulateData.then(UI.createElements);

};


asyncProcessing('são paulo');
