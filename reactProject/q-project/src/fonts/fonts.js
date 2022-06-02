import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main: black;
  }
  @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

* {
  font-family: 'Jua';
}
`;

export default GlobalStyle;
