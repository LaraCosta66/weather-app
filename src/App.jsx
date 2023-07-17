import { SideBar } from "./components/SideBar";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";
import api from "./services/api";
import { useState } from "react";
import { Container } from "./styles/App";

const apiKey = process.env.REACT_APP_API_KEY;
export function App() {
  const [location, setLocation] = useState("London");
  const [weatherData, setWeatherData] = useState();

  const handleSearch = () => {
    api
      .get("/forecast.json", {
        params: {
          key: apiKey,
          q: location,
          days: 7,
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
      <SideBar
        handleSearch={handleSearch}
        value={location}
        setLocation={setLocation}
        weatherData={weatherData}
      />

      <Main weatherData={weatherData} />
      <GlobalStyle />
    </Container>
  );
}
