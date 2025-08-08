import "./card.css";
import { SearchBar } from "../SearchBar";
import { CardInfo } from "../CardInfo";
import imagenes from "../imagenes";
import useGetWeather from "../../hooks/useGetWeather";

const Card = () => {
  const { city, data, handleCity, handleData } = useGetWeather();

  return (
    <div className="card">
      <SearchBar city={city} handleCity={handleCity} handleData={handleData} />

      <img className="weather-icon" src={imagenes[data.temp]} />

      <CardInfo data={data} />
    </div>
  );
};

export default Card;
