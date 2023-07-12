import { Container } from "./styles";
import {BiSearch, BiTargetLock} from "react-icons/bi"
// import {} from "react-icons/fi"
export function Header({ handleSearch, location, setLocation }) {
  return (
    <Container>
     <div className="search-container">
      <BiSearch />
     <input
          type="text"
          placeholder="Search for places..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="button" id="btnSearch" onClick={() => handleSearch()}>
          <BiTargetLock  className="icon"/>
        </button>
      </div> 
    
     
        
        {/* <img src='https://cdn.weatherapi.com/weather/64x64/day/116.png' alt="icon"/> */}
    </Container>
  );
}
