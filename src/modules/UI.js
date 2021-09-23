class UI {

	static createElements = (obj) => {
		const main = document.querySelector('main');
		const oldWeather = document.querySelector('.weather');
		const newWeather = document.createElement('div');
		const city = UI.createCity(obj.name);
		const img = UI.createImage(obj.icon);
		const currentTemp = UI.createCurrentTemp(obj.temp);
		const minMaxTemp = UI.createMinMaxTemp(obj.temp_min, obj.temp_max);
		const description = UI.createDescription(obj.description)
		oldWeather.remove();
		newWeather.classList.add('weather', 'centralized');
		newWeather.append(currentTemp, city, description, img, minMaxTemp)
		main.append(newWeather);
		
	}

	static createCity = (city) => {
		const newCity = document.createElement('div');
		newCity.textContent = city;
		newCity.classList.add('city')
		return newCity
	}

	static createImage = (icon) => {
		const img = document.createElement('img');
		img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
		return img
	}

	static createCurrentTemp = (currentTemp) => {
		const temp = document.createElement('div');
		temp.textContent = `${currentTemp.toFixed(1)}ºc`;
		temp.classList.add('text-top-weather');
		return temp
	}

	static createMinMaxTemp = (minTemp, maxTemp) => {
		const minMaxTemp = document.createElement('div');
		minMaxTemp.textContent = `${minTemp.toFixed(1)}ºc / ${maxTemp.toFixed(1)}ºc`;
		minMaxTemp.classList.add('min-max-temp');
		return minMaxTemp
	}

	static createDescription = (description) => {
		const descriptionDiv = document.createElement('div');
		descriptionDiv.textContent = description;
		descriptionDiv.classList.add('description')
		return descriptionDiv
	}
}

export { UI }