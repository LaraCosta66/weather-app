import { Container } from "./styles";

export function Header({ handleSearch, location, setLocation }) {
  return (
    <Container>
      <div><img src='https://cdn.weatherapi.com/weather/64x64/day/116.png' alt="icon"/><h2>Weather</h2></div>
      <div className="content">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="button" id="btnSubmit" onClick={() => handleSearch()}>
          Search
        </button>
      </div>
    </Container>
  );
}
