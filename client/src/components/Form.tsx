import { useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
import './Form.css'

function Form() {
    const [city, setCity] = useState('');
    const [loader, setLoader] = useState(true)
    const [weather, setWeather] = useState([])
    const [geolocation, setGeolocation] = useState([])

    const handleCityChange = (e: any) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        window.scrollTo(0,0)
        setLoader(false)
        fetchWeather();
        fetchGeolocationCity();
    };

    const fetchWeather = () => {
        fetch(`http://localhost:3000/weather/${city}`)
            .then(res => res.json())
            .then((data) => {
                setWeather(data);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    };
    

    const fetchGeolocationCity = () => {
        fetch(`http://localhost:3000/geolocation/${city}`)
            .then(res => res.json())
            .then((data: any) => {
                const cityNames = data.map((name: any) => name.city);
                setGeolocation(cityNames);
            })
            .catch(error => console.error('Error fetching geolocation data:', error));
    };

    return (
        <div>
            {loader ? <Loader></Loader> : <Card city={geolocation} weather={weather}></Card>}
            <form onSubmit={handleSubmit} className="form">
                <label>
                    City:
                    <input type="text" value={city} onChange={handleCityChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
