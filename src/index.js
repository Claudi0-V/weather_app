import './style.css';
import { Weather } from './modules/api.js';
import { UI } from './modules/UI.js';
import { ErrorUI } from './modules/error.js';

const input = document.querySelector('#search');
const button = document.querySelector('button');

const search = () =>{
    asyncProcessing(input.value);
    input.value = '';
}

const asyncProcessing = async (city) => {
    const getWeather = await Weather.getWeather(city);
    if (!getWeather) ErrorUI.createErrorUI(city);
    else {
        const manipulateData = await Weather.processData(getWeather);
        UI.createElements(manipulateData);
    }
};

asyncProcessing('são paulo');

input.addEventListener('search', search);
button.addEventListener('click', search);
