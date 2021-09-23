import "regenerator-runtime/runtime";

class Weather {
	static getWeather = async (search) => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1b84323af01934237a6909b685066330`,
			{ mode: "cors" }
		);
		const finalData = await response.json();
		return finalData;
	};

	static processData = async (data) => {
		const { name, weather, main } = data;
		const { icon, description} = weather[0];
		const { humidity, temp, temp_max, temp_min} = main;
		return {name, icon, description, humidity, temp, temp_max, temp_min};
	};
}

export { Weather };
