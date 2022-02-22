import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import portfolioData from '../../data/portfolio';
import Banner from '../../styles/Banner';

const Container = styled.div`
   max-width: 1290px;
   margin: 0 auto;
   padding: 150px 0 265px;
   display: flex;
   flex-wrap: wrap;
   
   .card {
      display: block;
      width: 420px;
      height: 560px;
      flex-grow: 0;
      margin-bottom: 15px;
      margin-right: 15px;
      padding: 24px;
      box-sizing: border-box;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background-size: cover;
      background-position: center;

      .title {
         margin-bottom: 8px;
      }
      .description {
         span {
            font-size: 14px;
            margin-right: 6px;
         }
      }

      &:nth-child(3n) {
         margin-right: 0;
      }
   }

   @media only screen and (max-width: 1290px) {
      max-width: auto;
      width: 100%;
      .card {
         width: 100%;
         height: calc(100vw / 3 * 4);
         margin-right: 0;
         margin-bottom: 0;
      }
   }
`;

const Portfolio = () => {
   return (
      <section>
         <Banner.Default>
            <Banner.Container.Default>
               <h1>Our Portfoilo</h1>
            </Banner.Container.Default>
         </Banner.Default>
         <Container>
            {portfolioData.map((d, idx) => (
               <Link
                  to={`/portfolio/${idx}`}
                  className="card"
                  key={idx}
                  style={{ 
                     backgroundImage: d.thumbnail ?
                        `url(/nineright-portfolio/images/portfolio/thumbnail/${d?.thumbnail})` :
                        `url(/nineright-portfolio/images/thumbnail_default.png)`
                  }}
               >
                  <div className="title">{d?.title}</div>
                  <div className="description">
                     {d?.skills.slice(0, 2).map((text, textIndex) => <span key={textIndex}>{text}</span>)}
                  </div>
               </Link>
            ))}
            {/* <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link>
            <Link to="/portfolio/1" className="card">
               <div className="title">1.2m record</div>
               <div className="description">
                  <span>반응형</span>
                  <span>Web</span>
               </div>
            </Link> */}
         </Container>
      </section>
   );
}

export default Portfolio;