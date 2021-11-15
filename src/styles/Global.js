import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    --text-black: #000000;
    --text-white: #fff;
    --background-color: teal;
    --font-family: "Urbanist", sans-serif;
  }

  *, *::after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 62.5%;
    box-sizing: inherit;
  }

  body {
    font-family: var(--font-family);
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--text-black);
  }

  a {
    outline: none;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5 {
    line-height: 1;
  }
`;
export default GlobalStyles;
