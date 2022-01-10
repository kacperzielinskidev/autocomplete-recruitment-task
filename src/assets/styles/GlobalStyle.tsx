import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
`;
