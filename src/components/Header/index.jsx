import { Container } from "./styles";
import { BiSearch, BiTargetLock } from "react-icons/bi";

export function Header({ handleSearch, location, setLocation, weatherData }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: "long" };
    return date.toLocaleString("en-US", options);
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
        <div className="time">
          <p>{formatDate(weatherData.forecast.forecastday[0].date)}</p>
        </div>
      )}
    </Container>
  );
}
