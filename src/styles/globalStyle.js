import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}
   * {
      box-sizing: border-box;
   }
   body{
      font-family: 'Noto Sans KR', sans-serif;
   }
   a {
      color: inherit;
      text-decoration: none;
   }
   button:focus {
      outline: none;
   }
`;

export default GlobalStyle;
