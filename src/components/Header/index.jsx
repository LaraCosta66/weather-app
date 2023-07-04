import { useState } from "react";
import { Container } from "./styles";

export function Header({ handleSearch }) {
  const [location, setLocation] = useState("");

  return (
    <Container>
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
