import send from "../assets/animated/send.svg";
import Clouds from "../assets/animated/Clouds.svg";
import Clear from "../assets/animated/Clear.svg";
import Mist from "../assets/animated/Mist.svg";
import Haze from "../assets/animated/Haze.svg";
import Rain from "../assets/animated/Rain.svg";
import weather from "../assets/animated/weather.svg";

const imagenes: Imagenes = {
	send: send,
	Clouds: Clouds,
	Clear: Clear,
	Mist: Mist,
	Haze: Haze,
	Rain: Rain,
	weather: weather,
};

type Imagenes = {
	[key: string]: string;
};

export default imagenes;
