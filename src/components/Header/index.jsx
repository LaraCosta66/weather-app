import { useState } from "react";
import {Container} from './styles';

const baseURL = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_API_KEY;


export function Header() {
  const [request, setRequest] = useState();
  async function getCurrentWeather() {
    const response = await fetch(`${baseURL}${apiKey}&q=${request}}`, { mode: 'cors' });
    const responseData = await response.json();
    return console.log(responseData);

  }

  return (
    <Container>
        <p>Imagem aqui</p>
      <div className="content">
          <input
            type="text"
            placeholder="Location"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
          <button type="button" id="btnSubmit" onClick={getCurrentWeather}>
            Search
          </button>
      </div>
    </Container>
  );
}
