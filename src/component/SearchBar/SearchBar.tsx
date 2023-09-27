import imagenes from '../imagenes';
import './SearchBar.css';

export type SearchBarProps = {
	city: string;
	handleCity: (city: React.ChangeEvent<HTMLInputElement>) => void;
	handleData: (city: string) => void;

}

const SearchBar: React.FC<SearchBarProps>  = ({city, handleCity, handleData}) => {
	return     <div className="card-head">
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
};

export default SearchBar;
