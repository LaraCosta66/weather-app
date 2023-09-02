import { createGlobalStyle, styled } from "styled-components";
import backgroundImage from '../assets/background.jpg'
export const GlobalStyle = createGlobalStyle`
:root{
    --gray-700:#374151;
    --gray-500:#737373;
    --gray-400:#84a4ac;
    --gray-300: #d1d5db;
    --gray-200:#e5e7eb;
    --white:#f3f4f6;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans Light', sans-serif;
}
html{
    @media (max-width: 1080px ) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}
body{
    padding:30px;
    background:  url(${backgroundImage} ) no-repeat;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semi-transparente */
    background-blend-mode: overlay; /* Mistura de fundo */
    opacity: 0.8; /* Opacidade da imagem de fundo */
}
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`;
export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width:auto ;
height: auto;
background:  url(${backgroundImage} ) no-repeat;
border-radius: 10px;
border: 10px solid gray;


`