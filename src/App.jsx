import { SideBar } from "./components/SideBar";
// import { Main } from "./components/Main";
import { Container, GlobalStyle } from "./styles/global";
import api from "./services/api";
import { useState } from "react";


const apiKey = process.env.REACT_APP_API_KEY;
export function App() {
  const [location, setLocation] = useState("london");
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
        const data = response.data;
        setWeatherData(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      {/* <Main weatherData={weatherData} /> */}
      <SideBar
        handleSearch={handleSearch}
        value={location}
        setLocation={setLocation}
        weatherData={weatherData}
      />

      
      <GlobalStyle />
    </Container>
  );
}
