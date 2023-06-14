import "./card.css";
import { getData, TempData } from "../../API/Data";
import { useState } from "react";
import imagenes from "./imagenes";

function Card() {
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
	const [city, setCity] = useState("");
	const [data, setData] = useState<TempData>({
		temp: "weather",
		numberTemp: 0,
		wind: 0,
		humidity: 0,
	});

	return (
		<div className="card">
			<div className="card-head">
				<form className="card-form">
					<input
						className="card-input"
						value={city.toUpperCase()}
						placeholder="Ciudad"
						type="text"
						onChange={(e) => {
							handleCity(e);
						}}
					/>
					<button
						className="card-button"
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							handleData(city);
						}}>
						<img className="send-icon" src={imagenes.send} />
					</button>
				</form>
			</div>
			<img className="weather-icon" src={imagenes[data.temp]} />

			<div className="card-info">
				<h2>{Math.floor(data.numberTemp)}°C</h2>
				<div className="card-more-info">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						Humidity: <h2>{data.humidity}</h2>%
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						Wind: <h2>{Math.floor(data.wind * 3.6)}</h2>km/h
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
