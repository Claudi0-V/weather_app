import getWeather from './modules/api.js';

const input = document.querySelector('#search');
const button = document.querySelector('button');
const city = document.querySelector('#city');
const description = document.querySelector('#description');
const iconImg = document.querySelector('#icon');
const temp = document.querySelector('#temp');
const temp_max = document.querySelector('#temp_max');
const temp_min = document.querySelector('#temp_min');
const background = document.querySelector('.background');
const errorModalWrapper = document.querySelector('.error-modal-wrapper');
const errorSpan = document.querySelector('.error-span');


document.querySelector('.close-modal').addEventListener('click', (e) => {
  errorModalWrapper.style.display = 'none'
})


const asyncProcessing = async (searchTerm) => {
  const { data } = await getWeather(searchTerm);

  if (!data) {
    errorSpan.textContent = searchTerm;
    errorModalWrapper.style.display = 'flex';

  } else {
    city.textContent = `${data.name}, ${data.country}.`;
    description.textContent = data.description;
    iconImg.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
    temp.textContent = data.temp.toFixed(1);
    temp_max.textContent = data.temp_max.toFixed(1);  
    temp_min.textContent = data.temp_min.toFixed(1);
    background.style.setProperty('--url', `url('${data.wallpaper}')`);
    
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