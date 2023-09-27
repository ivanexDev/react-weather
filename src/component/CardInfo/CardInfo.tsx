import React from 'react';
import { TempData } from '../../../API/interface';

export type CardInfoProps = {
	data: TempData
}

const CardInfo: React.FC<CardInfoProps>  = ({data}) => {
	return <div className="card-info">
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
};

export default CardInfo;
