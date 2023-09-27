import { useState } from "react";
import { TempData } from "../../API/interface";
import { getData } from "../../API/Data";

const useGetWeather = () => {

    const [city, setCity] = useState("");
	const [data, setData] = useState<TempData>({
		temp: "weather",
		numberTemp: 0,
		wind: 0,
		humidity: 0,
	});

	const handleData = async (city: string) => {
		const data = await getData(city);
		setData(
			data ?? {
				temp: "weather",
				numberTemp: 0,
				wind: 0,
				humidity: 0,
			}
		);
	};

	const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCity(event.target.value);
	};

  return {
    handleData,
    handleCity,
    data,
    city
  }
}

export default useGetWeather