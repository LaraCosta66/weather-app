import { Container } from "./styles";
import { BiSearch } from "react-icons/bi";
import { HiOutlineLocationMarker as PinPoint } from "react-icons/hi";
import { FaWind } from "react-icons/fa";

export function SideBar({ handleSearch, location, setLocation, weatherData }) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <Container>
      <div className="search-section">
        <div id="location">
          <PinPoint className="icon" />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className="btn" onClick={() => handleSearch()}>
          <span className="text">Search</span>
          <span className="searchIcon">
            <BiSearch className="searchIcon" />
          </span>
        </button>
      </div>
      {weatherData && weatherData.current && (
        <div className="weatherSection">
          <h3>
            {weatherData.location.name}, {weatherData.location.country}
          </h3>
          <h1 className="title">{weatherData.current.temp_c}°C</h1>
          <p>
            <FaWind /> {weatherData.current.wind_dir},{" "}
            {weatherData.current.wind_kph}km/h
          </p>
        </div>
      )}

      <div className="content">
        <h2>The Next Days Forecast</h2>
        {weatherData.forecast &&
          weatherData.forecast.forecastday.map((forecastDay) => {
            const date = new Date(forecastDay.date);
            const dayOfWeek = daysOfWeek[date.getDay()];
            return (
              <div className="forecast-box" key={forecastDay.date}>
                <div className="image">
                  <img
                    src={forecastDay.day.condition.icon}
                    alt={forecastDay.day.condition.text}
                  />
                </div>
                <div className="condition">
                  <p>{dayOfWeek}</p>
                  <p className="text-condition">
                    {forecastDay.day.condition.text}
                  </p>
                </div>
                <div className="tempture">
                  <p className="bold-text">{forecastDay.day.maxtemp_c}°</p>
                  <p>{forecastDay.day.mintemp_c}°</p>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
}
