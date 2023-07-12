import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";
import api from "./services/api";
import { useState } from "react";

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
          lang: "pt",
          is_day: 0,
        },
      })
      .then((response) => {
        const weatherData = response.data;
        setWeatherData(weatherData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header
        handleSearch={handleSearch}
        value={location}
        setLocation={setLocation}
        weatherData={weatherData}
      />

      {weatherData && <Main weatherData={weatherData} />}
      <GlobalStyle />
    </>
  );
}
