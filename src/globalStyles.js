import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: #333;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  * {
      box-sizing: border-box;
  }
`;

export const Container = styled.div`
  width:100%;
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
  position: relative;
`;


export default GlobalStyle;