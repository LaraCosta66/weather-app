import { Container, Content } from "./styles";
import { WeatherContext } from "../Main";
import { useContext } from "react";

export function Daily() {
  const weatherData = useContext(WeatherContext);
  return (
    <Container>
      <h2>Today's Highlights</h2>

      {weatherData && (
        <Content>
          <div className="content-div">
            <h3>UV INDEX</h3>
            <p>{weatherData.current.condition.text}</p>
          </div>

          <div className="content-div">
            <h3>Wind Status</h3>
            <p>{weatherData.current.condition.text}</p>
            <span>{weatherData.current.condition.text}</span>
          </div>
          <div className="content-div">
            <h3>Sunrise & Sunset</h3>
            <span>Icone up e horario</span>
            <span>Icone down e horario</span>
          </div>
          <div className="content-div">
            <h3>Humidity</h3>
            <p>{weatherData.current.condition.text}</p>
            <span>{weatherData.current.condition.text}</span>
          </div>
          <div className="content-div">
            <h3>Visibility</h3>
            <p>{weatherData.current.condition.text}</p>
            <span>{weatherData.current.condition.text}</span>
          </div>
          <div className="content-div">
            <h3>Air quality</h3>
            <p>{weatherData.current.condition.text}</p>
            <span>{weatherData.current.condition.text}</span>
          </div>
        </Content>
      )}
    </Container>
  );
}
