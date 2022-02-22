import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledHeader = styled.header`
   background-color: black;
   height: 70px;
   border-bottom: 1px solid #0f0f0f;
   .container {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0 7%;
      a {
         color: white;
         font-size: 13px;
         margin-left: 48px;
      }
   }
   
   @media only screen and (max-width: 1200px) {
      
   }
`;

const Header = () => {
   return (
      <StyledHeader>
         <div className="container">
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
         </div>
      </StyledHeader>
   );
}

export default Header;
