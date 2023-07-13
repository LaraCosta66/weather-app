import { Container } from "./styles";
import { BiSearch, BiTargetLock } from "react-icons/bi";

export function SideBar({ handleSearch, location, setLocation, weatherData }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: "long" };
    return date.toLocaleString("en-US", options);
  }
  function formatTime(timeString) {
    const date = new Date(timeString);
    const options = { hour: 'numeric', minute: 'numeric' };
    return date.toLocaleTimeString('en-US', options);
  }
  return (
    <Container>
      <div className="search-container">
        <BiSearch />
        <input
          type="text"
          placeholder="Search for places..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="button" id="btnSearch" onClick={() => handleSearch()}>
          <BiTargetLock className="icon" />
        </button>
      </div>
      {weatherData && weatherData.current && (
        <div className="weather-container">
          <img src={weatherData.current.condition.icon} alt="icon-weather" />
          <p>{weatherData.current.temp_c}°c</p>
        </div>
      )}
      {weatherData && weatherData.forecast && (
        <>
        <div className="time">
          <p>{formatDate(weatherData.forecast.forecastday[0].date)}, {formatTime(weatherData.location.localtime)}</p>
        </div>
        <div className="container-icons"> 
          <span><img src={weatherData.forecast.forecastday[0].hour[0].condition.icon} alt="weather-icon"  />{weatherData.forecast.forecastday[0].hour[0].condition.text}</span>
          <span><img src="https://cdn.weatherapi.com/weather/64x64/night/263.png" alt="icon"/>Rain - {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
          <div className="background">
            <p>{weatherData.location.name}, {weatherData.location.country}</p>
          </div>
        </div>
        </>
      )}
      
    </Container>
  );
}
