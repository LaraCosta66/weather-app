import { Container, Content } from "./styles";

export default function Daily(weatherData) {
  return (
    <Container>
      <h2>Today's Highlights</h2>

      <Content>
        <div className="content-div">
          <h3>UV INDEX</h3>
          <p>5</p>
        </div>
        <div className="content-div">
          <h3>Wind Status</h3>
          <p>7.70 km/h</p>
          <span>GPS WSW</span>
        </div>
        <div className="content-div">
          <h3>Sunrise & Sunset</h3>
          <span>Icone up e horario</span>
          <span>Icone down e horario</span>
        </div>
        <div className="content-div">
          <h3>Humidity</h3>
          <p>12%</p>
          <span>Normal</span>
        </div>
        <div className="content-div">
          <h3>Visibility</h3>
          <p>5.2 km</p>
          <span>Avarage</span>
        </div>
        <div className="content-div">
          <h3>Air quality</h3>
          <p>109</p>
          <span>Unhealthy</span>
        </div>
      </Content>
    </Container>
  );
}
