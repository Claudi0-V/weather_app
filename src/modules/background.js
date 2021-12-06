const background = document.querySelector('.background');

const mediumClouds = '90deg, #bec2cf 0%, #6582b3 46%, #526d9f 100%';
const lightRain = '160deg, #a4a1b4 0%, #fdf9df 100%';
const heavyRain = '90deg, #949286 0%, #95958d 46%, #656565 100%';

let backgrounds = {
	Error: '147deg, #f6b7b7 0%, #FF2525 74%',
	Thunderstorm: '43deg, #1f0e68 0%, #7160b6 46%, #b984d2 100%',
	Drizzle: '62deg, #a1b5ba 0%, #516372 100%',
	Snow: '160deg, #ecf4f6 0%, #bed1d4 46%, #397c9f 100%',
	Mist: '45deg, #95a3ad 0%, #7e9497 50%, #547072 100%',
	Smoke: '160deg, #8d8c86 0%, #8d837a 46%, #3f3b3e 100%',
	Haze: '62deg, #967a7c 0%, #ede0cd 100%',
	Dust: '284deg, #7b501c 0%, #d2a36b 100%',
	Fog: '193deg, #f3f3f3 0%, #838181 46%, #24260f 100%',
	Sand: '193deg, #f7d7cc 0%, #efa870 46%, #c6835b 100%',
	Ash: '258deg, #fafbf6 0%, #d3d4cf 46%, #515d55 100%',
	Squall: '258deg, #e9e1f0 0%, #8a87a2 46%, #545760 100%',
	Tornado: '258deg, #e9e1f0 0%, #323343 46%, #545760 100%',
	Clear: '160deg, #0093E9 0%, #80D0C7 100%',
	Clouds: {
		'few clouds': '0deg, #b8c4ec 0%, #6fa1ea 50%, #0d64cd 100%',
		'scattered clouds': mediumClouds,
		'broken clouds': mediumClouds,
		'overcast clouds': '135deg, #c3c3c3 0%, #909090 46%, #505050 100%',
	},
	Rain: {
		'moderate rain': lightRain,
		'heavy intensity': lightRain,
		'very heavy rain': lightRain,
		'extreme rain': lightRain,
		'freezing rain ': '349deg, #95a4bb 0%, #95a4bb 46%, #3e4551 100%',
		'light intensity shower rain': heavyRain,
		'shower rain': heavyRain,
		'heavy intensity shower rain': heavyRain,
		'ragged shower rain': heavyRain,
	}
};

class Background {
	static modifyBackground({weather, description}) {		
		let setPropertyValue;
		if (weather === 'Clouds' || weather === 'Rain') {
			setPropertyValue = 'linear-gradient(' + backgrounds[weather][description] + ')';
		} else {
			setPropertyValue = 'linear-gradient(' + backgrounds[weather] + ')';	
		}
		document.documentElement.style
								.setProperty('--bg-gradient', setPropertyValue);
	    document.documentElement.style.setProperty('--bg-opacity', '1');
	    background.classList.add('foreground');
	}
}

export { Background };
