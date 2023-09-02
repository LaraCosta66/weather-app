import { styled } from "styled-components";

export const Container = styled.div`

  width: 300px;
  height: 600px;
  /* border-radius: 30px 0 0 30px; */
  padding: 25px;
  background: var(--white);

  h2 {
    font-weight: bold;
  }
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .search-container input[type="text"] {
    border: none;
    border-bottom: 1px solid var(--gray-400);
    background: var(--white);
    font-size: 14px;
    padding: 2px;
  }
  #btnSearch {
    position: relative;
    display: flex;
    align-items: center;
    width: auto;
    height: 30px;
    border: none;
    padding: 5px;
    background-color: var(--gray-400);
    color: white;
    cursor: pointer;
    border-radius: 20%;
  }
  .icon {
    width: 40px;
    height: 20px;
  }
  .weather-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .weather-container img {
    width: 128px;
    height: 128px;
  }
  .weather-container p {
    font-family: "IBM Plex Sans Light", sans-serif;
    font-size: 3.5rem;
    font-weight: bold;
  }
  .time {
    display: flex;
    justify-content: center;
    padding: 10px;
    font-size: 1.5rem;
    border-bottom: 1px solid var(--gray-300);
  }
  .container-icons {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    gap: 10px;
  }
  .container-icons img {
    width: 32px;
    height: 32px;
  }
  .container-icons span {
    display: flex;
    align-items: center;
  }
  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: auto;
    font-size: 1.025rem;
    font-weight: bold;
    height: 100px;
    border-radius: 20px;
    background-image: url("../assets/bg-image.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
