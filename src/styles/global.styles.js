import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,500;0,600;1,100;1,200;1,300;1,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;

  }

`
