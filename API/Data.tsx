export async function getData(city: string) {
	try {
		const APIkey = import.meta.env.VITE_KEY;
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;

		const response = await fetch(url);
		const data = await response.json();
		const completeData: TempData = {
			temp: data.weather[0].main,

			numberTemp: data.main.temp,
			wind: data.wind.speed,
			humidity: data.main.humidity,
		};
		return completeData;
	} catch (error) {
		console.error(error);
	}
}

export interface TempData {
	temp: string;
	numberTemp: number;
	wind: number;
	humidity: number;
}
