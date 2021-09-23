class ErrorUI {

	static createErrorUI = (city) => {
		const main = document.querySelector('main');
		const oldWeather = document.querySelector('.weather');
		const newWeather = document.createElement('div');
		const ops = document.createElement('div');
		const notFound = document.createElement('div');
		const cityName = document.createElement('span')
		cityName.textContent = city;
		cityName.classList.add('error');
		ops.textContent = 'Oops...';
		notFound.textContent = `It appears that we can't find the `;
		notFound.append(cityName);
		notFound.innerHTML += ' city. Try Again';
		ops.classList.add('text-top-weather');
		notFound.classList.add('not-found');
		oldWeather.remove();
		newWeather.classList.add('weather', 'centralized');
		newWeather.append(ops, notFound)
		main.append(newWeather);
	}
}

export { ErrorUI }
