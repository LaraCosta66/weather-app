import { Daily } from "../DailyHighlights";
import { Container, Content } from "./styles";

export function Main({ weatherData }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleString("en-US", options);
  }
  function formatTime(timeString) {
    const date = new Date(timeString);
    const options = { hour: "numeric", minute: "numeric" };
    return date.toLocaleTimeString("en-US", options);
  }

  return (
    <Container>
      <div className="header">
        {weatherData && (
          <h2>
            {formatDate(weatherData.location.localtime)} |{" "}
            {formatTime(weatherData.location.localtime)}
          </h2>
        )}
      </div>
      <Content>
        {weatherData && weatherData.current && (
          <h1>{weatherData.current.condition.text}</h1>
        )}
      </Content>
      <Daily />
    </Container>
  );
}
