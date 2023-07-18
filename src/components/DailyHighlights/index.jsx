import { Container, Content } from "./styles";
import { WeatherContext } from "../Main";
import { useContext } from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from "react-icons/bs";
import { TbGps } from "react-icons/tb";
export function Daily() {
  const weatherData = useContext(WeatherContext);
  return (
    <Container>
      <h2>Today's Highlights</h2>

      {weatherData && weatherData.forecast && (
        <Content>
          <div className="content-div">
            <h3>UV INDEX</h3>
            <p>{weatherData.current.uv}</p>
          </div>

          <div className="content-div">
            <h3>Wind Status</h3>
            <p>{weatherData.current.wind_kph} KM/h</p>
            <span><TbGps /> {weatherData.current.wind_dir}</span>
          </div>
          <div className="content-div">
            <h3>Sunrise & Sunset</h3>
            <span>
              <BsFillArrowUpCircleFill />
              {weatherData.forecast.forecastday[0].astro.sunrise}
            </span>
            <span>
              <BsFillArrowDownCircleFill />
              {weatherData.forecast.forecastday[0].astro.sunset}
            </span>
          </div>
          <div className="content-div">
            <h3>Humidity</h3>
            <p>{weatherData.current.humidity}%</p>
          </div>
          <div className="content-div">
            <h3>Visibility</h3>
            <p>{weatherData.current.vis_km} KM</p>
          </div>
          <div className="content-div">
            <h3>Cloud</h3>
            <p>{weatherData.current.cloud}</p>
          </div>
        </Content>
      )}
    </Container>
  );
}
