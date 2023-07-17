import { createContext } from "react";
import { Daily } from "../DailyHighlights";
import { Container, Content } from "./styles";

export const WeatherContext = createContext();

export function Main({ weatherData }) {
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
      <div className="header">
        <h1>Week</h1>
        <button> °C</button>
      </div>
      <WeatherContext.Provider value={weatherData}>
        <Content>
          {weatherData &&
            weatherData.forecast &&
            weatherData.forecast.forecastday.map((forecastDay) => {
              const date = new Date(forecastDay.date);
              const dayOfWeek = daysOfWeek[date.getDay()];

              return (
                <div key={forecastDay.date} className="content">
                  <p>{dayOfWeek}</p>
                  <img
                    src={forecastDay.day.condition.icon}
                    alt={forecastDay.day.condition.text}
                  />
                  <span>
                    <p>{forecastDay.day.maxtemp_c}°</p>
                    <p className="min-p">{forecastDay.day.mintemp_c}°</p>
                  </span>
                </div>
              );
            })}
        </Content>
        <Daily />
      </WeatherContext.Provider>
    </Container>
  );
}
