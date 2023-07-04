import { Container, Content } from "./styles";

export function Main({ weatherData }) {
  return (
    <Container>
      <Content>
        <h1>{weatherData.location.name} </h1>
        <img src={weatherData.current.condition.icon} alt="icon-weather" />
        <h1> {weatherData.current.temp_c} °C</h1>

        <p>{weatherData.current.condition.text}</p>
      </Content>
    </Container>
  );
}
