import "regenerator-runtime/runtime";

class Weather {
	static getWeather = async (search) => {
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1b84323af01934237a6909b685066330`,{ mode: "cors" });
			if (response.status === 404) {
				  throw new Error()
			} else {
				const finalData = await response.json();
				return finalData;
			}
		} catch(e) {
			return false
		}
	};

	static processData = async (data) => {
		const { name, weather, main } = data;
		const { icon, description} = weather[0];
		const { humidity, temp, temp_max, temp_min} = main;
		const mainWeather = weather[0].main;
		return {name, icon, description, humidity, temp, temp_max, temp_min, mainWeather};
	};
}

export { Weather };
