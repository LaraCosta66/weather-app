import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --gray-700:#374151;
    --gray-400:#9ca3af;
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
    background: var(--gray-300);
    padding: 50px;
}
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`;
