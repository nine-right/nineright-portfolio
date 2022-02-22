import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import '../fonts/fonts.css';

export default createGlobalStyle`
   ${reset};

   body {
      font-family: Pretendard;
      font-weight: 400;
      color: #0f0f0f;
   }

   a {
      text-decoration: none;
      color: inherit;
   }
`;