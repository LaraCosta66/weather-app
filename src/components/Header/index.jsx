import {useState } from "react";
import { Container } from "./styles";
import { WiNightAltCloudyWindy } from "react-icons/wi";
import api from "../../services/api";

const apiKey = process.env.REACT_APP_API_KEY;

export function Header() {
  const [location, setLocation] = useState("london");
  const [weatherData, setWeatherData] = useState();

  const handleSearch = () => {
    api
      .get("/current.json", {
        params: {
          key: apiKey,
          q: location,
        },
      })
      .then((response) => {
        const weatherData = response.data;
        setWeatherData(weatherData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <WiNightAltCloudyWindy />
      <div className="content">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="button" id="btnSubmit" onClick={handleSearch}>
          Search
        </button>
        {weatherData && (
          <div>
            <p>Current temperature: {weatherData.current.temp_c} °C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
          </div>
        )}
      </div>
    </Container>
  );
}
