import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        border-radius: 0;
    }
    a { color: inherit; text-decoration: none;} 
    html {
        width: 100%;
        height: 100%;
        background: #ffffff;
        transition: all 0.25s ease-in-out;
    }
    body {
      background: #ffffff;
      color: #000000;
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      transition: all 0.25s ease-in-out;
    }
    #root {
        width: 100%;
        height: 100%;
    }
`;

export default globalStyles;
