import { useEffect, useState } from "react";
import {Container} from './styles';
import {WiNightAltCloudyWindy} from 'react-icons/wi';
import api from "../../services/api"
// const baseURL = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_API_KEY;


export function Header() {
  const [request, setRequest] = useState();
  // const [data, setData]= useState([]);

  useEffect(()=>{
    api.get('/current.json',{
      params:{
      key: apiKey,
      q:'London',

    }})
    .then(response => {
      const weatherData = response.data;
      console.log(weatherData);
    })
    // .then(response => setData(response.data))
    .catch(error => console.log(error))
  },[])


  return (
    <Container>
        <WiNightAltCloudyWindy width="50px" height="50px"/>
      <div className="content">
          <input
            type="text"
            placeholder="Location"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
          <button type="button" id="btnSubmit" onClick={() => console.log('clicou')}>
            Search
          </button>
      </div>
    </Container>
  );
}
