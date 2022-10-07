import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  *, h1, h2, h3, p{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #ffffff;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
  }
`;
